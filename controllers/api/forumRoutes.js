const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Forum } = require('../../models')

router.post('/', async (req, res) => {
    try {
        const newPost = await Forum.create({
            post: req.body.post,
            reply: req.body.reply
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;