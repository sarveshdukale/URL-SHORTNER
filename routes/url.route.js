const express = require("express");
const router = express.Router();
const { handleGetNewShortURL, redirectToShortId, handleUrlAnalytics, handleShowAllURL } = require("../controllers/url.controller");

const {restrictToLoggedinUsersOnly} = require("../middlewares/auth.middleware")

router.get("/", restrictToLoggedinUsersOnly , handleShowAllURL);

router.post("/",restrictToLoggedinUsersOnly, handleGetNewShortURL);

router.get("/:shortId", redirectToShortId);

router.get("/analytics/:shortId",handleUrlAnalytics);

module.exports = router;