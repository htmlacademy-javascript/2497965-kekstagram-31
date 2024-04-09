export const HASHTAG_MAX_COUNT = 5;
export const HASHTAG_MAX_LENGTH = 20;
export const COMMENT_MAX_LENGTH = 140;
const HASHTAG_VALID_REG = /^#[a-zа-яё0-9]{1,19}$/i;

export function stringToArray (value) {
  return value.toLowerCase().trim().split(/\s+/);
}

export function isHashtagValid (value) {
  if (value.length === 0) {
    return true;
  }
  return stringToArray(value).every((item) => HASHTAG_VALID_REG.test(item));
}

export function numberOfHashtags (value) {
  return stringToArray(value).length <= HASHTAG_MAX_COUNT;
}

export function checkHashtagLength (value) {
  return stringToArray(value).every((item) => item.length <= HASHTAG_MAX_LENGTH);
}

export function isHashtagUnique(value) {
  return !(stringToArray(value).some((item, number, array) => array.includes(item, number + 1)));
}

export function isCommentValid(value) {
  return value.length <= COMMENT_MAX_LENGTH;
}

