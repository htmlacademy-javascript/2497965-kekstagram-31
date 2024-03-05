import { posts } from './data';

const picturesTemplate = document.querySelector('#picture')
  .content;
const pictureListElement = document.querySelector('.pictures');
const createPicture = posts;
const pictureListFragment = document.createDocumentFragment();

createPicture.forEach(({url, description, likes, comments}) => {
  const pictureElement = picturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureListFragment.appendChild(pictureElement);
});
pictureListElement.appendChild(pictureListFragment);
