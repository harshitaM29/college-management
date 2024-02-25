const express = require("express");
const router = express.Router();

const eventController = require("../../controllers/Event/event");

//routes to get all events
router.get("/events", eventController.getAllEvents);

//route to add new event
router.post("/events", eventController.addNewEvent);

//route to register for an event
router.post("/registerevent", eventController.registerEvent);

//route to get event gallery
router.get("/eventgalleries/:eventId", eventController.getEventGallery);

module.exports = router;
