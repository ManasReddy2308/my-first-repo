import http from "http";
import moment from "moment";

const server = http.createServer((req, res) => {

    // HOME
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to My First Node.js Server");
    }

    // TIME
    else if (req.url === "/time") {
        const now = moment().format("DD-MM-YYYY HH:mm:ss");
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Current Date & Time: ${now}`);
    }

    // API (JSON)
    else if (req.url === "/api") {
        const data = {
            status: "success",
            message: "Hello from API",
            time: moment().format("YYYY-MM-DD HH:mm:ss")
        };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
    }

    // 404
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
