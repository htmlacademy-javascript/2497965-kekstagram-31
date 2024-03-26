const picturesTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();

function fillTemplate({url, description, likes, comments}) {
  const pictureElement = picturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  return {url, description, likes, comments};
}

function createPosts(posts) {
  posts.forEach((item) => {
    const postTemplate = fillTemplate(item);
    pictureFragment.appendChild(postTemplate);
  });
  pictureContainer.appendChild(pictureFragment);
}

export {createPosts};
