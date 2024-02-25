const {
  DirectoryListing,
  FacultyProfiles,
} = require("../../models/Faculty/faculty");

//controller to get all directory listing
exports.getAllDirectoryListing = async (req, res) => {
  try {
    const listings = await DirectoryListing.findAll();
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to get all faculty profiles
exports.getFacultyProfiles = async (req, res) => {
  try {
    const profiles = await FacultyProfiles.findAll();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to get one faculty profile
exports.getOneFacultyProfile = async (req, res) => {
  const direcorylistingId = req.params.direcorylistingId;
  try {
    const faculty = await FacultyProfiles.findOne({
      where: { direcorylistingId: direcorylistingId },
    });
    res.status(200).json(faculty);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to add new directory listing
exports.addNewDirectoryListing = async (req, res) => {
  try {
    const { name, role, email, academic_qualifications, areas_of_expertise } =
      req.body;
    const listing = await DirectoryListing.create({
      name,
      role,
      email,
      academic_qualifications,
      areas_of_expertise,
    });
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to get add nee faculty profile
exports.addNewFacultyProfile = async (req, res) => {
  try {
    const {
      biography,
      research_interests,
      publications,
      achievements,
      direcorylistingId,
    } = req.body;
    const profile = await FacultyProfiles.create({
      biography,
      research_interests,
      publications,
      achievements,
      direcorylistingId,
    });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
