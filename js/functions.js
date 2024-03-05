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

function timeToArray (string) {
  string = string.split(':');
  return Number(string[0]) * 60 + Number(string[1]);
}

function isValidMeeting (workdayStart, workdayEnd, meetingStart, meetingDuration) {
  workdayStart = timeToArray (workdayStart);
  workdayEnd = timeToArray (workdayEnd);
  meetingStart = timeToArray (meetingStart);
  const meetingEnd = meetingStart + meetingDuration;
  return workdayStart <= meetingStart && meetingEnd <= workdayEnd;
}
isValidMeeting('08:00', '17:30', '14:00', 90);
isValidMeeting('8:0', '10:0', '8:0', 120);
isValidMeeting('14:00', '17:30', '08:0', 90);
isValidMeeting('08:00', '14:30', '14:00', 90);
isValidMeeting('8:00', '17:30', '08:00', 900);
