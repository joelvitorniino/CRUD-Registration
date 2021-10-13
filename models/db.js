const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
   dialect: "mysql",
   host: 'localhost'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    DataTypes: DataTypes
};
