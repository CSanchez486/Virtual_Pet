const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Pet extends Model {}

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        species: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        age: {
            type: DataTypes.INTEGER,
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
        modelName: 'pet',
    }
);

module.exports = Pet;