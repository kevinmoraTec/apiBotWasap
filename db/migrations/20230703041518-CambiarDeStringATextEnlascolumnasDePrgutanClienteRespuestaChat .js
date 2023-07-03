'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('interacciones', 'preguntaUsuario', {
      type: Sequelize.TEXT,
      allowNull: false
    });
    await queryInterface.changeColumn('interacciones', 'respuestaModelo', {
      type: Sequelize.TEXT,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('interacciones', 'preguntaUsuario', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('interacciones', 'respuestaModelo', {
      type: Sequelize.STRING,
      allowNull: false
    });
  }
};
