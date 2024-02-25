const AdmissionNotice = require("../../models/Admission/admissionnotice");

//controller get admission notices
exports.getAdmissionNotices = async (req, res) => {
  try {
    const notices = await AdmissionNotice.findAll();
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
