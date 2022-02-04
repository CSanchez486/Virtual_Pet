const router = require('express').Router();
const {User} = require('../../models')


// Create new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.created({
            username: req.body.username,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number
        })
        req.session.save(() => {
            req.session.loggedIn = true;
      
            res.status(200).json(dbUserData);
          });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Check a User's loggin information
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
          where: {
            username: req.body.username,
          },
        });
        if (!dbUserData) {
            res
              .status(400)
              .json({ message: 'Incorrect username' });
            return;
          }
          const validPassword = await dbUserData.checkPassword(req.body.password);
          if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect password' });
            return;
          }
          req.session.save(() => {
            req.session.loggedIn = true;
      
            res
              .status(200)
              .json({ user: dbUserData, message: 'You are now logged in!' });
          });
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})