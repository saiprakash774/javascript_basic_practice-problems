var money=100;
var bet=0;
var win=0;
var num;
while((money>0) && (money<200)){
	bet+=1;
	num=Math.floor(Math.random()*2);
	if(num==1){
	money+=1;
	win+=1;
	}
	else
	money-=1;
}
console.log("Money at the end "+money);
console.log("no of bets made "+bet);
console.log("no of wins "+win);
