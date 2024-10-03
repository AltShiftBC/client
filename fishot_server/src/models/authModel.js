const { DataTypes } = require('sequelize');
const db = require('../config/authConfig');
const bcrypt = require('bcrypt');

const User = db.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  uniqueId: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  passwordResetToken: {
    type: DataTypes.STRING,
    allowNull: true,
    default: ''
  }
}, {
  hooks: {
    beforeCreate: async (user) => {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  }
});
User.sync({force: false})
module.exports = User;
