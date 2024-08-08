const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Video = sequelize.define('Video', {
  filename: {
    type: DataTypes.STRING,
    allowNull: false
  },
  videoData: {
    type: DataTypes.BLOB('long'),
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER
  }
});

module.exports = Video;
