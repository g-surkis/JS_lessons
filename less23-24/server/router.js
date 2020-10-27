const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
  res.json({ message: 'Wiki home page' });
})


router.get('/about', function (req, res) {
  console.log('req: ', req.query);
  res.json('About this wiki');
})

router.get('/api', function (req, res) {
  console.log('req: ', req.query);

  res.json('Hello from USERS');
})

module.exports = router;
