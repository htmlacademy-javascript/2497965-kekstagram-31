const imgPreview = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const effectList = document.querySelector('.img-upload__effects');

const filterSettings = {
  chrome: {
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1,
    style: 'glayscale',
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
  start: 1,
  step: 0.1,
  style: 'sepia',
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    style: 'invert',
    unit: '%',
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    style: 'blur',
    unit: 'px',
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    style: 'brightness',
  },
};

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

function getCurrentFilter () {
  return effectList.querySelector('.effects__radio:checked').value;
}

function updateSlider () {
  effectLevel.value = slider.noUiSlider.get();


}

effectList.addEventListener('change', () => {
  imgPreview.classList.add(`effects__preview--chrome`);
})
slider.noUiSlider.on('update', updateSlider);
