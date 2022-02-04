var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('consult');
})
// router.get('/signupUser', function (req, res) {
//   res.render('signupUser');
// })

// router.get('/signupvet', function (req, res) {
//   res.render('signupVet');
// })

// router.get('/loginUser', function (req, res) {
//   res.render('loginVet');
// })

// router.get('/consult', function (req, res) {
//   res.render('consult');
// })

// router.get('/requestConsult', function (req, res) {
//   res.render('requestConsult');
// })
//this function works!
// router.get('/', function (req, res) {
//   res.send('Main Homepage');
// })

module.exports = router;

