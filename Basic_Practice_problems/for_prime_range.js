var prompt = require('prompt-sync')({sigint: true});
var min=prompt("Enter minimum value:");
var max=prompt("Enter maximum value:");
for(index=min;index<=max;index++){
	var tag=1;
	for(index2=2;index2<index;index2++){
		if((index%index2)==0){
			tag=0;
			break;
		}
	}
	if(tag==1)
	console.log(index);
}
