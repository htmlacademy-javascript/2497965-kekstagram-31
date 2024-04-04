const HASHTAG_MAX_COUNT = 5;
const HASHTAG_MAX_LENGHT = 20;
const HASHTAG_VALID_REG = /^#[a-zа-яё0-9]{1,19}$/i;
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
  const hashtagArray = hashtagString.split(' ');
  if (hashtagArray.lenght > HASHTAG_MAX_COUNT) {
    errorMessage = `Нельзя указать больше ${HASHTAG_MAX_COUNT} хэштегов`;
    return false;
  }
  hashtagArray.forEach((hashtag) => {
    if (!hasOnlyNumSign(hashtag)||
    !checkHastagLength||
    !hasRightMask||) {
      return false;
    };
    return true;
  });

}

function hasOnlyNumSign(hashtag) {
  if (hashtag === '#') {
    errorMessage = "Хэштег не может состоять только из одной решётки";
    return false
  };
  return true;
}

function checkHastagLength(hashtag) {
  if (hashtag.lenght > HASHTAG_MAX_LENGHT) {
    errorMessage = `Хэштег не может быть длиннее ${HASHTAG_MAX_LENGHT}`;
    return false;
  };
  return true;
}

function hasRightMask(hashtag) {
  if (!HASHTAG_VALID_REG.test(hashtag)) {
    errorMessage = `Хэштег должен начинаться с символа # и состоять из букв и чисел`;
    return false;
  };
  return true;
}

export {isHashtagValid, returnError};
