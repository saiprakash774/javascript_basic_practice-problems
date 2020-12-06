var prompt = require('prompt-sync')({sigint: true});
var number=prompt("Enter a value to find prime or not: ");
var tag=0;
for(index=2;index<number/2;index++){
if(number%index==0){
tag=1;
break;
}
}
if(tag==1) console.log(+number+" is not a Prime number");
else console.log(+number+"is a prime number");
