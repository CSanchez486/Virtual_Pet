const router = require('express').Router();
const { Forum } = require('../models')

//Display the vetlogin
router.get('/vet', async (req, res) => {
  res.render('vetlogin')
})

//Display the userlogin
router.get('/user', async (req, res) => {
  res.render('userlogin')
})

//Display the forums page
router.get('/forum', async (req, res) => {
  const forumdata = await Forum.findAll();
  const forums = forumdata.map((forum) =>
    forum.get({ plain: true })
  );
  res.render('forums', { forums })
})

//Display the page to post a question
router.get('/post', async (req, res) => {
  const forumdata = await Forum.findAll();
  const forums = forumdata.map((forum) =>
    forum.get({ plain: true })
  );
  res.render('userquestion')
})

//Display the individual question to reply
router.get('/forum/:id', async (req, res) => {
  const postdata = await Forum.findByPk(req.params.id)
  res.render('response', { question: postdata.post })
})

//Display the consult page
router.get('/consult', async (req, res) => {
  res.render('requestConsult')
})

//Displays the homepage
router.get('/', async (req, res) => {
  const featurepost = await Forum.findOne({ where: { post: "My cat fell from a tree" } })
  res.render('homepage', {
    question: featurepost.post,
    response: featurepost.response
  })
})

module.exports = router;

