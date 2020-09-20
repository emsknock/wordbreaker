import Fastify from "fastify";

import characterCount from "./features/character-count";
import textLength from "./features/text-length";
import wordCount from "./features/word-count";

const server = Fastify();

server.post<{ Body: { text: string } }>(
	"/analyze",
	{
		schema: {
			body: {
				type: "object",
				properties: {
					text: { type: "string" }
				}
			}
		}
	},
	async (request) => {

		const { text } = request.body;

		return {
			characterCount: characterCount(text),
			textLength: textLength(text),
			wordCount: wordCount(text),
		};

	}
);

server.listen(
	Number(process.env.PORT ?? 3000),
	(err) => {
		if (err) {
			console.error(err.message);
			process.exit(1);
		}
		console.log(`Listening on ${Number(process.env.PORT ?? 3000)}`);
	}
);