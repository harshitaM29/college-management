const express = require("express");
const router = express.Router();
const libraryController = require("../../controllers/Library/library");

//router to get library catalog entries
router.get("/librarycatalog", libraryController.getLibraryCatalog);

//router to get digital library resources
router.get("/digitallibrary", libraryController.getDigitalLibrary);

module.exports = router;
