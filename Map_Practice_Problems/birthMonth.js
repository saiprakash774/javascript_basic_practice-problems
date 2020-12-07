function Random() {
    return Math.floor(Math.random() * 12 + 1);
}
var birthdayMonth = new Map();
var month1 = 0, month2 = 0, month3 = 0, month4 = 0, month5 = 0, month6 = 0; month7 = 0; month8 = 0; month9 = 0, month10 = 0, month11 = 0, month12 = 0;
var n = 0;
while (n < 50) {
    switch (Random()) {
        case 1:
            month1++;
            birthdayMonth.set('Jan', month1);
            break;
        case 2:
            month2++;
            birthdayMonth.set('Feb', month2);
            break;
        case 3:
            month3++;
            birthdayMonth.set('Mar', month3)
            break;
        case 4:
            month4++;
            birthdayMonth.set('Apr', month4)
            break;
        case 5:
            month5++;
            birthdayMonth.set('May', month5)
            break;
        case 6:
            month6++;
            birthdayMonth.set('Jun', month6)
            break;
        case 7:
            month7++;
            birthdayMonth.set('Jul', month7)
            break;
        case 8:
            month8++;
            birthdayMonth.set('Aug', month8)
            break;
        case 9:
            month9++;
            birthdayMonth.set('Sep', month9)
            break;
        case 10:
            month10++;
            birthdayMonth.set('Oct', month10)
            break;
        case 11:
            month11++;
            birthdayMonth.set('Nov', month11)
            break;
        case 12:
            month12++;
            birthdayMonth.set('Dec', month12)
    }
    n++;
}
console.log("Number of people having birth in same month");
for (let [key, count] of birthdayMonth.entries()) {
    console.log(`month ${key}: ${count}`);

}

