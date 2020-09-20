import Fastify from "fastify";

import characterCount from "../features/character-count";
import textLength from "../features/text-length";
import wordCount from "../features/word-count";

const server = Fastify();

server.setNotFoundHandler(
    async () => "Please send a POST request to /analyze with a JSON { text: string } body"
);

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

export default server;