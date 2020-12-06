var head=0;
var tail=0;
var num;
while(head<11 && tail<11){
	num=Math.floor(Math.random()*2);
	if(num==0)
	tail+=1;
	else
	head+=1;
}
console.log("No of head wins"+head);
console.log("No of tail wins"+tail);
