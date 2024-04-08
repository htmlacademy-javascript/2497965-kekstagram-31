const HASHTAG_MAX_COUNT = 5;
const HASHTAG_MAX_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;
const HASHTAG_VALID_REG = /^#[a-zа-яё0-9]{1,19}$/i;
// let errorMessage = '';
// function returnError() {
//   return errorMessage;
// }
function stringToArray (value) {
  return value.toLowerCase().trim().split(/\s+/);
}

function isHashtagValid (value) {
  return stringToArray(value).every((item) => HASHTAG_VALID_REG.test(item)) ||
  stringToArray(value) === 0;
}

function numberOfHashtags (value) {
  return stringToArray(value).length <= HASHTAG_MAX_COUNT;
}
// function isHashtagValid(value) {
//   const hashtagArray = value.toLowerCase().trim().split(/\s+/);
//   if (hashtagArray.length > HASHTAG_MAX_COUNT) {
//     errorMessage = `Нельзя указать больше ${HASHTAG_MAX_COUNT} хэштегов`;
//     return false;
//   }
//   hashtagArray.forEach((hashtag) => {
//     if (hasOnlyNumSign(hashtag) ||
//     !checkHastagLength(hashtag) ||
//     !hasRightMask(hashtag) ||
//     !isHashtagUnique(hashtag)) {
//       return false;
//     }
//     return true;
//   });
// }

// function hasOnlyNumSign(hashtag) {
//   if (hashtag === '#') {
//     errorMessage = 'Хэштег не может состоять только из одной решётки';
//     return false;
//   }
//   return true;
// }

// function checkHastagLength(hashtag) {
//   if (hashtag.length > HASHTAG_MAX_LENGTH) {
//     errorMessage = `Хэштег не может быть длиннее ${HASHTAG_MAX_LENGTH} символов`;
//     return false;
//   }
//   return true;
// }

// function hasRightMask(hashtag) {
//   if (!HASHTAG_VALID_REG.test(hashtag)) {
//     errorMessage = 'Хэштег должен начинаться с символа # и состоять из букв и чисел';
//     return false;
//   }
//   return true;
// }

// function isHashtagUnique(array) {
//   if (array.some(isUnique(item, nubmer, array))) {
//     errorMessage = 'Хэштег должен быть уникален';
//     return false;
//   }
//   return true;
// }

// function isUnique(item, number, array) {
//   array.includes(item, number + 1)
// }

function isCommentValid(value) {
  return !(value.length > COMMENT_MAX_LENGTH);
}

export {isHashtagValid, isCommentValid, numberOfHashtags,
  COMMENT_MAX_LENGTH, HASHTAG_MAX_COUNT};
