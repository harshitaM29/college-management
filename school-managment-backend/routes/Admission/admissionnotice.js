const express = require("express");
const router = express.Router();
const userAuthentication = require("../../middlewares/authenticate");
const admissionNoticeController = require("../../controllers/Admission/admissionnotice");

//route to get admission notice
router.get(
  "/getadmissionnotice",
  userAuthentication.authenticate,
  admissionNoticeController.getAdmissionNotices
);

module.exports = router;
