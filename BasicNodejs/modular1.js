var fs = require('fs');
var path = require('path');

var file_extension_checker = function(dpath, ext, callback){
	
	fs.readdir(dpath, function(err, list){
		if(err){
			return callback(err);	// early return;
		}
		else{
			var flist= [];
			list.forEach(function(filename){
				if(path.extname(filename) === "."+ext){
					//console.log(filename);
					flist.push(filename);
				}
		});
		}	// end of else;
		callback(null, flist);			// node uses callback  --> asynchronous programming.

	});
	
};

module.exports = file_extension_checker; 

/*
solution_filter.js:

    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }
*/