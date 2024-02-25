const Sequelize = require("sequelize");

const sequelize = require("../../utils/database");

const DirectoryListing = sequelize.define("directorylisting", {
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
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  academic_qualifications: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  areas_of_expertise: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const FacultyProfiles = sequelize.define("facultyprofiles", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  biography: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  research_interests: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  publications: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  achievements: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = {
  DirectoryListing,
  FacultyProfiles,
};
