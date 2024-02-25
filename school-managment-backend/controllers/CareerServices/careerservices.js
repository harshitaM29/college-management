const { JobBoard } = require("../../models/CareerServices/careerservices");
const {
  CareerCounseling,
} = require("../../models/CareerServices/careerservices");
const {
  EmployerEngagement,
} = require("../../models/CareerServices/careerservices");

//controller to get all job listing
exports.getAllJobListing = async (req, res) => {
  try {
    const jobListings = await JobBoard.findAll();
    res.status(200).json(jobListings);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to get all career counselling resources
exports.getAllCareerCounsellingResources = async (req, res) => {
  try {
    const resources = await CareerCounseling.findAll();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to get all employer engagment events
exports.getAllEmployerEngagmentEvents = async (req, res) => {
  try {
    const events = await EmployerEngagement.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to add new job listing
exports.addNewJob = async (req, res) => {
  try {
    const { position, company, location, job_type, description } = req.body;
    const jobListing = await JobBoard.create({
      position,
      company,
      location,
      job_type,
      description,
    });
    res.status(200).json(jobListing);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to add new career counselling resources
exports.addCareerCounsellingResources = async (req, res) => {
  try {
    const { name, resource_link, description } = req.body;
    const resource = await CareerCounseling.create({
      name,
      resource_link,
      description,
    });
    res.json(resource);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to  add new event
exports.addNewEvent = async (req, res) => {
  try {
    const { event_name, event_date, description } = req.body;
    const event = await EmployerEngagement.create({
      event_name,
      event_date,
      description,
    });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
