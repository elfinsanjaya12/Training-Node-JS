// satu.js;
// var http = require("http");
// var fs = require("fs");
// var x = fs.readFileSync("satu.html", "utf8");
// var server = http.createServer(function(req, res) {
// 	console.log("Request : " + req.url);
// 	res.writeHead(200, { "Content-Type": "text/html" });
// 	res.end(x);
// });
// server.listen(3000);
// console.log("Server aktif. Listening port 3000.");

var http = require("http");
var fs = require("fs");

// var server = http.createServer(function(req, res) {
// 	console.log("Request : " + req.url);
// 	res.writeHead(200, { "Content-Type": "text/html" });
// 	var bacaStream = fs.createReadStream(__dirname + "/satu.html", "utf8");
// 	bacaStream.pipe(res);
// });

/* Json */
// var server = http.createServer(function(req, res) {
// 	console.log("Request : " + req.url);
// 	res.writeHead(200, { "Content-Type": "application/json" });
// 	var dataku = {
// 		nama: "Lintang",
// 		usia: 24,
// 		jomblo: true
// 	};
// 	res.end(JSON.stringify(dataku));
// });
var x = fs.readFileSync("satu.json", "utf8");
var server = http.createServer(function(req, res) {
	console.log("Request : " + req.url);
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end(x);
});

server.listen(3000);
console.log("Server aktif. Listening port 3000.");
