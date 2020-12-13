const express = require('express');
const router = express.Router();
const {db, collection} = require('../services/firebase')
const createError = require('http-errors');
const config = require('config');

router.get('/', async function(req, res, next) {
    let movies = await db.collection('movies').get();
    let moviesArray = [];
    movies.docs.map(function(doc){
        console.log(doc.id)
        moviesArray.push(doc.data());
    });
    console.log(moviesArray);
    res.render('mainPage',{ title: config.get('appName'),movies: moviesArray});
  });
  
  module.exports = router;