const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const News = sequelize.define("news", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  publish_date: {
    type: Sequelize.DATE,
  },
});

module.exports = News;
