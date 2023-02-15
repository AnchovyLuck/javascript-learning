function convertToRoman(num) {
    let i = 0;
    let romanString = "";
    let romanStringArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (i = 0; i < romanValues.length; i++) {
        if (num >= romanValues[i]) {
            romanString += romanStringArray[i];
            num -= romanValues[i];
            i--;
        } else if (num === 0) {
            break;
        }
    }
    return romanString;
}
    
    
   
   convertToRoman(36);