const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const EventGallery = sequelize.define("eventgallery", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  media_type: {
    type: Sequelize.ENUM("Photo", "Video"),
    allowNull: false,
  },
  media_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  media_des: {
    type: Sequelize.STRING,
  },
});

module.exports = EventGallery;
