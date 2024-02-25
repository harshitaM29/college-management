const express = require("express");
const router = express.Router();
const userAuthentication = require("../../middlewares/authenticate");
const studentController = require("../../controllers/Student/student");

//routs to get attendance
router.get(
  "/getattendance",
  userAuthentication.authenticate,
  studentController.getAttendance
);

//routes to get grades
router.get(
  "/getgrade",
  userAuthentication.authenticate,
  studentController.getGrade
);

module.exports = router;
