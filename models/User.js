const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        // first_name: {
        //     type: DataTypes.STRING(30),
        //     allowNull: true,
        // },
        // last_name: {
        //     type: DataTypes.STRING(30),
        //     allowNull: true,
        // },
        email: {
            type: DataTypes.STRING(100),
            allowNull: true,
            // unique: true,
            validate: {
                isEmail: true,
            },
        },
        // phone_number: {
        //     type: DataTypes.STRING(30),
        //     allowNull: true,
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;