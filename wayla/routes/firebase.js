const express = require('express');
const router = express.Router();
const {db} = require('../services/firebase')

/* GET home page. */
router.get('/', async function(req, res, next) {
  let user = await db.collection('Users').doc('Admin').get();
  res.send("Hello firebase:  " + user.data().Name);
});

module.exports = router;