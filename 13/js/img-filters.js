import {shuffle} from './util.js';
import {createPostsWithDebounce} from './create-pictures.js';

const filtersContainer = document.querySelector('.img-filters');
const filterDefault = filtersContainer.querySelector('#filter-default');
const filterRandom = filtersContainer.querySelector('#filter-random');
const filterDiscussed = filtersContainer.querySelector('#filter-discussed');

function onFilterDefaultClick (photos, evt) {
  createPostsWithDebounce(photos);
  setActiveFilter(evt);
}

function onFilterRandomClick (photos, evt) {
  const pictures = shuffle(photos).slice(0, 10);
  createPostsWithDebounce(pictures);
  setActiveFilter(evt);
}

function onFilterDiscussedClick (photos, evt) {
  const pictures = photos.sort((a, b) => b.comments.length - a.comments.length);
  createPostsWithDebounce(pictures);
  setActiveFilter(evt);
}

function setActiveFilter (evt) {
  const activeFilter = filtersContainer.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
}

export function initFliters (photos) {
  filtersContainer.classList.remove('img-filters--inactive');
  filterDefault.addEventListener('click',(evt) => onFilterDefaultClick(photos, evt));
  filterRandom.addEventListener('click',(evt) => onFilterRandomClick([...photos], evt));
  filterDiscussed.addEventListener('click',(evt) => onFilterDiscussedClick([...photos], evt));
}
