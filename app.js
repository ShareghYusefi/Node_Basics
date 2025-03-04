// What is Node.js?
// Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.
// In the past, javascript was only used for client-side scripting in the browser. But with the introduction of Node.js, we can also run javascript code outside of the browser on a server.
// Node.js is built on Chrome's V8 JavaScript engine. Firefox's SpiderMonkey, and Internet Explorer's Chakra.

// What are modules in Node.js?
// Modules are like libraries in Node.js. They are reusable blocks of code whose existence does not impact the global scope.

// Any file in Node.js is considered a module, giving us thwe ability to import and export code between files/modules.
// console.log(module);

// importing logger module
const logger = require("./logger");
// ./filename: current directory
// ../filename: parent directory
// /filename: root directory of the file system

// var, let, and const are used to declare variables in Node.js.

// What are some built in modules in Node.js?
// 1. http: to create a web server.
// 2. fs: to work with the file system (read, write, update, delete files).
// 3. path: to work with file paths.
const path = require("node:path");
// __filename is a global object in Node.js that gives the absolute path of the current file.
var x = path.parse(__filename);
console.log(x);
// 4. os: to get information about the operating system.
const os = require("node:os");
var type = os.type();
var freeMemory = os.freemem(); // returns the amount of free system memory in bytes.
var totalMemory = os.totalmem(); // returns the total amount of system memory in bytes.
console.log(type);
console.log(freeMemory);
console.log(totalMemory);

// Installing external modules in Node.js
// To install packages we need to setup a package.json (npm init)
// Json data is a collection of key-value pairs in string format.

// npm install <module-name> or npm i <module-name>
const ospath = require("ospath");
console.log(ospath.home());

// We can create a web server in Node.js using the http module.
// A web server is a software that listens for incoming requests over the HTTP protocol and sends back responses.

// the require function is used to import modules in Node.js
const http = require("http");
// Create a local server to receive data from a client(browser)
// () => {} is an arrow function in javascript which can be usd to replaced traditional anonymous functions syntax function() {}
// createServer takes a callback function as an argument.
// The callback function takes two arguments, request(req) and response(res).
const server = http.createServer((req, res) => {
  // log a message to the console
  logger("Someone visisted our server");
  // write a response to the client
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write('{"message": "Hello World"}');
});

// listen for requests on port 8000
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
