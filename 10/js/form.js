import {isEscapeKey} from './util.js';
import {isCommentValid, isHashtagValid, returnError, COMMENT_MAX_LENGTH} from './input-validate.js';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadFile = uploadPhotoForm.querySelector('#upload-file');
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
}

function openForm() {
  renderPhotoForm.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', closeForm);
  document.addEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    if(document.activeElement === hashtagInput ||
    document.activeElement === commentInput) {
      evt.preventDefault();
      evt.stopPropagnation();
    } else {
      evt.preventDefault();
      closeForm();
    }
  }
}

uploadFile.addEventListener('change', openForm);

hashtagInput.addEventListener('input', setSubmitButtonAttribute);

commentInput.addEventListener('input', setSubmitButtonAttribute);

function setSubmitButtonAttribute () {
  if (!pristine.validate()) {
    submitButton.setAttribute('disabled', 'true');
  } else {
    submitButton.removeAttribute('disabled');
  }
}

pristine.addValidator(hashtagInput, isHashtagValid, returnError);
pristine.addValidator(commentInput, isCommentValid, `Комментарий не может быть длиннее ${COMMENT_MAX_LENGTH}`);
