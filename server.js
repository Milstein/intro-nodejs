var http = require('http');
var port = process.env.PORT || 9995;

http.createServer(function(req, res){
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello Boise Code Camp ! \n');
}).listen(port);
console.log("listening on port: " + port);

