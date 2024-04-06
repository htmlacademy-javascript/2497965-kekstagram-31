const STEP = 25;
const MAX = 100;
const MIN =25;

const imgPreview = document.querySelector('.big-picture__preview');
const scaleContainer = document.querySelector('.img-upload__scale');
const scaleSmaller = scaleContainer.querySelector('.scale__control--smaller');
const scaleBigger = scaleContainer.querySelector('.scale__control--bigger');
let scaleValue = scaleContainer.querySelector('.scale__control--value');

function makeImgSmaller () {
  let scale = Number(scaleValue.value.slice(0, -1))
  if (scale > MIN) {
    scale -= STEP;
    scaleValue = scale + "%";
    imgPreview.style.transform = scale(scale / 100);
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
