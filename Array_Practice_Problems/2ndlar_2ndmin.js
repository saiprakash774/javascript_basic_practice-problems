var firstLarge = 1;
var secondLarge = 1;
var firstMin = 1000;
var secondMin = 1000;
const NO_OF_NUMBERS = 10;
let array_no_sort = new Array();
let sorted_array = new Array();
function random_Number() {
  let value = Math.floor(Math.random() * 1000);
  return value;
}
for (index = 0; index < 10; index++) {
  array_no_sort.push(random_Number());
}
console.log(array_no_sort);
function lar_nosort() {
  var count = 0;
  for (let sort of array_no_sort) {
    count++;
    if (array_no_sort[count] > firstLarge) {
      secondLarge = firstLarge;
      firstLarge = array_no_sort[count];
    }
    else if (array_no_sort[count] > secondLarge && array_no_sort[count] != firstLarge) secondLarge = array_no_sort[count];
  }
}
function min_nosort() {
  var count = 0;
  for (let sort of array_no_sort) {
    count++;
    if (array_no_sort[count] < firstMin) {
      secondMin = firstMin;
      firstMin = array_no_sort[count];
    }
    else if (array_no_sort[count] < secondMin && array_no_sort[count] != firstMin) secondMin = array_no_sort[count];
  }
}
lar_nosort();
console.log("Array with no sort,second large is "+secondLarge);
min_nosort();
console.log("Array with no sort,second min is "+secondMin);
function compareNumbers(a,b){
  return a-b;
}
function array_sort(){
  sorted_array=array_no_sort.sort(compareNumbers);
}
array_sort();
console.log(sorted_array);
console.log("Array with sort ,second min is "+sorted_array[1]);
console.log("Array with sort ,second large is "+sorted_array[8]);