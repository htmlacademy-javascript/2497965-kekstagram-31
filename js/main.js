import './create-pictures.js';
import './big-picture.js';
import './form.js';
import './img-filters.js';
import {getData} from './api.js';
import {createPosts} from './create-pictures.js';
import {initBigPicture} from './big-picture.js';
import {showDataError} from './data-error.js';
import {initFliters} from './img-filters.js';

// try {
  const photos = await getData();
  createPosts(photos);
  initBigPicture(photos);
  initFliters(photos);
// } catch {
//   console.log(Error.type);
//   showDataError();
// }
