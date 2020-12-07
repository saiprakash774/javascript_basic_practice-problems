var readlinesync=require('readline-sync');
var number=readlinesync.questionInt("Enter a number to find its prime factors:");
var primeFactors_array=new Array();
for( var index=2;number>1;index++){
	while((number%index)==0){
		primeFactors_array.push(index);
		number/=index;
	}
}
console.log(primeFactors_array);