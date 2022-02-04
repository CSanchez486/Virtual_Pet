const router = require('express').Router();

const apiRoutes =require('../api');
const homeRoutes = require('../homeRoutes');
const userPortal = require('./userPortalRoutes');
const userRoutes = require("./userRoutes");
const vetRoutes = require('./vetRoutes')

router.use('/',homeRoutes)
router.use('/api', apiRoutes);
router.use('/user_signup', userPortal);
router.use('/user', userRoutes);
router.use('/vet', vetRoutes);

module.exports = router;


//fixing conflicts
