const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const Grade = sequelize.define("grade", {
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
  grade: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
});

module.exports = Grade;
