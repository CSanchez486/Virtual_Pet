const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Veterinarian extends Model {}

Veterinarian.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        dea : {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'veterinarian',
    }
);

module.exports = Veterinarian;