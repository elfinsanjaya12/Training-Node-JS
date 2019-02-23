// Create a Server
var http = require("http");

var server = http.createServer(function(req, res) {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Halo semuanya! Saya elfinsanjaya");
});
server.listen(3000);
// buka di browser = localhost : 3000
console.log("Server aktif. Listening port 3000.");
