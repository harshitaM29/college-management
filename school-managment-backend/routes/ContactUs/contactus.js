const express = require("express");
const router = express.Router();

const contactusController = require("../../controllers/ContactUs/contactus");

//route to get contact information
router.get("/contact", contactusController.getContactDetails);

//route to post new inquiry
router.post("/inquiry", contactusController.postInquiries);

module.exports = router;
