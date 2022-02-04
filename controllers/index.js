const router = require('express').Router();
const homeRoutes = require('../homeRoutes');

// router uses homeRoutes as entry page
router.use('/', homeRoutes);

module. exports = router;