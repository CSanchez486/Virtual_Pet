`const router = require('express').Router();`
const withAuth = require('../../utils/auth');
const { User } = require('../../models');
const { Vet } = require('../../models');

// log-in route: Redirects page from login to main after log-in is completed for vet portal
router.get('/login/vet', (req, res) => {
    if (req.session.logged_in) {
        res. redirect('/');
        return;
    }
})

// log-in route: Redirects page from login to main after log-in is completed for user portal
router.get('/login/user', (req, res) => {
    if (req.session.logged_in) {
        res. redirect('/');
        return;
    }
})

res.render('login');

module.exports = router;
