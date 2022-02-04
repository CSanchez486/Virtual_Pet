const router = require('express').Router();

const homeRoutes = require('./homeRoutes');

// router uses homeRoutes as entry page
router.use('/', homeRoutes);
<<<<<<< HEAD
// router.use('/api', apiRoutes);
=======
router.use('/api', apiRoutes);
>>>>>>> cc5a124d72a5e2011bd32f215e1bfb5c78fcc942

module.exports = router;