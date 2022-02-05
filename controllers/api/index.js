const router = require('express').Router();

const userPortal = require('./userPortalRoutes');
const userRoutes = require("./userRoutes");
const vetRoutes = require('./vetRoutes')

// router.use('/user_signup', userPortal);
router.use('/user', userRoutes);
router.use('/vet', vetRoutes);

module.exports = router;

