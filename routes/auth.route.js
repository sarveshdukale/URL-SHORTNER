const express = require("express");
const { handleRegisterUser } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/", handleRegisterUser);

module.exports = router;