const express = require("express");
const router = express.Router();
const alumniController = require("../../controllers/Alumni/alumni");

//routes to register alumni
router.post("/register", alumniController.registerAlumni);

//routes to get all events
router.get("/events", alumniController.getEvents);

//routes to get alumni success stories
router.get("/successstories", alumniController.getSuccessStories);

module.exports = router;
