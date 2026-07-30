const express = require("express");

const router = express.Router();

const { renderHomePage, renderLoginPage, renderSignupPage } = require("../controllers/static.controller")

const {restrictToLoggedinUsersOnly} = require("../middlewares/auth.middleware")

router.get("/",restrictToLoggedinUsersOnly, renderHomePage);
router.get("/login", renderLoginPage)
router.get("/signup",renderSignupPage)

module.exports = router;