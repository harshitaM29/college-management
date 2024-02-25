const express = require("express");
const router = express.Router();
const userAuthentication = require("../../middlewares/authenticate");

const studentFormController = require("../../controllers/Admission/studentform");

//routes to get student applications
router.get(
  "/getData",
  userAuthentication.authenticate,
  studentFormController.getData
);

//route to fill new application new form
router.post(
  "/studentform",
  userAuthentication.authenticate,
  studentFormController.postFormData
);

//route to change status of application
router.post(
  "/changestatus",
  userAuthentication.authenticate,
  studentFormController.changeStatus
);

module.exports = router;
