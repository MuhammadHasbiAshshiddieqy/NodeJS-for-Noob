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

    // get specific value
    console.log("Book title in index 0 : ", JSON.parse(str)[0].title)
  });
}

const req = http.request(options, callback);

req.on('error', e => {
    console.error(e);
});

req.write(JSON.stringify(data));
req.end();
