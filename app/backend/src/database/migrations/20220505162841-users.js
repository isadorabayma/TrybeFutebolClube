'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      }, 
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      }, 
      role: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      }, 
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      }, 
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
