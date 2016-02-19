/* 

The fs.readdir() method takes a pathname as its first argument and a  
callback as its second. The callback signature is:  
   
     function callback (err, list) { ... }  
   
where list is an array of filename strings. 

You may also find node's path module helpful, particularly the extname  
method.   

*/
var fs = require("fs");
var path = require("path");

var listOfFiles = "undefined";

fs.readdir(process.argv[2], readDirAsync);
function readDirAsync(error, listOfFiles)
{
	if(error)
	{
		return console.error(error);
	}
	else
	{
		for (f in listOfFiles)
		{
			//console.log(f);
			//console.log(path.extname(listOfFiles[f]));
			//console.log("."+process.argv[3]);
			if(path.extname(listOfFiles[f])== ("."+process.argv[3]))
			{
				console.log(listOfFiles[f]);
			}
		}
	}
}

