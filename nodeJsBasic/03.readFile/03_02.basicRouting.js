var http = require("http");
var url = require("url")
var fs = require("fs")

http.createServer(function (req, res) {
  var data = url.parse(req.url);
  var filename = "./view" + data.pathname + ".html";
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  });
}).listen("8080");

// Try to request in web browser : http://localhost:8080/index
// Try to request in web browser : http://localhost:8080/profile
