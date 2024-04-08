const HASHTAG_MAX_COUNT = 5;
const HASHTAG_MAX_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;
const HASHTAG_VALID_REG = /^#[a-zа-яё0-9]{1,19}$/i;

function stringToArray (value) {
  return value.toLowerCase().trim().split(/\s+/);
}

function isHashtagValid (value) {
  if (value.length === 0) {
    return true;
  }
  return stringToArray(value).every((item) => HASHTAG_VALID_REG.test(item));
}

function numberOfHashtags (value) {
  return stringToArray(value).length <= HASHTAG_MAX_COUNT;
}

function checkHashtagLength (value) {
  return stringToArray(value).every((item) => item.length <= HASHTAG_MAX_LENGTH);
}

function isHashtagUnique(value) {
  return !(stringToArray(value).some((item, number, array) => array.includes(item, number + 1)));
}

function isCommentValid(value) {
  return value.length <= COMMENT_MAX_LENGTH;
}

export {isHashtagValid, isCommentValid, numberOfHashtags,
  COMMENT_MAX_LENGTH, HASHTAG_MAX_COUNT, HASHTAG_MAX_LENGTH,
checkHashtagLength, isHashtagUnique};
