var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
  fs.readFile("view/index.html", function (err, data) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
}).listen("8080")

// Try to request in web browser : http://localhost:8080
