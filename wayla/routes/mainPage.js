const express = require('express');
const router = express.Router();
const {db, collection} = require('../services/firebase')
const createError = require('http-errors');
const config = require('config');

router.get('/', async function(req, res, next) {
    res.render('mainPage',{ title: config.get('appName') });
  });
  
  module.exports = router;