var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res) {
	console.log("Request : " + req.url);
	if (req.url === "/home" || req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		fs.createReadStream(__dirname + "/home.html").pipe(res);
	} else {
		res.writeHead(404, { "Content-Type": "text/html" });
		fs.createReadStream(__dirname + "/404.html").pipe(res);
	}
});
server.listen(3000);
console.log("Server aktif, port 3000.");
