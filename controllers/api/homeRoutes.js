const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User } = require('../../models');
const { Vet } = require('../../models');

// log-in route: Redirects page from login to main after log-in is completed for vet portal
router.get('/login/vet', withAuth, async (req, res) => {
    try { 
        const vetData = await Vet.findAll({
            attributes: { exclude: ['password']}, 
        });
<<<<<<< HEAD
    
=======

>>>>>>> cc5a124d72a5e2011bd32f215e1bfb5c78fcc942
        const vet = vetData.map((project) => project.get({plain: true}));

        res.render('main', {
            users,
            logged_in: req.session.logged_in,
        });

<<<<<<< HEAD

=======
>>>>>>> cc5a124d72a5e2011bd32f215e1bfb5c78fcc942
           

// log-in route: Redirects page from login to main after log-in is completed for user portal
router.get('/login/user', withAuth,  (req, res) => {
    if (req.session.logged_in) {
        res. redirect('/');
        return;
    }
})

// if logged the request to the homepage
router.get('/login/vet', (req, res) => {
    if (req.session.logged_in) {
        res. redirect('/');
        return;
    }
})

router.get('/login/user', withAuth,  (req, res) => {
    if (req.session.logged_in) {
        res. redirect('/');
        return;
    }
})

res.render('login');

module.exports = router;
