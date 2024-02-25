const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const Inquiry = sequelize.define("inquiry", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  subject: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  submission_date: {
    type: Sequelize.DATEONLY,
  },
});

module.exports = Inquiry;
