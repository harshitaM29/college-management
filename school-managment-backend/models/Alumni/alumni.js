const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const Alumni = sequelize.define("alumni", {
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
  contact_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  graduation_year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  occupation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
const AlumniNewsEvents = sequelize.define("alumninewsevents", {
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
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  event_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

const AlumniSuccessStories = sequelize.define("alumnisuccessstories", {
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
  occupation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  story: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = {
  Alumni,
  AlumniNewsEvents,
  AlumniSuccessStories,
};
