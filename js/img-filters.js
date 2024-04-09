import {shuffle} from './util.js';

const filtersContainer = document.querySelector('.img-filters');
const filterDefault = filtersContainer.querySelector('#filter-default');
const filterRandom = filtersContainer.querySelector('#filter-random');
const filterDiscussed = filtersContainer.querySelector('#filter-discussed');

function onFilterDefaultClick (photos) {
  console.log('default', photos);
}

function onFilterRandomClick (photos) {
  const pictures = shuffle(photos);
  console.log('random', pictures);
}

function onFilterDiscussedClick (photos) {
  console.log('discussed', photos);
}

export function initFliters (photos) {
  filtersContainer.classList.remove('img-filters--inactive');
  filterDefault.addEventListener('click',() => onFilterDefaultClick(photos));
  filterRandom.addEventListener('click',() => onFilterRandomClick(photos));
  filterDiscussed.addEventListener('click',() => onFilterDiscussedClick(photos));
}
