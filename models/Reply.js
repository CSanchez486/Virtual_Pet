//NOT IN USE
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Reply extends Model {}

Reply.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        response: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        forum_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'forum',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reply',
    }
);

module.exports = Reply;