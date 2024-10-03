
const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('videofeed', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
