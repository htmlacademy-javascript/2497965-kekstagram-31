import {isEscapeKey} from './util.js';
import {clearComments, renderComments} from './render-comments.js';

const thumbnailsContainer = document.querySelector('.pictures');
const container = document.querySelector('.big-picture');
const bigImage = container.querySelector('.big-picture__img img');
const likes = container.querySelector('.big-picture__social').querySelector('.likes-count');
const imageDescription = container.querySelector('.big-picture__social').querySelector('.social__caption');
const closeButton = container.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseButtonClick();
  }
}

function onCloseButtonClick() {
  container.classList.add('hidden');
  body.classList.remove('modal-open');
  clearComments();
  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', onCloseButtonClick);
}

function openBigImage(currentPictureId, postsData) {
  const currentPicture = postsData.find((post) => post.id === Number(currentPictureId));
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', onCloseButtonClick);
  bigImage.src = currentPicture.url;
  bigImage.alt = currentPicture.description;
  likes.textContent = currentPicture.likes;
  imageDescription.textContent = currentPicture.description;
  renderComments(currentPicture.comments);
  container.classList.remove('hidden');
  body.classList.add('modal-open');
}

function onThumbnailsContainerClick (target, photos) {
  const currentPicture = target.closest('.picture');
  if (!currentPicture) {
    return;
  }
  const id = currentPicture.dataset.pictureId;
  openBigImage(id, photos);
}

function initBigPicture (photos) {
  thumbnailsContainer.addEventListener('click', (evt) => {
    onThumbnailsContainerClick(evt.target, photos);
  });
}

export {initBigPicture};
