'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('news', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },

      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('news');
  }
};