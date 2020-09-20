import Fastify from "fastify";

import characterCount from "../features/character-count";
import textLength from "../features/text-length";
import wordCount from "../features/word-count";

console.log(`Starting Wordbreaker on port ${process.env.PORT || 3000}`);

const server = Fastify();

server.setNotFoundHandler(
    async (req, reply) => {
        reply.code(404);
        return "Please send a POST request to /analyze with a JSON { text: string } body";
    }
);

server.post<{ Body: { text: string } }>(
    "/analyze",
    {
        schema: {
            body: {
                type: "object",
                additionalProperties: false,
                required: ["text"],
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

export default server;