require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const character = require('./models/Character');

// Construye la URL de la base de datos
const dbURL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`;

// Crea una instancia de Sequelize
const sequelize = new Sequelize(dbURL, { logging: false, native: false });

// Inicializa el modelo Character
character(sequelize);

module.exports = {
   ...sequelize.models,
   sequelize,
};
