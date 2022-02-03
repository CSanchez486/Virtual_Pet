
const router = require('express').Router();
const {Veterinarian} = require('../../models')

// Create new vetenarian
router.post('/', async (req, res) => {
    try {
        const dbVetdata = await Veterinarian.created({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            dea: req.body.dea
        })
        req.session.save(() => {
            req.session.loggedIn = true;
      
            res.status(200).json(dbUserData);
          });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
}
)

// Check a vetenarian's loggin information