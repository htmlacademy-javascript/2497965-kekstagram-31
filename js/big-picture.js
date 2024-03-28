import {isEscapeKey} from './util.js';
import {postsData} from './data.js';

const thumbnailsContainer = document.querySelector('.pictures');
const container = document.querySelector('.big-picture');
const bigImage = container.querySelector('.big-picture__img img');
const likes = container.querySelector('.big-picture__social').querySelector('.likes-count');
const imageDescription = container.querySelector('.big-picture__social').querySelector('.social__caption');
const shownComments = container.querySelector('.social__comment-shown-count');
const totalComments = container.querySelector('.social__comment-total-count');
const loadCommentsButton = container.querySelector('.social__comments-loader');
const commentsList = container.querySelector('.social__comments');
const commentTemplate = container.querySelector('.social__comment');
const closeButton = container.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

thumbnailsContainer.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    openBigImage(currentPicture.dataset.pictureId);
  }
});

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigImage();
  }
}

function closeBigImage() {
  container.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', closeBigImage);
}

function openBigImage(currentPictureId) {
  const currentPicture = postsData.find((post) => post.id === Number(currentPictureId));
  const commentsFragment = document.createDocumentFragment();
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', closeBigImage);
  bigImage.src = currentPicture.url;
  bigImage.alt = currentPicture.description;
  likes.textContent = currentPicture.likes;
  totalComments.textContent = currentPicture.comments.length;
  shownComments.textContent = 5;
  imageDescription.textContent = currentPicture.description;
  commentsList.innerHTML = '';
  currentPicture.comments.forEach((comment) => {
    const commentNode = commentTemplate.cloneNode(true);
    const avatar = commentNode.querySelector('.social__picture');
    avatar.src = comment.avatar;
    avatar.alt = comment.name;
    commentNode.querySelector('.social__text').textContent = comment.message;
    commentsFragment.appendChild(commentNode);
  });

  commentsList.appendChild(commentsFragment);
  container.classList.remove('hidden');
  body.classList.add('modal-open');
}

