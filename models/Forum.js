const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Forum extends Model {}

Forum.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        reply: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        client_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'client',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'forum',
    }
);

module.exports = Forum;