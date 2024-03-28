import {isEscapeKey} from './util.js';
import {thumbnails} from './create-pictures.js';

const thumbnailsContainer = document.querySelector('.pictures');
const container = document.querySelector('.big-picture');
const bigImage = container.querySelector('.big-picture__img img');
const likes = container.querySelector('.big-picture__social').querySelector('.likes-count');
const imageDescription = container.querySelector('.big-picture__social').querySelector('.social__caption');
const shownComments = container.querySelector('.social__comment-shown-count');
const totalComments = container.querySelector('.social__comment-total-count');
const loadCommentsButton = container.querySelector('.social__comments-loader');
const commentsList = container.querySelector('.social__comments');
const closeButton = container.querySelector('.big-picture__cancel');

thumbnailsContainer.addEventListener('click', (evt) => {
  const currentThumbnail = evt.target.closest('.picture');
  if (currentThumbnail) {
    openBigImage();
  }
})
function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigImage();
  }
}

function closeBigImage() {
  container.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', closeBigImage);
}

function openBigImage() {
  container.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', closeBigImage);
  shownComments.classList.add('hidden');
  totalComments.classList.add('hidden');
  loadCommentsButton.classList.add('hidden');
}

