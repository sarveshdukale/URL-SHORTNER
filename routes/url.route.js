const express = require("express");
const router = express.Router();
const { handleGetNewShortURL,redirectToShortId } = require("../controllers/url.controller")


router.post("/", handleGetNewShortURL);

router.post("/:shortId",redirectToShortId)

module.exports = router;