///////////////////////////////////////////////////////
// import required files
var http = require('http');
var router = require('./request-handler');

///////////////////////////////////////////////////////
// set up server config
var ip = process.env.HOST || "127.0.0.1";
var port = process.env.PORT || 5555;

///////////////////////////////////////////////////////
// fire up the server
var server = http.createServer(router);
console.log( "ip: ", ip, "|  port:", port);
server.listen(port, ip);
console.log("Listening");

