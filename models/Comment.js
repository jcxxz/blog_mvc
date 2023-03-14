const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

function defineCommentModel(sequelize) {
  return sequelize.define('Comment', {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}

module.exports = defineCommentModel(sequelize);
