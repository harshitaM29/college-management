const express = require("express");
const router = express.Router();
const newsController = require("../../controllers/News/news");

//routes to get news
router.get("/news", newsController.getAllNews);

//route to add new news
router.post("/news", newsController.addNewNews);

module.exports = router;
