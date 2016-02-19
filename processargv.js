//console.log(process.argv);
var sum = 0;
//console.log(process.argv.length);
for(var i=2;i<process.argv.length;i++)
{
	sum = sum + Number(process.argv[i]);
}
console.log(sum);