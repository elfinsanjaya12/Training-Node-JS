var nodemailer = require("nodemailer");

const xoauth2 = require("xoauth2");
const express = require("express");
const app = express();

var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "elfinsanjaya12@gmail.com",
		pass: "Copyright12"
	}
});

var mailOptions = {
	from: "elfinsanjaya12@gmail.com",
	to: "ali.imrank1996@gmail.com",
	subject: "Sending Email using Node.js",
	text: "Tio Jelek Gua kirim Email, Kalo masuk chat gua iya"
};

transporter.sendMail(mailOptions, function(error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log("Email sent: " + info.response);
	}
});

app.listen(3210, () => {
	console.log("Sukses Kirim Pesan ");
});
