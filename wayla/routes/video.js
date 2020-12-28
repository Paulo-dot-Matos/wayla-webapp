const express = require('express');
const router = express.Router();
const {db, collection, getTime} = require('../services/firebase')


router.get('/', async function(req, res, next) {
    let movies = await db.collection('movies').doc(req.query.id).get();
    let reviews = await db.collection('movies').doc(req.query.id).collection('reviews').get();
    

    if (!reviews.empty) {
      let user = await db.collection(collection).doc(reviews.docs[0].data().owner).get();
      let map = new Map();
      reviews.docs.map(async function(review){
          let data = review.data()
          data.owner = user.data().name;
          map.set(review.id,data)
      });
  
      res.render('video',{ url: movies.data().url,reviews: Object.fromEntries(map)});
    } else {
      res.render('video',{ url: movies.data().url});
    }

  });

  router.get('/addVideo', function(req, res, next) {

    res.render('addVideo');
  });

  router.post('/', async function(req, res, next) {

    const video = await db.collection('movies').add({
        owner: req.body.owner,
        title: req.body.title,
        url: req.body.url,
        active: true,
        added: getTime()
    })
    res.render('success')
  });
  
  module.exports = router;