const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Forum } = require('../../models')

router.post('/', async (req, res) => {
    try {
        const newPost = await Forum.create({
            post: req.body.post,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.put('/:id', async (req, res) => {
    try {
        const newReply = await Forum.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        console.log(req);
        console.log(newReply);
        if (!newReply) {
            res.status(400).json({ message: 'Post your reply' });
            return;
        }
        console.log('hello');
        console.log(newReply);
        res.status(200).json(newReply);
    } catch (err) {
        res.status(400).json(err);
    }
})
module.exports = router;