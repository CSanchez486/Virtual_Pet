const User = require('./User');
const Pet = require('./Pet');
const Veterinarian = require('./Veterinarian');
const Forum = require('./Forum');
const Reply = require('./Reply');

User.hasMany(Pet, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Pet.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    User, Pet, Veterinarian, Forum, Reply,
};