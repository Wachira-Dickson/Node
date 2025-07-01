const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
myFirstEmitter.on('greet', (name) => {
    console.log(`Hello ${name}`);
});

myFirstEmitter.emit('greet', 'Dickson');