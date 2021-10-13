const { Model, DataTypes } = require('sequelize');

class Registration extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            birth: DataTypes.DATEONLY,
            telephone: DataTypes.STRING,
            gender: DataTypes.ENUM('M', 'F'),
            email: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'records_register'
        });
    };
};

module.exports = Registration;