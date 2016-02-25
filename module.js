var mymodule = require('./mymodule.js');
var dir = process.argv[2]  
var extension = process.argv[3] 

mymodule(dir, extension, function(error, list)
{
	if (error)  
       return console.error('There was an error:', err)  
       
    for(f in list)
    	console.log(list[f]);
});