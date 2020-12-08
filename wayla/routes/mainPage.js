const express = require('express');
const router = express.Router();
const {db, collection} = require('../services/firebase')
const createError = require('http-errors');
const config = require('config');

router.get('/', async function(req, res, next) {
    let movies = await db.collection('movies').get();
    let moviesArray = [];
    for (i=0; i < movies.size; i++){
        let movie = movies.docs[i].data() 
        moviesArray.push( {
            owner: movie.owner,
            title: movie.title
        });
        console.log(moviesArray)
    }
    res.render('mainPage',{ title: config.get('appName'),movies: moviesArray});
  });
  
  module.exports = router;

  class Movie{
     
    constructor(owner, added, description, active, url){
        this.owner=owner;
        this.added=added;
        this.description=description;
        this.active=active;
        this.url=url;
    }

    
}