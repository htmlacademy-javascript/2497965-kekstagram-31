const HASHTAG_MAX_COUNT = 5;
const HASHTAG_MAX_LENGHT = 20;
//const HASHTAG_VALID_REG = /^#[a-zа-яё0-9]{1,19}$/i;
let errorMessage = '';


function isHashtagValid(value) {
  const hashtagArray = value.trim().toLowerCase().split(/\s+/);
  errorMessage = '';
  if (hashtagArray.lenght === 0) {
    return true;
  };
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

}

function hasOnlyNumSign(string) {
  return string === '#';
}

function checkHastagLength(string) {
  return string > 20;
}

export {isHashtagValid, errorMessage};
