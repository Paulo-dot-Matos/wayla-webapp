const express = require('express');
const router = express.Router();
const {db, collection} = require('../services/firebase')
const createError = require('http-errors');
const config = require('config');

router.get('/', async function(req, res, next) {
    let movies = await db.collection('movies').get();

    let map = new Map();
    movies.docs.map(function(doc){
        console.log(doc.id)
        map.set(doc.id,doc.data())
        console.log(doc.data())
    });

    //res.render('mainPage',{ title: config.get('appName'),movies: moviesArray, id: moviesId});
    // In priceple the new version o pug support the map type, in the meanwhile we must convert to Object.
    res.render('mainPage',{ title: config.get('appName'),movies: Object.fromEntries(map)});
  });
  
  module.exports = router;