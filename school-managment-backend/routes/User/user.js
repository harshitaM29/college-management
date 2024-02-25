const express = require("express");

const userController = require("../../controllers/User/user");

const router = express.Router();

//routes to register an user
router.post("/signup", userController.postUserData);
//routes to logged in an user
router.post("/login", userController.postLoginUserData);

module.exports = router;
