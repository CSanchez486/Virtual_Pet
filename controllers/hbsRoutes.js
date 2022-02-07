const router = require('express').Router();
const {Forum} = require('../models')

router.get('/vet', async (req, res) => {
  const featurepost = await Forum.findOne({where: {post: "My cat fell from a tree"}})
  res.render('vetlogin', {question: featurepost.post,
response: featurepost.response})
})

router.get('/user', async (req, res) => {
  const featurepost = await Forum.findOne({where: {post: "My cat fell from a tree"}})
  res.render('userlogin', {question: featurepost.post,
response: featurepost.response})
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
router.get('/featured', async (req, res) => {
  const featurepost = await Forum.findOne({where: {post: "My cat fell from a tree"}})
  res.render('featured', {question: featurepost.post,
response: featurepost.response})
})
module.exports = router;

