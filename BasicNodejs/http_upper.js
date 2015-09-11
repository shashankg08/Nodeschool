var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

// request and response are node streams;
// map converts incoming streams into some kind of "transform stream", processes 
// and further forwards it to output stream

// IMP -> map trnasforms streaming data as it's passing through.

var server = http.createServer(function(request, response){

	// check post request
	if (request.method!= 'POST')
		return response.end("No POST, No Service.");

	request.pipe(map(function(data_chunk){
		return data_chunk.toString().toUpperCase()
	})).pipe(response);

});

server.listen(port);

/*
    var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    server.listen(Number(process.argv[2]))
*/