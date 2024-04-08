const errorContainer = document.querySelector('body');
const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const REMOVE_ERROR_TIMEOUT = 5000;

function showDataError () {
  errorContainer.insertAdjacentElement('beforeend', errorTemplate);
  setTimeout(() => errorTemplate.remove(), REMOVE_ERROR_TIMEOUT);
}

export {showDataError}
