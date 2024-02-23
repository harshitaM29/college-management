const express = require("express");
const router = express.Router();
const userAuthentication = require("../middlewares/authenticate");

const studentFormController = require("../controllers/studentform");

router.get(
  "/getData",
  userAuthentication.authenticate,
  studentFormController.getData
);

router.post(
  "/studentform",
  userAuthentication.authenticate,
  studentFormController.postFormData
);

router.post(
  "/changestatus",
  userAuthentication.authenticate,
  studentFormController.changeStatus
);

module.exports = router;
