const COMMENT_STEP = 5;
let comments = [];
let count = 0;
const container = document.querySelector('.big-picture');
const loadCommentsButton = container.querySelector('.social__comments-loader');
const commentTemplate = container.querySelector('.social__comment');
const commentsList = container.querySelector('.social__comments');
const shownComments = container.querySelector('.social__comment-shown-count');
const totalComments = container.querySelector('.social__comment-total-count');
commentsList.innerHTML = '';

function loadNextComments() {
  const commentsFragment = document.createDocumentFragment();
  const renderedComments = comments.slice(count, count + COMMENT_STEP);
  const shownCommentsCount = renderedComments.length + count;

  renderedComments.forEach((comment) => {
    const commentNode = commentTemplate.cloneNode(true);
    const avatar = commentNode.querySelector('.social__picture');
    avatar.src = comment.avatar;
    avatar.alt = comment.name;
    commentNode.querySelector('.social__text').textContent = comment.message;
    commentsFragment.appendChild(commentNode);
  });

  commentsList.appendChild(commentsFragment);
  totalComments.textContent = comments.length;
  shownComments.textContent = shownCommentsCount;
  if (shownCommentsCount >= comments.length) {
    loadCommentsButton.classList.add('hidden');
  };
  count += COMMENT_STEP;
}

function clearComments() {
  count = 0;
  commentsList.innerHTML = '';
  loadCommentsButton.classList.remove('hidden');
  loadCommentsButton.removeEventListener('click', loadNextComments);
};

function renderComments(currentComments) {
  comments = currentComments;
  loadNextComments();
  loadCommentsButton.addEventListener('click', loadNextComments);
}

export {clearComments, renderComments}
