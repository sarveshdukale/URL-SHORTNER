const express = require("express");
const { handleRegisterUser ,handleLoginUser } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signup", handleRegisterUser);

router.post("/login", handleLoginUser);

module.exports = router;