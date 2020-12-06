var prompt = require('prompt-sync')({sigint: true});
var number=prompt("Enter a digit from 1-7:");
switch(number){
case 1:
        console.log("Monday");
        break;
case 2:
        console.log("Tuesday");
        break;
case 3:
        console.log("Wednesday");
        break;
case 4:
        console.log("Thursday");
        break;
case 5:
        console.log("Friday");
        break;
case 6:
        cosole.log("Saturday");
        break;
case 7:
        console.log("Sunday");
        break;
default:
        console.log("Enter a valid digit");
}

