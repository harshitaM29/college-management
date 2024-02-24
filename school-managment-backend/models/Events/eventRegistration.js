const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const EventRegistration = sequelize.define("eventregistration", {
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
  participant_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  participant_email: {
    type: Sequelize.STRING,
  },
});

module.exports = EventRegistration;
