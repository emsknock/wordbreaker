import Fastify from "fastify";

const server = Fastify();

server.get(
	"/analyze",
	async (req) => ({
		hello: "world"
	})
);

server.listen(
	Number(process.env.PORT) ?? 3000,
	(err) => {
		if(err) {
			console.error(err.message);
			process.exit(1);
		}
	}
);