var prompt =require('prompt-sync')({sight:true});
const date=prompt('enter the date ');
const month=prompt('enter the month ');
if(month==3 && date>=20 && date<=30)
	console.log("True");
else if(month==4 && date<=30)
	console.log("True");
else if (month==5 && date<=31)
	console.log("True");
else if (month==6 && date<=20)
	console.log("True");
else
	console.log("False");

