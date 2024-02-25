const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const Contact = sequelize.define("contact", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  department_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contact_person: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Contact;
