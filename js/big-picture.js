import {isEscapeKey} from './util.js';
// import {postsData} from './data.js';
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
    closeBigImage();
  }
}

function closeBigImage() {
  container.classList.add('hidden');
  body.classList.remove('modal-open');
  clearComments();
  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', closeBigImage);
}

function openBigImage(currentPictureId, postsData) {
  const currentPicture = postsData.find((post) => post.id === Number(currentPictureId));
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', closeBigImage);
  bigImage.src = currentPicture.url;
  bigImage.alt = currentPicture.description;
  likes.textContent = currentPicture.likes;
  imageDescription.textContent = currentPicture.description;
  renderComments(currentPicture.comments);
  container.classList.remove('hidden');
  body.classList.add('modal-open');
}

function initBigPicture (photos) {
  thumbnailsContainer.addEventListener('click', ({target}) => {
    const currentPicture = target.closest('.picture');
    // const id = currentPicture.dataset.pictureId;
    if (id) {
      openBigImage(currentPicture.dataset.pictureId, photos);
    }
  });
}

export {initBigPicture};
