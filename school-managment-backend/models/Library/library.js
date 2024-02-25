const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const LibraryCatalog = sequelize.define("librarycatalog", {
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
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  publication_year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  catagory: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
const DigitalLibrary = sequelize.define("digitallibrary", {
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
  resource_link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
module.exports = {
  LibraryCatalog,
  DigitalLibrary,
};
