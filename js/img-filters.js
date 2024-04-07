const imgPreview = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const effectList = document.querySelector('.img-upload__effects');
const DEFAULT_FILTER = 'none';
let filter = DEFAULT_FILTER;
hideSlider();

function resetFilter () {
  imgPreview.style.filter = DEFAULT_FILTER;
  hideSlider();
}

function hideSlider () {
  slider.classList.add('hidden');
  sliderContainer.classList.add('hidden');
}

function showSlider () {
  slider.classList.remove('hidden');
  sliderContainer.classList.remove('hidden');
}
const filterSettings = {
  none: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    style: 'none',
  },
  chrome: {
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1,
    style: 'grayscale',
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
  return effectList.querySelector('input[name=effect]:checked').value;
}

function updateEffectLevel (effect, level) {
  const filterSet = filterSettings[effect];
  if (effect === 'none') {
    return `${filterSet.style}`;
  }
  return `${filterSet.style}(${level}${filterSet.unit || ''})`;
}

function updateSlider () {
  effectLevel.value = slider.noUiSlider.get();
  imgPreview.style.filter = updateEffectLevel(filter, effectLevel.value);
}

function setFilterOnImg () {
  resetFilter();
  filter = getCurrentFilter();
  //console.log(filter);
  if (filter !== 'none') {
    showSlider();
    //imgPreview.classList.add(`effects__preview--${filter}`);
    slider.noUiSlider.updateOptions(filterSettings[filter]);
  }
}

effectList.addEventListener('change', setFilterOnImg);
slider.noUiSlider.on('update', updateSlider);
