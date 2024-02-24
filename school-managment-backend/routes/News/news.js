const express = require("express");
const router = express.Router();
const newsController = require("../../controllers/News/news");

router.get("/news", newsController.getAllNews);

router.post("/news", newsController.addNewNews);

module.exports = router;
