'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('planes', {
      idPlan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      descripcion:{
        allowNull: true,
        type: DataTypes.STRING,
      },
      titulo:{
        allowNull: false,
        type: DataTypes.STRING,
        unique:true
      },
        precio:{
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at'
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'update_at'
      }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('planes');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
