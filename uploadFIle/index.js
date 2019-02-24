/*
    const low = require("lowdb");
    const FileSync = require("lowdb/adapters/FileSync");
    const adapter = new FileSync("db.json");
    const db = low(adapter);
    db.defaults({ data: [] }).write();
    db.get("data")
        .push({ nama: "Andi", usia: 24 })
        .write();
*/
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ data: [] }).write();

// tambah data ke dalam db.json

// db.get("data")
// 	.push({ nama: "Andi", usia: 24 })
// 	.write();

// sum jumlah data
// var jumlah = db
// 	.get("data")
// 	.size()
// 	.value();
// console.log(jumlah);

// get all data
var all = db.get("data").value();
console.log(all);

// lihat 5 data
// var lima = db
// 	.get("data")
// 	.take(5)
// 	.value();
// console.log(lima);

// tampilkan data ke nama index ke 0
// var nama0 = db.get("data[0].nama").value();
// console.log(nama0);

// remove data
db.get("data")
	.remove({ nama: "Budi" })
	.write();
