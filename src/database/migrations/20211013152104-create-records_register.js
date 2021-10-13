'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('records_register', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
  
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
     
        birth: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },

        telephone: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        
        gender: {
          type: Sequelize.ENUM('M', 'F'),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING
        },
  
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
  
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('records_register');
  }
};
