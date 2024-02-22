const express = require("express");
const router = express.Router();
const userAuthentication = require("../middlewares/authenticate");

const studentFormController = require("../controllers/studentform");

router.post(
  "/studentform",
  userAuthentication.authenticate,
  studentFormController.postFormData
);

module.exports = router;
