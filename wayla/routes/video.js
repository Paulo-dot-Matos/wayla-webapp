const express = require('express');
const router = express.Router();
const {db, collection} = require('../services/firebase')


router.get('/', async function(req, res, next) {
    let movies = await db.collection('movies').doc(req.query.id).get();
    let reviews = await db.collection('movies').doc(req.query.id).collection('reviews').get();
    let user = await db.collection(collection).doc(reviews.docs[0].data().owner).get();

    let map = new Map();
    reviews.docs.map(async function(review){
        let data = review.data()
        data.owner = user.data().name;
        map.set(review.id,data)
    });

    res.render('video',{ url: movies.data().url,reviews: Object.fromEntries(map)});
  });
  
  module.exports = router;