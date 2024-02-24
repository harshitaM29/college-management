const express = require("express");
const router = express.Router();
const userAuthentication = require("../../middlewares/authenticate");
const admissionNoticeController = require("../../controllers/Admission/admissionnotice");

router.get(
  "/getadmissionnotice",
  userAuthentication.authenticate,
  admissionNoticeController.getAdmissionNotices
);

module.exports = router;
