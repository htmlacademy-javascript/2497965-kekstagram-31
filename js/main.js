const DESCRIPTIONS = [
  'Похоже у меня аллергия на утро!',
  'Предупреждение: на этом фото вы можете бесповоротно влюбиться в меня.',
  'На всякий случай, а то вдруг вы забыли, как я выгляжу…',
  'Эта поездка подарила мне столько эмоций и впечатлений! Я до сих пор нахожусь под их волшебным очарованием. Не забуду эти моменты!',
  'Выходные, пожалуйста, не оставляйте меня сейчас!'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Новиков Николай',
  'Королева Алёна',
  'Рыбакова Наталья',
  'Никонова София',
  'Васильев Максим',
  'Петрова Александра',
  'Ефимов Александр',
  'Субботин Савелий',
  'Титова Александра',
  'Петрова Полина'
];

function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getIdNumber (a, b) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(a, b);
    if (previousValues.length >= (b - a + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(a, b);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateCommentId = getIdNumber(1, 1000);

function generateComment() {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
}

const generatePostId = getIdNumber(1, 25);
const generatePhotoId = getIdNumber(1, 25);

function generatePost() {
  return {
    id: generatePostId(),
    url: `photos/${generatePhotoId()}.jpg`,
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, generateComment)
  };
}

const posts = Array.from({length:25}, generatePost);
window.console.log(posts);
