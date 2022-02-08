const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api')
const hbsRoutes = require('./hbsRoutes')
// router uses homeRoutes as entry page
router.use('/api', apiRoutes);
// router.use('/hi', homeRoutes);
router.use('/', hbsRoutes);
module.exports = router;