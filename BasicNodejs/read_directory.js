// readlist of files from a directory.
// filtered by extensions.

var fs = require('fs');

var dir_path = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir_path, function(err, files_list){

	if (err){
		console.log("Some error");
	}
	
	else{

		files_list.forEach(function(file){

			if (file.split('.')[1] === ext){
				console.log(file);
			}
		});

		}
});

/* 	Official solution:

path.extname(fname) return file extension. i.e. -> (".ext")

var fs = require('fs')
var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/