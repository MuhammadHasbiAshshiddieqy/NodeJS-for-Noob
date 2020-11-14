var http = require("http");
var url = require("url");

http.createServer(function (req,res) {
  data = url.parse(req.url)
  console.log(data);
  q = url.parse(req.url, true).query
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.write(`Request URL : ${req.url}`);
  res.write(`\nPathname : ${data.pathname}`);
  res.write(`\nName : ${q.name}`);
  res.write(`\nAge : ${q.age}`);
  res.end();
}).listen("8080");

// Try to request in web browser : http://localhost:8080/hasbi?name=hasbi&age=23
