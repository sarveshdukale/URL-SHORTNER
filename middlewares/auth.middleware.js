const { getUser } = require("../service/auth.service")

async function restrictToLoggedinUsersOnly(req, res, next) {
    const userUID = req.cookies.uid;

    if (!userUID) return res.redirect("/login");
    const user = getUser(userUID);
    
    if (!user) return res.redirect("/login");
    
    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUsersOnly,
}