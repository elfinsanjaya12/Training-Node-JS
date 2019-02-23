var express = require("express");
var app = express();

app.set("view engine", "ejs");
// merujuk ke file ‘satu’ dalam views.
app.get("/id/:nama", function(req, res) {
	res.render("satu", { orang: req.params.nama });
});

app.get("/", (req, res) => {
	// const orang = {
	// 	nama: "elfin",
	// 	usia: 23
	// };
	var orang = ["Adi", "Budi", "Caca"];
	res.render("satu", { orang: orang });
});

app.get("/satu", (req, res) => {
	res.render("satu");
});

app.get("/dua", (req, res) => {
	res.render("dua");
});
// app.get("/", function(req, res) {
// 	res.send("Selamat datang!");
// });
// app.get("/", function(req, res) {
// 	res.sendFile(__dirname + "/satu.ejs");
// });

app.listen(3321);
