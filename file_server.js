var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var file_url = process.argv[3];

// use fs.createReadStream();

var server = http.createServer(function(request, response){

	var file = fs.createReadStream(file_url)
	file.pipe(response);
	
});

server.listen(port);

/*
 var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/