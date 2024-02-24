const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const AdmissionNotice = sequelize.define("admissionnotice", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  notice_title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  notice_des: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  notice_date: {
    type: Sequelize.DATEONLY,
  },
});

module.exports = AdmissionNotice;
