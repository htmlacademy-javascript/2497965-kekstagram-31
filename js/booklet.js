import {isEscapeKey} from './util.js';

const bookletContainer = document.querySelector('body');
let booklet = null;

function closeBooklet() {
  booklet.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
}

function onBookletClick (evt, cls) {
  const classList = Array.from(evt.target.classList);
  if (classList.includes(cls) || classList.includes(`${cls}__button`)) {
    closeBooklet();
  }

}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBooklet();
  }
}

function showBooklet (cls) {
  booklet = document.querySelector(`#${cls}`).content.querySelector(`.${cls}`);
  bookletContainer.insertAdjacentElement('beforeend', booklet);
  const bookletCloseBtn = booklet.querySelector(`.${cls}__button`);
  document.removeEventListener('keydown', onDocumentKeydown);
  booklet.addEventListener('click', (evt) => onBookletClick(evt, cls));
  bookletCloseBtn.addEventListener('click', onBookletClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

export {showBooklet};
