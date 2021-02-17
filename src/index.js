import Fastify from "fastify";

async function start() {
  const fastify = Fastify();

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

start()
  .then(() => console.log("Server running"))
  .catch(err => console.log("Something went wrong: ", err.message));

