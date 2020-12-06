class Utility{
isNumberPalindrome(n1)
{
    try {
        var string = "";
        n1 = n1 + "";
        for (let i = 0; i < n1.length; i++) {
            string = n1.charAt(i) + string;
        } if (string == n1) { return "Entered number is pallindrome"; }
        return "Not a Pallindrome";
    }
    catch (e) {
        console.log(e.message);
    }
}
}
module.exports=new Utility();
