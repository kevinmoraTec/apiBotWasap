'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('interacciones', {
      idInteraccion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idSession: {
        type: DataTypes.INTEGER,
        references: {
          model: 'sessionChatsContexto', // nombre de la tabla
          key: 'idSession'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      preguntaUsuario: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      respuestaModelo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fechaInteraccion: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
      },

    })

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('interacciones');
  }
};
