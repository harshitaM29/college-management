const express = require("express");
const router = express.Router();
const careerController = require("../../controllers/CareerServices/careerservices");

//router to get all job listing
router.get("/joblist", careerController.getAllJobListing);
//router to get all career counselling resources
router.get("/resources", careerController.getAllCareerCounsellingResources);
//router to get all employer engagment events
router.get("/events", careerController.getAllEmployerEngagmentEvents);
//router  to add new job listing
router.post("/joblist", careerController.addNewJob);
//router to add new career counselling resources
router.post("/resources", careerController.addCareerCounsellingResources);
//router to add new event
router.post("/events", careerController.addNewEvent);

module.exports = router;
