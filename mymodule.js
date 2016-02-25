var fs = require("fs");
var path = require("path");

module.exports = function (dir, extension, callback)
{
	fs.readdir(dir, readDirAsync);
	function readDirAsync(error, listOfFiles)
	{
		var list = [];
		if(error)
		{
			return callback(error) ;
		}
		else
		{
			for (f in listOfFiles)
			{
				//console.log(f);
				//console.log(path.extname(listOfFiles[f]));
				//console.log("."+process.argv[3]);
				if(path.extname(listOfFiles[f])== ("."+extension))
				{
					list.push(listOfFiles[f]);
				}
			}
			callback(null, list);
		}
	}
}