var prompt = require('prompt-sync')({sigint: true});
var number=prompt("Enter a number to display its table till 2^n:");
var result=1;
var index=1;
while(index<=number){
	result=2*result;
	console.log("2^"+index+"="+result);
	index+=1;
}
