var http = require("http");
const querystring = require('querystring');
var url = require('url');

http.createServer(function(request, res) {
  // response.writeHead(200, {"Content-Type":
  // "text/plain"});
  // response.write("Hello Alena!" + '\n');
  // response.write(request.url);
  // response.write(" ");
  // if (request.url != "/") {
  // response.write(url.parse(request.url, true).toString());
  // response.end("111");
  var app_info = new Object();
    app_info.author = "lsreg";
    app_info.name = "cool demo app";
    res.end(JSON.stringify(app_info));
//  }
//  response.write(" ");
//  response.write(url.parse(request.url, true).query.name);
//  response.end();
}).listen(process.env.PORT || 5000);
