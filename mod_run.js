var mod = require('./modular1.js');

mod(process.argv[2], process.argv[3], function(err, data){		
									  // result of a function i.e. mod() is returned in callback function. --> asynchronous programming.
	if (err){
		//throw err;  --> avoid throwing errors. use below.
		return console.error(err);
	}

	else{
		data.forEach(function(filename){
			console.log(filename);
	});
	}
});

/*
solution.js:
    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)
    
      list.forEach(function (file) {
        console.log(file)
      })
    })
*/