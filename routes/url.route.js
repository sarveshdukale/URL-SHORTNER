const express = require("express");
const router = express.Router();
const { handleGetNewShortURL,redirectToShortId,handleUrlAnalytics,handleShowAllURL } = require("../controllers/url.controller")

router.get("/",handleShowAllURL)

router.post("/", handleGetNewShortURL);

router.get("/:shortId", redirectToShortId);

router.get("/analytics/:shortId",handleUrlAnalytics);

module.exports = router;