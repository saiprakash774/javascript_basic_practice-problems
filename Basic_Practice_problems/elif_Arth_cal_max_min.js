var prompt = require('prompt-sync')({sigint: true});
var a=prompt("Enter your First number :");
var b=prompt("Enter your Second number:");
var c=prompt("Enter your Third number:");
let Arthexp1= a+b*c;
let Arthexp2=a%b+c;
let Arthexp3=a*b+c;
if(Arthexp1>Arthexp2 && Arthexp1>Arthexp3)
console.log("a+b*c operation is Maximum"+Arthexp1);
else if(Arthexp2>Arthexp1 && Arthexp2>Arthexp3)
console.log("a%b+c operation is Maximum"+Arthexp2);
else if(Arthexp3>Arthexp1 && Arthexp3>Arthexp2)
console.log("a*b+c operation is Maximum"+Arthexp3);
if(Arthexp1<Arthexp2 && Arthexp1<Arthexp3)
console.log("a+b*c operation is Minimum"+Arthexp1);
else if(Arthexp2<Arthexp1 && Arthexp2<Arthexp3)
console.log("a%b+c operation is Minimum"+Arthexp2);
else if(Arthexp3<Arthexp1 && Arthexp3<Arthexp2)
console.log("a*b+c operation is Minimum"+Arthexp3);
else
console.log("Enter a valid number");
