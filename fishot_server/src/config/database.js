<<<<<<< HEAD
const {Sequelize} = require('sequelize');
// require('dotenv').config();

const sequelize = new Sequelize('videofeed', 'root','', {
=======
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('videofeed', 'root', '', {
>>>>>>> 9b60b4c62e8b066a7229c29a723cee81212f5431
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
