var utility=require ("./utility.js");
var readlinesync=require('readline-sync');
var num=0;
var check=0;
var value=0;
check=readlinesync.questionInt("Enter number of values to check:");
for(index=0;index<check;index++){
	 num=readlinesync.questionInt("Enter a numner to check pallindrome or not");
	var res=utility.isNumberPalindrome(num);
	console.log(res);
}