const express = require("express");

const userController = require("../../controllers/User/user");

const router = express.Router();

router.post("/signup", userController.postUserData);
router.post("/login", userController.postLoginUserData);

module.exports = router;
