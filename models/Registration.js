const db = require('./db');

const Registration = db.sequelize.define('records', {
    firstName: {
        type: db.DataTypes.STRING
    },
    
    lastName: {
        type: db.DataTypes.STRING
    },

    birthDate: {
        type: db.DataTypes.DATEONLY
    },

    telephoneNumber: {
        type: db.DataTypes.STRING
    },

    gender: {
        type: db.DataTypes.ENUM('M', 'F')
    },

    email: {
        type: db.DataTypes.STRING
    }
});

module.exports = Registration;