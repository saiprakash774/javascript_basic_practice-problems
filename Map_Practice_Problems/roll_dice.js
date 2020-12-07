var dice_Roll=new Map();
var one=0, two=0, three=0,four=0,five=0,six=0;
function Random(){
    return Math.floor(Math.random()*12 +1);
}
function compareNumbers(a,b){
    return a-b;
  }
while ( (one<10) && (two<10) && (three<10) && (four<10) && (five<10) && (six<10) ) {
 switch (Random()) {
		case 1:
			one++;
			dice_Roll.set('1',one);
			break;
		case 2:
			two++;
			dice_Roll.set('2',two);
			break;
		case 3:
			three++;
			dice_Roll.set('3',three)
			break;
		case 4:
			four++;
			dice_Roll.set('4',four)
			break;
		case 5:
			five++;
			dice_Roll.set('5',five)
			break;
		case 6:
			six++;
			dice_Roll.set('6',six)
			break;

		}
	}
	for (let [key,count] of dice_Roll.entries()) {
		console.log(`Dice ${key}: ${count}`);
    }