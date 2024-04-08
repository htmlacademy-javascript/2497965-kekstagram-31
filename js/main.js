import './create-pictures.js';
import './big-picture.js';
import './form.js';
import {getData} from './api.js';
import {createPosts} from './create-pictures.js';
import {initBigPicture} from './big-picture.js';

try {
  const photos = await getData()
  createPosts(photos);
  initBigPicture(photos);
} catch {

}
