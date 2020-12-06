var readlinesync=require('readline-sync'); 
var temp=0;
var choice=0;
var celsius=0;
var forienheat=0;
function degF(temp){
	if((temp>=0)&&(temp<=100)){
	forienheat=(((temp*9)/5)+32);
	console.log(forienheat);
	}
	else
	console.log("Enter a valid input between 0 and 100");
}
function degC(temp){
	if((temp>=32)&&(temp<=212)){
	celsius=(((temp-32)*5)/9);
	console.log(celsius);
	}
	else
	console.log("Enter a valid input between 32 and 212");
}
choice=readlinesync.questionInt("Enter the type of conversion 1.F or 2.C):");
temp=readlinesync.questionInt("Enter the temp to be converted");
console.log(choice);
console.log(temp);
switch(choice){
	case 1:
		degF(temp);
		break;
	case 2:
		degC(temp);
		break;
	default:
		console.log("you have entered wrong choice");
}