var prompt = require('prompt-sync')({sigint: true});
var number=prompt("Enter a digit from 1-7 :");
if(number==1)
console.log("Monday");
else if(number==2)
console.log("Tuesday");
else if(number==3)
console.log("Wednesday");
else if(number==4)
comsole.log("Thursday");
else if(number==5)
console.log("Friday");
else if(number==6)
console.log("Saturday");
else if(number==7)
console.log("Sunday");
else
console.log("Enter a valid single digit");

