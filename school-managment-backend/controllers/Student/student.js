const StudentAttendance = require("../../models/Student/Attendance");
const StudentGrade = require("../../models/Student/Grade");

//get student attendance

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await StudentAttendance.findAll({
      where: { student_id: req.user.id },
    });
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//get student grade

exports.getGrade = async (req, res) => {
  try {
    const grades = await StudentGrade.findAll({
      where: { student_id: req.user.id },
    });
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
