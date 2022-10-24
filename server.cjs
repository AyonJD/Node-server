const http = require('http');
const PORT = 5000;
const url = require('url');

const server = http.createServer((req, res) => {

    //Exploring URL in Node...

    // const address_url = 'http://localhost:5000/contact?name=ayon&city=khulna';
    // const parsedUrl = url.parse(address_url, true)
    // console.log(parsedUrl.query);


    // Making server and send response url based...

    // if (req.url === '/') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write('Welcome to the Node server');
    //     res.end();
    // }
    // if (req.url === '/about') {
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.write(JSON.stringify({ result: 'success', message: 'Welcome to the about page' }));
    //     res.end();
    // }
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})