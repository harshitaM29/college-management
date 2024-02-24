const express = require("express");
const router = express.Router();

const eventController = require("../../controllers/Event/event");

router.get("/events", eventController.getAllEvents);

router.post("/events", eventController.addNewEvent);

router.post("/registerevent", eventController.registerEvent);

router.get("/eventgalleries/:eventId", eventController.getEventGallery);

module.exports = router;
