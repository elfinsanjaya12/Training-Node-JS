var http = require("http");
var server = http.createServer(function(req, res) {
	console.log("Request : " + req.url);
	res.writeHead(200, {
		"Content-Type": "text/plain",
		"Access-Control-Allow-Origin": "*"
	});
	var data = {
		nama: "Lintang"
	};
	res.end(JSON.stringify(data));
});
server.listen(3000, () => {
	console.log("Server aktif di port 3000.");
});
