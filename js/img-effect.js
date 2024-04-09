const imgPreview = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const effectList = document.querySelector('.img-upload__effects');
const DEFAULT_EFFECT = 'none';
let filter = DEFAULT_EFFECT;
hideSlider();

function resetEffect () {
  imgPreview.style.filter = DEFAULT_EFFECT;
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
const effectSettings = {
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

function getCurrentEffect () {
  return effectList.querySelector('input[name=effect]:checked').value;
}

function updateEffectLevel (effect, level) {
  const effectSet = effectSettings[effect];
  if (effect === 'none') {
    return `${effectSet.style}`;
  }
  return `${effectSet.style}(${level}${effectSet.unit || ''})`;
}

function onSliderUpdate () {
  effectLevel.value = slider.noUiSlider.get();
  imgPreview.style.filter = updateEffectLevel(filter, effectLevel.value);
}

function onEffectListChange () {
  resetEffect();
  filter = getCurrentEffect();
  if (filter !== 'none') {
    showSlider();
    slider.noUiSlider.updateOptions(effectSettings[filter]);
  }
}

effectList.addEventListener('change', onEffectListChange);
slider.noUiSlider.on('update', onSliderUpdate);

export {resetEffect};
