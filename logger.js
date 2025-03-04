// use event emitter module to listen for custom events
const EventEmitter = require("events");

// We can use extends keyword to inherit properies and methods from EventEmitter class
class Logger extends EventEmitter {
  // logging requests that come into the server
  logger(message) {
    console.log("1. " + message);
    // raise an event using emit method
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

// export the logger function to be used in other files
// logger without the parenthesis is a reference to the function
module.exports = Logger;
