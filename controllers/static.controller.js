const User = require("../models/user.model");

function renderHomePage(req, res) {
    return res.render("index",User);
}

function renderLoginPage(req, res) {
    return res.render("login");
}


function renderSignupPage(req, res) {
    return res.render("signup");
}


module.exports = {
    renderHomePage,
    renderLoginPage,
    renderSignupPage
}