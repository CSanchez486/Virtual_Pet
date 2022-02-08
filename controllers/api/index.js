
const router = require('express').Router();

const userPortal = require('./userPortalRoutes');
const userRoutes = require("./userRoutes");
const vetRoutes = require('./vetRoutes');
const forumRoutes = require('./forumRoutes');
// router.use('/user_signup', userPortal);
router.use('/user', userRoutes);
router.use('/vet', vetRoutes);
router.use('/forum', forumRoutes);

module.exports = router;
