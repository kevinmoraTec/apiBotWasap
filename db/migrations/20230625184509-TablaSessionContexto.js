'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('sessionChatsContexto', {
      idSession: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idUsuario: {
        type: DataTypes.INTEGER,
        references: {
          model: 'usuarios', // nombre de la tabla
          key: 'idUsuario'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      fechaInicio: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      fechaFin: {
        allowNull: false,
        type: DataTypes.DATE,
      }

    })

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('sessionChatsContexto');
  }
};
