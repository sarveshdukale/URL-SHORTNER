const { getUser } = require("../service/auth.service")

async function restrictToLoggedinUsersOnly(req, res, next) {
    const userUID = req.cookies.uid;

    console.log( userUID);
    

    if (!userUID) return res.redirect("/login");
    const User = getUser(userUID);

    console.log("User:",User);
    
    
    if (!User) return res.redirect("/login");
    
    req.User = User;
    next();
}

module.exports = {
    restrictToLoggedinUsersOnly,
}