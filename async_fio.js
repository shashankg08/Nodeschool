// Asynchronous I/O; THUS --> CALLBACK FUNCTION

// importing global modules for access.
var fs = require('fs');

// file path is first cmd  i.e. i =2
var path = process.argv[2];

// reading file returns a buffer

fs.readFile(path, function(err, buff){
	if (err){
		console.log("Some error occured readinf file");
	}
	else{
		console.log(buff.toString().split('\n').length - 1);
	}
});