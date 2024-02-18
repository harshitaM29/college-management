const express = require("express");

const userController = require("../controllers/user");
const userAuthentication = require("../middlewares/authenticate");

const router = express.Router();

router.post("/signup", userController.postUserData);
router.post("/login", userController.postLoginUserData);

module.exports = router;
