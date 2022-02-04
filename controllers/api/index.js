const router = require('express').Router();

<<<<<<< HEAD
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

=======
// const homeRoutes = require('../homeRoutes');

// // router uses homeRoutes as entry page
// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
>>>>>>> 57fb3ec546c879170c5da0fab257d6494ba3e932

module.exports = router;


//fixing conflicts