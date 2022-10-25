//Create filesystem
const fs = require('fs');
//Create read stream
const readStream = fs.createReadStream('./data.txt')

//Fire read stream
readStream.on('data', chunk => {
    console.log('________________________________');
    console.log(chunk);
})

//Get the stream opening
readStream.on('open', () => {
    console.log('Stream is opened');
})

//Get the stream closing
readStream.on('close', () => {
    console.log('Stream is closed');
})

//Pause the stream
setTimeout(() => {
    readStream.pause();
    console.log('Stream is paused');
}, 20);

//Resume the stream
setTimeout(() => {
    readStream.resume();
    console.log('Stream is resumed');
}, 1000);
    

