var prompt = require('prompt-sync')({sigint: true});
var number=prompt("Enter a number of harmonics to be displayed:");
for(index=1;index<=number;index++){
console.log("1/"+index+"+");
}
