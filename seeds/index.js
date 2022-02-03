const sequelize = require('../config/connection');
const seedForum = require('./forumdata')
const seedUser = require('./userdata')
const seedPet = require('./petdata')
const seedVeterinarian = require('./vetdata')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedForum();
    await seedUser();
    await seedPet();
    await seedVeterinarian();

    process.exit(0)
};

seedAll();