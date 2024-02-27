function CheckStringLength(string, maxLength) {
  return string.length <= maxLength;
}

CheckStringLength('проверяемая строка', 20);

function isPalindrome (string) {
  string = string.replaceAll(' ', '').toLowerCase();
  let newstring = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newstring += string[i];
  }
  return newstring === string;
}

isPalindrome('топот');

function strigToNumber(checkedString) {
  checkedString = checkedString.toString();
  let stringElement = 0;
  let resultString = '';
  for (let i = 0; i < checkedString.length; i++) {
    stringElement = parseInt(checkedString[i], 10);
    resultString += Number.isNaN(stringElement) ? '' : stringElement;
  }
  return parseInt(resultString, 10);
}

strigToNumber('ECMAScript 2022');
