const sequelize = require('sequelize');

const db = new sequelize('fishot_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})

module.exports = db;
