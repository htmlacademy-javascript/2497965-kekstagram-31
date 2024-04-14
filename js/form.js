import {isEscapeKey} from './util.js';
import * as validate from './input-validate.js';
import {resetScale} from './render-img-scale.js';
import {resetEffect, DEFAULT_EFFECT} from './img-effect.js';
import {sendData} from './api.js';
import {showBooklet} from './booklet.js';

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
  resetEffect();
  document.querySelector(`#effect-${DEFAULT_EFFECT}`).checked = true;
  pristine.reset();
  unblockSubmitButton();
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

function blockSubmitButton () {
  submitButton.disabled = true;
}

function unblockSubmitButton () {
  submitButton.disabled = false;
}

async function uploadData () {
  try {
    const formData = new FormData(uploadPhotoForm);
    blockSubmitButton();
    await sendData (formData);
    closeForm();
    showBooklet('success');
    unblockSubmitButton();
  } catch {
    document.removeEventListener('keydown', onDocumentKeydown);
    showBooklet('error');
  }

}

function onUploadPhotoFormSubmit (evt) {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    uploadData();
  }
}

uploadImage.addEventListener('change', onUploadImageChange);
uploadPhotoForm.addEventListener ('submit', onUploadPhotoFormSubmit);

pristine.addValidator(hashtagInput, validate.isHashtagValid,
  'Хэштег должен начинаться с символа # и состоять из букв и чисел');
pristine.addValidator(hashtagInput, validate.numberOfHashtags,
  `Нельзя указать больше ${validate.HASHTAG_MAX_COUNT} хэштегов`);
pristine.addValidator(hashtagInput, validate.checkHashtagLength,
  `Хэштег не может быть длиннее ${validate.HASHTAG_MAX_LENGTH} символов`);
pristine.addValidator(hashtagInput, validate.isHashtagUnique,
  'Хэштег должен быть уникален');
pristine.addValidator(commentInput, validate.isCommentValid,
  `Комментарий не может быть длиннее ${validate.COMMENT_MAX_LENGTH} символов`);
