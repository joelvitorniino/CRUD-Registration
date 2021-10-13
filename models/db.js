const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('practice_registration', 'root', 'bola1234A@', {
   dialect: "mysql",
   host: 'localhost'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    DataTypes: DataTypes
};