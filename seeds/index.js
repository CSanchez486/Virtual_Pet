const sequelize = require('../config/connection');
const seedForum = require('./forumdata')
const seedUser = require('./userdata')
const seedPet = require('./petdata')
const seedVeterinarian = require('./vetdata')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- USER SYNCED -----\n');
    await seedPet();
    console.log('\n----- PET SYNCED -----\n');
    await seedVeterinarian();
    console.log('\n----- VETERINARIAN SYNCED -----\n');
    await seedForum();
    console.log('\n----- FORUM SYNCED -----\n');
    
    process.exit(0)
};

seedAll();