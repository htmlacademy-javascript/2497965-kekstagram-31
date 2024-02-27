function CheckStringLength(string, maxLength) {
  return string.length <= maxLength;
}
// Строка короче 20 символов
console.log(CheckStringLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(CheckStringLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(CheckStringLength('проверяемая строка', 10)); // false

function isPalindrome (string) {
  string = string.replaceAll(' ', '').toLowerCase();
  let newstring = '';
  for (let i=string.length-1; i>=0; i--) {
    newstring += string[i];
  }
  return newstring===string;
}

// Строка является палиндромом
console.log(isPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(isPalindrome('ДовОд')); // true
// Это не палиндром
console.log(isPalindrome('Кекc'));  // false

function strigToNumber(checkedString) {
  checkedString = checkedString.toString();
  let stringElement = 0;
  let resultString = '';
  for (i=0; i < checkedString.length; i++) {
    stringElement = parseInt(checkedString[i], 10);
    resultString += Number.isNaN(stringElement)? '': stringElement;
  };
  return parseInt(resultString, 10);
};
strigToNumber('2023 год');            // 2023
strigToNumber('ECMAScript 2022');     // 2022
strigToNumber('1 кефир, 0.5 батона'); // 105
console.log(strigToNumber('агент 007'));           // 7
console.log(strigToNumber('а я томат'));           // NaN

strigToNumber(2023); // 2023
strigToNumber(-1);   // 1
strigToNumber(1.5);  // 15
