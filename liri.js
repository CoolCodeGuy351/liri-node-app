var fs = require("fs");

fs.readFile('keys.js','utf-8', function(error,data){
	console.log(data[0]);
	var dataArr = data.split(",");
	// console.log(dataArr);
})