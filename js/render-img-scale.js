const STEP = 25;
const MAX = 100;
const MIN =25;

const imgPreview = document.querySelector('.big-picture__preview');
const scaleContainer = document.querySelector('.img-upload__scale');
const scaleSmaller = scaleContainer.querySelector('.scale__control--smaller');
const scaleBigger = scaleContainer.querySelector('.scale__control--bigger');
const scaleValue = scaleContainer.querySelector('.scale__control--value');

function makeImgSmaller () {
  if (scaleValue.value > MIN) {
    scaleValue.value -= STEP;
    imgPreview.style.transform.scale = scaleValue.value / 100;
  }
}

function makeImgBigger () {
  if (scaleValue.value < MAX) {
    scaleValue.value += STEP;
    imgPreview.style.transform.scale = scaleValue.value / 100;
  }
}
scaleSmaller.addEventListener('click', makeImgSmaller);
scaleBigger.addEventListener('click', makeImgBigger);
