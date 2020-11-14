var http = require("http");

http.createServer(function (req,res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end("<h1>Hello from server<h1>");
}).listen("8080");

// Try to request in web browser : http://localhost:8080
