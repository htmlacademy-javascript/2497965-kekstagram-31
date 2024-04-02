import {isEscapeKey} from './util.js';

const uploadFileForm = document.querySelector('#upload-file');
const renderPhotoForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = renderPhotoForm.querySelector('.img-upload__cancel');

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
    evt.preventDefault();
    closeForm();
  }
}

uploadFileForm.addEventListener('change', openForm);
