const express = require('express');
const router = express.Router();
const {db, collection} = require('../services/firebase')
const createError = require('http-errors');
const config = require('config');


router.post('/', async function(req, res, next) {
  let user = await db.collection(collection).where('email','==',req.body.username).where('password','==',req.body.password).get();
  
  if (user.empty){
    next(createError(400,'Incorrect email or password.'));
  } else {
    //res.send("Hello firebase:  " + user.docs[0].data().Name);
    res.redirect('/main')
  }
});

module.exports = router;