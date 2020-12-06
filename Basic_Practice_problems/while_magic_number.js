var readlinesync=require('readline-sync');
readlinesync.question("Enter the number:");
var low=1;
var high=100;
var mid=0;
var result=0;
while(low!=mid){
	mid=Math.floor(low+((high-low)/2));
	result=readlinesync.questionInt("Enter 0 if number is greater than mid or Enter 1 if less than mid:");
	if(mid==low){
		if(result==1)
	     	break;
		else{
		mid=mid+1;
		console.log(mid)
		}
	}
	if(result==1){
	high=mid;
	console.log(high);
	}
	else{
	low=mid+1;
	console.log(low);
	}
}
console.log("Magic Number is"+mid);
