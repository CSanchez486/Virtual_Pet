const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User } = require('../../models');
const { Vet } = require('../../models');

// log-in route: Redirects page from login to main after log-in is completed
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res. redirect('/');
        return;
    }
})


res.render('login');

module.exports = router;
