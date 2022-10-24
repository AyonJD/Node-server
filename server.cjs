const http = require('http');
const PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Welcome to the Node server');
        res.end();
    }
    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ result: 'success', message: 'Welcome to the about page' }));
        res.end();
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})