const Event = require("../../models/Events/events");
const EventGallery = require("../../models/Events/eventgallery");
const EventRegistration = require("../../models/Events/eventRegistration");

//controller to get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to add new event

exports.addNewEvent = async (req, res) => {
  try {
    const { event_name, event_date, event_des } = req.body;
    const event = await Event.create({
      event_name,
      event_date,
      event_des,
    });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to register for an event

exports.registerEvent = async (req, res) => {
  try {
    const { eventId, name, participant_type, participant_email } = req.body;
    const registration = await EventRegistration.create({
      name,
      participant_type,
      participant_email,
      eventId,
    });
    res.status(200).json(registration);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to get event galleries

exports.getEventGallery = async (req, res) => {
  try {
    const { eventId } = req.params;
    const galleries = await EventGallery.findAll({
      where: { eventId: eventId },
    });
    res.json(galleries);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
