// Synchronous I/O;

// importing global modules for access.
var fs = require('fs');

// file path is first cmd  i.e. i =2
var path = process.argv[2];

// reading file returns a buffer
var buf = fs.readFileSync(path);

//console.log(buf.toString());
console.log(buf.toString().split('\n').length - 1);