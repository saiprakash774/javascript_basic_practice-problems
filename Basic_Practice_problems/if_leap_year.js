var prompt =require('prompt-sync')({sight:true});
const year=prompt('enter the year');
if(year%400==0 || (year%4==0&&year%100!=0))
	console.log("It is a leap year");
else
	console.log("It is not a leap year");
