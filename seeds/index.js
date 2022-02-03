const sequelize = require('../config/connection');
const seedForum = require('./forumdata')
const seedPet = require('./petdata')
const seedUser = require('./userdata')
const seedVeterinarian = require('./vetdata')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedForum();
    await seedPet();
    await seedUser();
    await seedVeterinarian();

    process.exit(0)
};

seedAll();