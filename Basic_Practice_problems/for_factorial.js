var prompt = require('prompt-sync')({sigint: true});
var number=prompt("Enter a value:");
fact=1;
if(number==0)
console.log("Factorial of "+number+"is"+fact);
else{
	for(index=1;index<=number;index++){
	fact=fact*index;
	}
	console.log("Factorial of "+number+"is"+fact);
}
