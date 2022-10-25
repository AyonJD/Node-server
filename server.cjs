const http = require('http');
const PORT = 5000;
const url = require('url');
const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const readStream = fs.createReadStream('./data.txt')

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



    //Exploring file system in Node...

    //Reading data from file in asyncronusly...
    // if (req.url === '/') {
    //     fs.readFile('data.txt', (err, data) => {
    //         if (err) {
    //             res.write('Failed to read file');
    //             res.end();
    //         } else {
    //             res.write(data);
    //             res.end();
    //         }
    //     })
    // }

    //Reading data from file in syncronusly...
    // if (req.url === '/') {
    //     const data = fs.readFileSync('data.txt');
    //     res.write(data);
    //     res.end();
    // }

    //Writing data to file in asyncronusly...
    // if (req.url === '/') {
    //     fs.writeFile('data.txt', 'New data...........', (err) => {
    //         if (err) {
    //             res.write('Failed to update file');
    //             res.end();
    //         } else {
    //             res.write('New data updated successfully');
    //             res.end();
    //         }
    //     })
    // }

    //Writing data to a new file asyncronusly...
    // if (req.url === '/') {
    //     fs.writeFile('newData.txt', 'New data...........', (err) => {
    //         if (err) {
    //             res.write('Failed to update file');
    //             res.end();
    //         } else {
    //             res.write('New data updated successfully');
    //             res.end();
    //         }
    //     })
    // }

    //Deleting a file asyncronusly...
    // if (req.url === '/') {
    //     fs.unlink('newData.txt', (err) => {
    //         if (err) {
    //             res.write('Failed to delete file');
    //             res.end();
    //         } else {
    //             res.write('File deleted successfully');
    //             res.end();
    //         }
    //     })
    // }


    //Creating Event in Node...

    // //Creating event handler...
    // const myEventHandler = () => {
    //     console.log('I hear a scream!');
    // }

    // //Assigning the event handler to an event...
    // eventEmitter.on('myEvent', myEventHandler).myEventHandler;

    // //Fire the 'myEvent' event...
    // eventEmitter.emit('myEvent');


    

})


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})