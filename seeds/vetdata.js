const { Veterinarian } = require('../models')

const vetData = [
    {
        dea: 'AS8524616',
        first_name: 'John',
        last_name: 'Smith'
    },
    {
        dea: 'AS1234567',
        first_name: 'Jane',
        last_name: 'Doe'
    }
];

const seedVeterinarian = () => Veterinarian.bulkCreate(vetData);
module.exports = seedVeterinarian;