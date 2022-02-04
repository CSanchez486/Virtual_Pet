const {Pet} = require('../models')

const petData = [
    {
        first_name: "Tigger",
        last_name: "Smith",
        species: "Cat",
        age: 5,
        user_id: 1,
    }, 
    {
        first_name: "Coco",
        last_name: "Adams",
        species: "Dog",
        age: 4,
        user_id: 2,
    },
    {
        first_name: "Pirate",
        last_name: "Davis",
        species: "Parrot",
        age: 3,
        user_id: 3,
    },
    {
        first_name: "Leo",
        last_name: "Smith",
        species: "Cat",
        age: 5,
        user_id: 1,
    }
];

const seedPet = () => Pet.bulkCreate(petData);
module.exports = seedPet;