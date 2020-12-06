var readlinesync=require('readline-sync'); 
var number=readlinesync.questionInt("Enter a value to be Converted");
var choice=readlinesync.questionInt("Enter type of Unit Conversion 1.feet-inch 2.feet-meter 3.inch-feet 4.meter-feet ");
switch(choice){
case 1:
        console.log(number*12);
        break;
case 2:
        console.log(number/3.281);
        break;
case 3:
        console.log(number/12);
        break;
case 4:
        console.log(number*3.218);
        break;
default:
	console.log("Please Enter a valid Input");
}