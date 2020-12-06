var prompt = require('prompt-sync')({sigint: true});
var number=prompt("Enter any units number till one crore: ");
if(number==1)
console.log("One");
else if(number==10)
console.log("Ten");
else if(number==100)
console.log("Hundered");
else if(number==1000)
comsole.log("Thousand");
else if(number==10000)
console.log("Ten Thousand");
else if(number==100000)
console.log("Lakh");
else if(number==1000000)
console.log("Ten Lakh");
else if(number==10000000)
console.log("One Crore");
else
console.log("Enter a valid units number");

