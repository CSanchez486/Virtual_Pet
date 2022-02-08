const router = require('express').Router();
const { Forum } = require('../models')

router.get('/vet', async (req, res) => {
  const featurepost = await Forum.findOne({ where: { post: "My cat fell from a tree" } })
  res.render('vetlogin', {
    question: featurepost.post,
    response: featurepost.response
  })
})

router.get('/user', async (req, res) => {
  const featurepost = await Forum.findOne({ where: { post: "My cat fell from a tree" } })
  res.render('userlogin', {
    question: featurepost.post,
    response: featurepost.response
  })
})

router.get('/forum', async (req, res) => {
  const forumdata = await Forum.findAll();
  const forums = forumdata.map((forum) =>
    forum.get({ plain: true })
  );
  res.render('forums', { forums })
})

router.get('/post', async (req, res) => {
  const forumdata = await Forum.findAll();
  const forums = forumdata.map((forum) =>
    forum.get({ plain: true })
  );
  res.render('userquestion')
})

router.get('/forum/:id', async (req, res) => {
  const postdata = await Forum.findByPk(req.params.id)
  res.render('response', { question: postdata.post })
})

router.get('/consult', async (req, res) => {
  res.render('requestConsult')
})

router.get('/', async (req, res) => {
  const featurepost = await Forum.findOne({ where: { post: "My cat fell from a tree" } })
  res.render('homepage', {
    question: featurepost.post,
    response: featurepost.response
  })
})

router.get('/featured', async (req, res) => {
  const featurepost = await Forum.findOne({ where: { post: "My cat fell from a tree" } })
  res.render('featured', {
    question: featurepost.post,
    response: featurepost.response
  })
})
module.exports = router;

