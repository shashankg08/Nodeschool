var http = require('http');
var url = require('url');

var port = process.argv[2];

// res.json() is an express framework feature;
var server = http.createServer(function(request, response){

	var mydate = url.parse(request.url).query.split('=')[1];
	var ndate = new Date(mydate);
	var data={};

	if (url.parse(request.url).pathname === '/api/parsetime'){

		data = {
			"hour": ndate.getHours(),
			"minute": ndate.getMinutes(),
			"second": ndate.getSeconds()
		}

	}

	else if (url.parse(request.url).pathname === '/api/unixtime'){	
		data = {
			"unixtime": ndate.getTime()
		}
	}

	if (data){
		response.writeHead(200, {'Content-Type': 'application/json'})
		response.write(JSON.stringify(data));
		response.end();
	}

	else{
		response.writeHead(404);
		response.end();
	}

});

server.listen(port);

/*
 var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/
