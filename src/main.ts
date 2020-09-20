import server from "./server";

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