const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
  res.json({ message: 'Wiki home page' });
})


router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;
