const express = require("express");
const router = express.Router();
const { handleGetNewShortURL } = require("../controllers/url.controller")


router.post("/",handleGetNewShortURL);

module.exports = router;