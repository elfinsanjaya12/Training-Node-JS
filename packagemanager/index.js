const chalk = require("chalk");
const moment = require("moment");

var now1 = moment();
var now2 = moment().format();
var now3 = moment().format("ddd, hA");
var now4 = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(now1);
console.log(now2);
console.log(now3);
console.log(now4);
console.log(chalk.red("Ini Merah"));
console.log(chalk.yellow("Ini Kuning"));
console.log(chalk.green("Ini Hijau"));
console.log(chalk.blue("Ini Biru"));
