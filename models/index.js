const User = require('./User');
const Pet = require('./Pet');
const Veterinarian = require('./Veterinarian');
const Forum = require('./Forum');
const Reply = require('./Reply');

User.hasMany(Pet, {
    foreignKey: 'client_id',
});

Pet.belongsToMany(User, {
    foreignKey: 'client_id',
});

User.hasMany(Forum, {
    foreignKey: 'client_id',
});

Forum.belongsToMany(User, {
    foreignKey: 'client_id',
});

module.exports = {
    User, Pet, Veterinarian, Forum, Reply,
};