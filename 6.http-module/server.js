const http = require('http');

const server = http.createServer((req, res) => {

    console.log(req, 'request received');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello node js from http module');
});

const PORT = 3003;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});