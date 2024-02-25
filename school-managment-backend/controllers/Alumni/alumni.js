const {
  Alumni,
  AlumniNewsEvents,
  AlumniSuccessStories,
} = require("../../models/Alumni/alumni");

//controller to register alumni portal
exports.registerAlumni = async (req, res) => {
  try {
    const { name, email, contact_number, graduation_year, occupation } =
      req.body;
    const alumni = await Alumni.create({
      name,
      email,
      contact_number,
      graduation_year,
      occupation,
    });
    res.status(200).json(alumni);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to get all news and events
exports.getEvents = async (req, res) => {
  try {
    const newsEvents = await AlumniNewsEvents.findAll();
    res.status(200).json(newsEvents);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to get success stories
exports.getSuccessStories = async (req, res) => {
  try {
    const successStories = await AlumniSuccessStories.findAll();
    res.status(200).json(successStories);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
