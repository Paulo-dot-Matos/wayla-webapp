const express = require('express');
const router = express.Router();
const config = require('config')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: config.get('appName') });
});

module.exports = router;
