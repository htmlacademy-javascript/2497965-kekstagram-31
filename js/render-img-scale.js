const STEP = 25;
const MAX = 100;
const MIN =25;
const DEFAULT_SCALE = 100;

const imgPreview = document.querySelector('.big-picture__preview img');
const scaleContainer = document.querySelector('.img-upload__scale');
const scaleSmaller = scaleContainer.querySelector('.scale__control--smaller');
const scaleBigger = scaleContainer.querySelector('.scale__control--bigger');
let scaleValue = scaleContainer.querySelector('.scale__control--value');
let currentPictureScale = DEFAULT_SCALE;

function makeImgSmaller () {
  if (currentPictureScale > MIN) {
    currentPictureScale -= STEP;
    scaleValue.value = currentPictureScale + "%";
    imgPreview.style.transform = `scale(${scaleValue.value / 100})`;
  }
}

function makeImgBigger () {
  let scale = Number(scaleValue.value.slice(0, -1))
  if (scale < MAX) {
    scale += STEP;
    scaleValue.value = scale + "%";
    imgPreview.style.transform = `scale(${scaleValue.value / 100})`;
  }
}
scaleSmaller.addEventListener('click', makeImgSmaller);
scaleBigger.addEventListener('click', makeImgBigger);
