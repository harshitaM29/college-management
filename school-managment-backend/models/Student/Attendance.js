const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const Attendance = sequelize.define("attendance", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  course_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
  },
});

module.exports = Attendance;
