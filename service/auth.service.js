const sessionIdToUserMap = new Map();

function setUser(id, user) {
    sessionIdToUserMap.set(user, id);
}

function getUser(id) {
    sessionIdToUserMap.get(id);
}

module.exports = {
    setUser,
    getUser
}