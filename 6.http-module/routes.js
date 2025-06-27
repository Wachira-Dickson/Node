const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    }else if(url === "/projects") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Projects");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("This page is not found");
    }
});

const PORT = 3003;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});