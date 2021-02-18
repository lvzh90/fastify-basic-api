const Fastify = require("fastify");

async function start() {
  const fastify = Fastify();

  fastify.register(require('./routers/health.js'));
  fastify.register(require('./routers/users.js'));
  fastify.get('/', () => ({ status: "Running" }));
  fastify.get('/Santiago', () => {
      return {
          message: "Toy con la personita mas tesita del mundo y me hace muy feliz :)"
        }
    });

  try {
    await fastify.listen(8080);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

module.exports = start;