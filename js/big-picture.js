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
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    openBigImage(currentPicture.dataset.pictureId);
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

function openBigImage(currentPictureId) {
  container.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', closeBigImage);
  const currentPicture = thumbnails.find((thumbnail) => thumbnail.id === Number(currentPictureId));
  bigImage.src = currentPicture.url;
  shownComments.classList.add('hidden');
  totalComments.classList.add('hidden');
  loadCommentsButton.classList.add('hidden');
}

