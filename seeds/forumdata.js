const { Forum } = require('../models');

const forumData = [
    {
        post: "My cat fell from a tree",
        response: "Your cat is fine"
    },
    {
        post: "My dog ate my homework"
    }
];

const seedForum = () => Forum.bulkCreate(forumData);
module.exports = seedForum;