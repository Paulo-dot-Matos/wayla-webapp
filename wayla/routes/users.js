const express = require('express');
const router = express.Router();
const {db, collection, getTime} = require('../services/firebase')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addUser');
});

router.post('/', async function(req, res, next) {

  const video = await db.collection('users').add({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      type: req.body.type,
      company: req.body.company,
      createdAt: getTime()
  })
  res.render('success')
});

module.exports = router;
