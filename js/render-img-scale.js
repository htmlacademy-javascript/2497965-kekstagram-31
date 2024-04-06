const STEP = 25;
const MAX = 100;
const MIN =25;
const DEFAULT_SCALE = 100;

const imgPreview = document.querySelector('.img-upload__preview img');
const scaleContainer = document.querySelector('.img-upload__scale');
const scaleSmaller = scaleContainer.querySelector('.scale__control--smaller');
const scaleBigger = scaleContainer.querySelector('.scale__control--bigger');
let scaleValue = scaleContainer.querySelector('.scale__control--value');
let currentPictureScale = DEFAULT_SCALE;

function makeImgSmaller () {
  if (currentPictureScale > MIN) {
    currentPictureScale -= STEP;
    setScale(currentPictureScale);
  }
}

function makeImgBigger () {
  if (currentPictureScale < MAX) {
    currentPictureScale += STEP;
    setScale(currentPictureScale);
  }
}
scaleSmaller.addEventListener('click', makeImgSmaller);
scaleBigger.addEventListener('click', makeImgBigger);

function setScale (scale) {
  scaleValue.value = scale + '%';
  imgPreview.style.transform = `scale(${scale / 100})`;
}

function resetScale() {
  setScale(DEFAULT_SCALE);
}

export {resetScale}
