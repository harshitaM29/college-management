const express = require("express");
const router = express.Router();
const facultyController = require("../../controllers/Faculty/faculty");

//routes to get all directory listing
router.get("/directory", facultyController.getAllDirectoryListing);

//routes to get all faculty profile
router.get("/faculty", facultyController.getFacultyProfiles);

//routes to get one faculty profile
router.get(
  "/faculty/:directorylistingId",
  facultyController.getOneFacultyProfile
);

//routes to add new directory listing
router.post("/directory", facultyController.addNewDirectoryListing);

//routes to add new faculty profile
router.post("/faculty", facultyController.addNewFacultyProfile);

module.exports = router;
