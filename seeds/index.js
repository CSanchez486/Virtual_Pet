const sequelize = require('../config/connection');
const seedforum = require('./forumdata')
const seedpet = require('./petdata')
const seeduser = require('./userdata')
const seedvet = require('./vetdata')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedforum()
    await seedpet()
    await seeduser()
    await seedvet()

    process.exit(0)
}

seedAll();