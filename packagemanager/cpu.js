const os = require("os");
// const colors = require("colors");
var dataCPU0 = JSON.stringify(os.cpus()[0]);
var dataCPU1 = JSON.stringify(os.cpus()[1]);
console.log(dataCPU0);
// console.log(colors.trap(dataCPU1));
