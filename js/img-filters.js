const filtersContainer = document.querySelector('.img-filters');
const filterDefault = filtersContainer.querySelector('#filter-default');
const filterRandom = filtersContainer.querySelector('#filter-random');
const filterDiscussed = filtersContainer.querySelector('#filter-discussed');

export function initFliters (photos) {
  filtersContainer.classList.remove('img-filters--inactive');
  filterDefault.addEventListener('click', onFilterDefaultClick(photos));
  filterRandom.addEventListener('click', onFilterRandomClick(photos));
  filterDiscussed.addEventListener('click', onFilterDiscussedClick(photos));
}

function onFilterDefaultClick (photos) {
  console.log(photos);
}

function onFilterRandomClick () {
  console.log(photos);
}

function onFilterDiscussedClick () {
  console.log(photos);
}
