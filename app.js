// Load the http module to create an http server.
var http = require('http');
var port = process.env.PORT || '8080';

// Configure our HTTP server to respond with Hello World to all requests.
http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello! This is a Node.js test!\n\n\n");
}).listen(port);

// Put a friendly message on the terminal
console.log("Server running");
