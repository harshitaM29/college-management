const express = require("express");
const router = express.Router();
const admissionNoticeController = require("../../controllers/Admission/admissionnotice");

//route to get admission notice
router.get(
  "/getadmissionnotice",
  admissionNoticeController.getAdmissionNotices
);

module.exports = router;
