function renderHomePage(req, res) {
    return res.render("index");
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