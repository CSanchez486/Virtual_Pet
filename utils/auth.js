const withAuth = (req, res, next) => {
    // The user will be redirected to the login route if the they aren't logged in. 
    if(!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;