var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('signup');
})

//this function works!
// router.get('/', function (req, res) {
//   res.send('Main Homepage');
// })

module.exports = router;

