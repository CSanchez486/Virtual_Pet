const router = require('express').Router();
const { Veterinarian } = require('../../models')

// Create new vetenarian
router.post('/', async (req, res) => {
  try {
    const dbVetdata = await Veterinarian.create({
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      dea: req.body.dea
    })

    res.status(200).json(dbVetdata);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// Check a vetenarian's loggin information
router.post('/login', async (req, res) => {
  try {
    const dbVetdata = await Veterinarian.findOne({
      where: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dea: req.body.dea,
      }
    });
    if (!dbVetdata) {
      res
        .status(400)
        .json({ message: 'Incorrect dea number' });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .json({ user: dbVetdata, message: 'You are now logged in!' });
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;