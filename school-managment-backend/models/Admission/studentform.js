const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const StudentForm = sequelize.define("studentform", {
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
  dob: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ssc: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  hsc: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  course: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = StudentForm;
