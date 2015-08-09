var http = require('http');
var myurl = process.argv[2];	// first parameter using command line.

// get data from this url and is stored in a response object.

// function response is callback function.
http.get(myurl, function(response) {

	response.setEncoding('utf8').on('data', function(in_data){
			console.log(in_data);
	});

});

/*
var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })
*/