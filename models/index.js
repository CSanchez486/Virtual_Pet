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

Forum.hasMany(Reply, {
    foreignKey: 'forum_id',
});

Reply.belongsToMany(Forum, {
    foreignKey: 'forum_id',
});

module.exports = {
    Client, Pet, Veterinarian, Forum, Reply,
};