const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');
const Registration = require('../models/Registration');

const connection = new Sequelize(dbConfig);

Registration.init(connection);

module.exports = connection;