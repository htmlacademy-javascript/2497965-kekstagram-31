const STEP = 25;
const MAX = 100;
const MIN = 25;
const DEFAULT_SCALE = 100;

const imgPreview = document.querySelector('.img-upload__preview img');
const scaleContainer = document.querySelector('.img-upload__scale');
const scaleSmallerBtn = scaleContainer.querySelector('.scale__control--smaller');
const scaleBiggerBtn = scaleContainer.querySelector('.scale__control--bigger');
const scaleValue = scaleContainer.querySelector('.scale__control--value');
let currentPictureScale = DEFAULT_SCALE;

function onScaleSmallerBtnClick () {
  if (currentPictureScale > MIN) {
    currentPictureScale -= STEP;
    setScale(currentPictureScale);
  }
}

function onScaleBiggerBtnClick () {
  if (currentPictureScale < MAX) {
    currentPictureScale += STEP;
    setScale(currentPictureScale);
  }
}
scaleSmallerBtn.addEventListener('click', onScaleSmallerBtnClick);
scaleBiggerBtn.addEventListener('click', onScaleBiggerBtnClick);

function setScale (scale) {
  scaleValue.value = `${scale}%`;
  imgPreview.style.transform = `scale(${scale / 100})`;
}

function resetScale() {
  setScale(DEFAULT_SCALE);
}

export {resetScale};
