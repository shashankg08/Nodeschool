/*
Handling asynchronous callbacks.
3 servers are given as commandline arguments.
Requests are made for data and assume that they respond
out of order.

Results are to be printed in order. Maintain counter.
*/

var http = require('http');
var bl = require('bl');

var results = [];
var count=0;


function printAll(){
	if (count == 3){
		for(var i =0; i<3; i++){
			console.log(results[i]);
		}
	}
};	// end of printAll

function getData(index){

	http.get(process.argv[index+2], function(response){
		// stream processing;
		response.pipe(bl(function(err, data){
			results[index] = data.toString();
			
			// maintain counter for async calls.
			count++;
			printAll();
		}));

	})

}	// end of getData

// making calls to get data from servers
for (var k =0; k<3; k++){
	getData(k);
}