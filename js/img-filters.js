const filtersContainer = document.querySelector('.img-filters');
const filterDefault = filtersContainer.querySelector('#filter-default');
const filterRandom = filtersContainer.querySelector('#filter-random');
const filterDiscussed = filtersContainer.querySelector('#filter-discussed');

function onFilterDefaultClick (photos) {
  console.log('default', photos);
}

function onFilterRandomClick (photos) {
  console.log('random', photos);
}

function onFilterDiscussedClick (photos) {
  console.log('discussed', photos);
}

export function initFliters (photos) {
  filtersContainer.classList.remove('img-filters--inactive');
  filterDefault.addEventListener('click',onFilterDefaultClick(photos));
  filterRandom.addEventListener('click',() => onFilterRandomClick(photos));
  filterDiscussed.addEventListener('click',() => onFilterDiscussedClick(photos));
}
