// What is Node.js?
// Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.
// In the past, javascript was only used for client-side scripting in the browser. But with the introduction of Node.js, we can also run javascript code outside of the browser on a server.
// Node.js is built on Chrome's V8 JavaScript engine. Firefox's SpiderMonkey, and Internet Explorer's Chakra.

// What are modules in Node.js?
// Modules are like libraries in Node.js. They are reusable blocks of code whose existence does not impact the global scope.

// We can create a web server in Node.js using the http module.
// A web server is a software that listens for incoming requests over the HTTP protocol and sends back responses.

// the require function is used to import modules in Node.js
import http from "node:http";

// Create a local server to receive data from a client(browser)
// () => {} is an arrow function in javascript which can be usd to replaced traditional anonymous functions syntax function() {}
// createServer takes a callback function as an argument.
// The callback function takes two arguments, request(req) and response(res).
const server = http.createServer((req, res) => {
  // write a response to the client
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write('{"message": "Hello World"}');
});

// listen for requests on port 8000
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
