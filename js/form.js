const uploadFileForm = document.querySelector('#upload-file');
const renderPhotoForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

uploadFileForm.addEventListener('click', () => {
  renderPhotoForm.classList.remove('hidden');
  body.classList.add('modal-open');
})
