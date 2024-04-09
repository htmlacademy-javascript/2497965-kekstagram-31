import {shuffle} from './util.js';
import {createPosts} from './create-pictures.js';

const filtersContainer = document.querySelector('.img-filters');
const filterDefault = filtersContainer.querySelector('#filter-default');
const filterRandom = filtersContainer.querySelector('#filter-random');
const filterDiscussed = filtersContainer.querySelector('#filter-discussed');

function onFilterDefaultClick (photos, btn) {
  createPosts(photos);
  setActiveFilter(btn);
}

function onFilterRandomClick (photos, btn) {
  const pictures = shuffle(photos).slice(0, 10);
  createPosts(pictures);
  setActiveFilter(btn);
}

function onFilterDiscussedClick (photos, btn) {
  const pictures = photos.sort((a, b) => b.comments.length - a.comments.length);
  createPosts(pictures);
  setActiveFilter(btn);
}

function setActiveFilter (btn) {
  const activeFilter = filtersContainer.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('.img-filters__button--active');
  btn.classList.add('.img-filters__button--active');
}

export function initFliters (photos) {
  filtersContainer.classList.remove('img-filters--inactive');
  filterDefault.addEventListener('click',() => onFilterDefaultClick(photos, filterDefault));
  filterRandom.addEventListener('click',() => onFilterRandomClick([...photos], filterRandom));
  filterDiscussed.addEventListener('click',() => onFilterDiscussedClick([...photos], filterDiscussed));
}
