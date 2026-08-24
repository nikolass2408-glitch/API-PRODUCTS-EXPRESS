import "dotenv/config";
import App from "./App.js";

const rawPort = process.env.PORT ?? 3000;
const port = Number(rawPort);

if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error(
        `Invalid port number: ${rawPort}. El puerto debe ser un número positivo entre 1 y 65535`
    );
}

App.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
