const { users:usersAdapter } = require('../../../adapters');

module.exports = async function users(fastify) {
    fastify.get('/users', usersAdapter.getAll)
}