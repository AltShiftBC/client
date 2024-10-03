const {Sequelize} = require('sequelize');
// require('dotenv').config();

const sequelize = new Sequelize('videofeed', 'root','', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
