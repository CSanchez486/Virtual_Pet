const Client = require('./Client');
const Pet = require('./Pet');
const Veterinarian = require('./Veterinarian');
const Forum = require('./Forum');
const Reply = require('./Reply');

Client.hasMany(Pet, {
    foreignKey: 'client_id',
});

Pet.belongsToMany(Client, {
    foreignKey: 'client_id',
});

Client.hasMany(Forum, {
    foreignKey: 'client_id',
});

Forum.belongsToMany(Client, {
    foreignKey: 'client_id',
});

module.exports = {
    Client, Pet, Veterinarian, Forum, Reply,
};