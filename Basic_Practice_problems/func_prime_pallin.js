var utility = require("./utility.js");
var readlinesync = require('readline-sync');
var n = 0;
function prime() {
	var tag = 1;
	for (i = 2; i < n; i++) {
		if (n % i == 0)
			tag = 0;
	}
	if (tag == 1) {

		console.log(+n + "is a prime number");
		var res = utility.isNumberPalindrome(n);
		console.log(res);
	}
	else
		console.log(+n + "is not a prime number");
}
var n = readlinesync.questionInt("Enter no of value:");
prime(n);
