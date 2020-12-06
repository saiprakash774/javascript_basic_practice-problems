var prompt = require('prompt-sync')({sigint: true});
var number=prompt("Enter a number to find its prime factors:");
for(index=2;number>1;index++){
	while((number%index)==0){
	console.log(index);
	number/=index;
	}
}
