const express = require('express');
const router = express.Router();
const {db, collection} = require('../services/firebase')


router.get('/', async function(req, res, next) {
    let movies = await db.collection('movies').doc(req.query.id).get();
    res.render('video',{ url: movies.data().url});
  });
  
  module.exports = router;