const users = require("../useCases/users.js")

async function getAll() {
    return await users.getAll()
}

module.exports = {
    getAll,
}