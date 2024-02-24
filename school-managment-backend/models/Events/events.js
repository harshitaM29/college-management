const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const Event = sequelize.define("event", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  event_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  event_date: {
    type: Sequelize.DATEONLY,
  },
  event_des: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Event;
