const HASHTAG_MAX_COUNT = 5;
const HASHTAG_MAX_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;
const HASHTAG_VALID_REG = /^#[a-zа-яё0-9]{1,19}$/i;
let errorMessage = '';
function returnError() {
  return errorMessage;
}

function isHashtagValid(value) {
  const hashtagString = value.trim().toLowerCase();
  errorMessage = '';
  if (hashtagString.length === 0) {
    return true;
  }
  const hashtagArray = hashtagString.split(' ');
  if (hashtagArray.length > HASHTAG_MAX_COUNT) {
    errorMessage = `Нельзя указать больше ${HASHTAG_MAX_COUNT} хэштегов`;
    return false;
  }
  hashtagArray.forEach((hashtag) => {
    if (!hasOnlyNumSign(hashtag) ||
    !checkHastagLength(hashtag) ||
    !hasRightMask(hashtag) ||
    !isUnique(hashtag)) {
      return false;
    }
    errorMessage = '';
    return true;
  });
}

function hasOnlyNumSign(hashtag) {
  if (hashtag === '#') {
    errorMessage = 'Хэштег не может состоять только из одной решётки';
    return false;
  }
  return true;
}

function checkHastagLength(hashtag) {
  if (hashtag.length > HASHTAG_MAX_LENGTH) {
    errorMessage = `Хэштег не может быть длиннее ${HASHTAG_MAX_LENGTH} символов`;
    return false;
  }
  return true;
}

function hasRightMask(hashtag) {
  if (!HASHTAG_VALID_REG.test(hashtag)) {
    errorMessage = 'Хэштег должен начинаться с символа # и состоять из букв и чисел';
    return false;
  }
  return true;
}

function isUnique(hashtag, array) {
  if (array.includes(hashtag, array.indexOf(hashtag) + 1)) {
    errorMessage = 'Один и тот же хэштег не может быть использован дважды';
    return false;
  }
  return true;
}

function isCommentValid(value) {
  return !(value.length > COMMENT_MAX_LENGTH);
}

export {isHashtagValid, isCommentValid, returnError, COMMENT_MAX_LENGTH};
