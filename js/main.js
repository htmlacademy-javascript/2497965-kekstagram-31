import './create-pictures.js';
import './big-picture.js';
import './form.js';

fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    console.log(photos);
  });
