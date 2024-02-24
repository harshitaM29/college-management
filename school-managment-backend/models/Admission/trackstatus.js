const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const TrackStatus = sequelize.define("trackstatus", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  isFormSubmitted: Sequelize.BOOLEAN,
  status: {
    type: Sequelize.STRING,
  },
});

module.exports = TrackStatus;
