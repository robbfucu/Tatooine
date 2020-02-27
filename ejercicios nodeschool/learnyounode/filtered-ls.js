var fs = require('fs') // load node filesystem module
var path = require('path') // load path module

var pathName = process.argv[2]; //assign the directory to a variable  
var fileExt = "." + process.argv[3]; //Assign the string with the file extension filter to a variable and add a period
fs.readdir(pathName, function(err, list) { //readdir takes a pathname as its first argument, a callback as its second
			// iterate through list of files (list.length)
		  for (i = 0; i < list.length; i++) {
		  	// if extension of file at index list[i] matches filter and adds a '.'
		  	if (path.extname(list[i]) === fileExt) {
		      // outputs current file from list index[i]
		      console.log(list[i]);
		  	}else{};
		   }
		 });
