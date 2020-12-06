var readlinesync=require('readline-sync');
var number=readlinesync.questionInt("Enter the number:");

switch(number)
{
  case 1:
        	console.log("One");
        	break;
  case 10:
        	console.log("Ten");
        	break;
  case 100:
        	console.log("Hundered");
        	break;
  case 1000:
        	console.log("Thousand");
        	break;
  case 10000:
        	console.log("Ten Thousand");
        	break;
  case 100000:
        	console.log("Lakh");
        	break;
  case 1000000:
        	console.log("Ten Lakh");
        	break;
  case 10000000:
        	console.log("Crore");
        	break;
  default:
        console.log("Enter a  valid units number");
}