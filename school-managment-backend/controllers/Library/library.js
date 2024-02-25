const { LibraryCatalog } = require("../../models/Library/library");
const { DigitalLibrary } = require("../../models/Library/library");

//controller to get library catalog entries
exports.getLibraryCatalog = async (req, res) => {
  try {
    const catalog = await LibraryCatalog.findAll();
    res.status(200).json(catalog);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to get digital library resources
exports.getDigitalLibrary = async (req, res) => {
  try {
    const digital = await DigitalLibrary.findAll();
    res.status(200).json(digital);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
