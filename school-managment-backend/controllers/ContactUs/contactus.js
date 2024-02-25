const Contact = require("../../models/ContactUs/contact");
const Inquiry = require("../../models/ContactUs/inquiry");

//controller to get information to contact
exports.getContactDetails = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller to post new inquiry
exports.postInquiries = async (req, res) => {
  try {
    const { name, email, subject, message, submission_date } = req.body;
    const inquiry = await Inquiry.create({
      name,
      email,
      subject,
      message,
      submission_date,
    });

    res.status(200).json(inquiry);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
