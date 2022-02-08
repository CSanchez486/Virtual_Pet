const router = require('express').Router();
const {User} = require('../../models')


// Create new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        })
            res.status(200).json(dbUserData);
          
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
              .json({ message: 'Incorrect username or password' });
            return;
          }
          const validPassword = await dbUserData.password == req.body.password;
          if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect username or password' });
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

module.exports = router;