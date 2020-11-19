const http = require('http');

const data = {
  id: '3',
  title: 'NodeJS for Noob',
  description: 'NodeJS tutorial for beginner',
  content: 'focus for JS programmer'
};

const options = {
  host: 'localhost',
  port: '8080',
  path: '/newbook',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
};

callback = function(response) {
  var str = '';

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
req.write(JSON.stringify(data));
req.end();
