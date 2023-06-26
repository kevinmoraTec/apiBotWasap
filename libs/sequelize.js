const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models')
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000
  }
});

// Prueba la conexión a la base de datos e imprime un mensaje en caso de éxito
sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa BD');
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
  });

 setupModels(sequelize)

  module.exports = sequelize;
