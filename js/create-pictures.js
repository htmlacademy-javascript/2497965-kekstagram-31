import {postsData} from './data.js';

const picturesTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();

function fillTemplate(posts) {
  const pictureElement = picturesTemplate.cloneNode(true);
  pictureElement.dataset.pictureId = posts.id;
  pictureElement.querySelector('.picture__img').src = posts.url;
  pictureElement.querySelector('.picture__img').alt = posts.description;
  pictureElement.querySelector('.picture__likes').textContent = posts.likes;
  pictureElement.querySelector('.picture__comments').textContent = posts.comments.length;
  return pictureElement;
}

function createPosts(posts) {
  posts.forEach((item) => {
    const postTemplate = fillTemplate(item);
    pictureFragment.appendChild(postTemplate);
  });
  pictureContainer.appendChild(pictureFragment);
}

createPosts(postsData);

