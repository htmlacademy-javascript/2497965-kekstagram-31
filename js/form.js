import {isEscapeKey} from './util.js';
import {isCommentValid, isHashtagValid, numberOfHashtags, HASHTAG_MAX_COUNT,
   COMMENT_MAX_LENGTH, HASHTAG_MAX_LENGTH, checkHashtagLength, isHashtagUnique} from './input-validate.js';
import {resetScale} from './render-img-scale.js';
import {resetFilter} from './img-filters.js';
import {sendData} from './api.js';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadImage = uploadPhotoForm.querySelector('#upload-file');
const renderPhotoForm = uploadPhotoForm.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = renderPhotoForm.querySelector('.img-upload__cancel');
const hashtagInput = uploadPhotoForm.querySelector('.text__hashtags');
const commentInput = uploadPhotoForm.querySelector('.text__description');
const submitButton = document.querySelector('#upload-submit');

const pristine = new Pristine(uploadPhotoForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper'
});

function closeForm() {
  renderPhotoForm.classList.add('hidden');
  body.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeForm);
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadImage.value = '';
  commentInput.value = '';
  hashtagInput.value = '';
  resetScale();
  resetFilter();
}

function onUploadImageChange() {
  renderPhotoForm.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', closeForm);
  document.addEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    if (isFieldOnFocus()) {
      evt.preventDefault();
      evt.stopPropagation();
      return;
    }
    closeForm();
  }
}

function isFieldOnFocus () {
  return document.activeElement === hashtagInput ||
  document.activeElement === commentInput;
}

async function uploadData () {
  const formData = new FormData(uploadPhotoForm);
  await sendData (formData);
}

function onUploadPhotoFormSubmit (evt) {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    uploadData();
  }
}

uploadImage.addEventListener('change', onUploadImageChange);
hashtagInput.addEventListener('input', setSubmitButtonAttribute);
commentInput.addEventListener('input', setSubmitButtonAttribute);
uploadPhotoForm.addEventListener ('submit', onUploadPhotoFormSubmit);

function setSubmitButtonAttribute () {
  const isNotValid = !(pristine.validate());
  submitButton.disabled = isNotValid;
}

pristine.addValidator(hashtagInput, isHashtagValid,
   'Хэштег должен начинаться с символа # и состоять из букв и чисел');
pristine.addValidator(hashtagInput, numberOfHashtags,
  `Нельзя указать больше ${HASHTAG_MAX_COUNT} хэштегов`);
pristine.addValidator(hashtagInput, checkHashtagLength,
  `Хэштег не может быть длиннее ${HASHTAG_MAX_LENGTH} символов`);
pristine.addValidator(hashtagInput, isHashtagUnique,
  'Хэштег должен быть уникален');
pristine.addValidator(commentInput, isCommentValid,
  `Комментарий не может быть длиннее ${COMMENT_MAX_LENGTH}`);
