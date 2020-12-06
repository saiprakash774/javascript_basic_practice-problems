var prompt = require('prompt-sync')({sigint: true});
var number=prompt("Enter a digit to display table till 2^n:");
var result=1;
for(index=1;index<=number;index++){
result=2*result;
console.log("2^"+index+"="+result);
}
