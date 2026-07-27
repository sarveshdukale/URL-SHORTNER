function renderHomePage(req, res) {
    return res.render("index");
}

function renderLoginPage(req, res) {
    return res.render("login");
}


module.exports = {
    renderHomePage,
    renderLoginPage,
}