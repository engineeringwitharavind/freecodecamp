// Roman Numeral Converter

// Convert the given number into a roman numeral.
function convertToRoman(num) {
  let decimalNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";

  for (let i = 0; i < decimalNumber.length; i++) {
    while (decimalNumber[i] <= num) {
      result += romanNumeral[i];
      num -= decimalNumber[i];
    }
  }
  return result;
}

console.log(convertToRoman(3000));
