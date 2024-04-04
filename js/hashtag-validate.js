const HASHTAG_MAX_COUNT = 5;
const HASHTAG_MAX_LENGHT = 20;
//const HASHTAG_VALID_REG = /^#[a-zа-яё0-9]{1,19}$/i;
let errorMessage = '';
function returnError() {
  return errorMessage;
};

function isHashtagValid(value) {
  const hashtagString = value.trim().toLowerCase()
  errorMessage = '';
  if (hashtagString.lenght === 0) {
    return true;
  };
  const hashtagArray = hashtagString.split(/\s+/);
  if (hashtagArray.lenght > HASHTAG_MAX_COUNT) {
    errorMessage = `Нельзя указать больше ${HASHTAG_MAX_COUNT} хэштегов`;
    return false;
  }
  if (hashtagArray.some(hasOnlyNumSign)) {
    errorMessage = "Хеш-тег не может состоять только из одной решётки";
    return false;
  };
  if (hashtagArray.some(checkHastagLength)) {
    errorMessage = `Хеш-тег не может быть длиннее ${HASHTAG_MAX_LENGHT}`;
    return false;
  };
 return true;
}

function hasOnlyNumSign(string) {
  return string === '#';
}

function checkHastagLength(string) {
  return string > HASHTAG_MAX_LENGHT;
}

export {isHashtagValid, returnError};
