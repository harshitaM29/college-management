const express = require("express");
const router = express.Router();
const userAuthentication = require("../../middlewares/authenticate");
const studentController = require("../../controllers/Student/student");

router.get(
  "/getattendance",
  userAuthentication.authenticate,
  studentController.getAttendance
);

router.get(
  "/getgrade",
  userAuthentication.authenticate,
  studentController.getGrade
);

module.exports = router;
