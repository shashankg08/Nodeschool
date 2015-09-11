var net = require('net');


var server =net.createServer(function(socket){
	var mydate = new Date();
	var month = mydate.getMonth()+1;
	var data = mydate.getFullYear()+"-0"+month+"-0"+mydate.getDate()+" "+mydate.getHours()+":"+mydate.getMinutes();
	socket.end(data+"\n");
});

server.listen(Number(process.argv[2]));

/*
 var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
*/