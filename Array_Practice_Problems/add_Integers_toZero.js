//var numbers = new Array();
var numbers = [3, -2, -1, 2, 1, 1, 1];
for (index = 0; index < 7; index++) {
    for (index1 = index + 1; index1 < 7; index1++) {
        for (index2 = index1 + 1; index2 < 7; index2++) {
            if ((numbers[index] + numbers[index1] + numbers[index2]) == 0)
                console.log(numbers[index] + " " + numbers[index1] + " " + numbers[index2]);
        }
    }
}