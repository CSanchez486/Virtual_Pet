const { Client } = require('../models');

const userData = [
    {
        username: 'koolkat',
        password: 'password',
        first_name: 'Katherine',
        last_name: 'Smith',
        email: 'kat@gmail.com',
        phone_number: '123-456-7890'
    },
    {
        username: 'doggo',
        password: 'password123',
        first_name: 'Doug',
        last_name: 'Adams',
        email: 'dog@gmail.com',
        phone_number: '102-345-6789'
    },
    {
        username: 'animallover',
        password: 'animal',
        first_name: 'Jake',
        last_name: 'Davis',
        email: 'jdavis@gmail.com',
        phone_number: '111-111-1111'
    }
];

const seedUser = () => Client.bulkCreate(userData);
module.exports = seedUser;