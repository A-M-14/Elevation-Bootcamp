const tweeter = Tweeter();
const renderer = Renderer();

document.addEventListener('DOMContentLoaded', () => {
  const postBtn = document.querySelector('#post-button');
  const postInput = document.querySelector('#post-input');

  function refresh() {
    renderer.renderPosts(tweeter.getPosts());
    attachEventListeners();
  }

  function attachEventListeners() {
    document.querySelectorAll('.delete-post').forEach(btn => {
      btn.onclick = () => {
        tweeter.removePost(btn.dataset.id);
        refresh();
      };
    });

    document.querySelectorAll('.comment-button').forEach(btn => {
      btn.onclick = () => {
        const postId = btn.dataset.id;
        const input = btn.previousElementSibling;
        if (input.value.trim()) {
          tweeter.addComment(postId, input.value.trim());
          input.value = '';
          refresh();
        }
      };
    });

    document.querySelectorAll('.delete-comment').forEach(span => {
      span.onclick = () => {
        const commentId = span.dataset.id;
        const postId = span.closest('.post').dataset.id;
        tweeter.removeComment(postId, commentId);
        refresh();
      };
    });
  }

  postBtn.onclick = () => {
    if (postInput.value.trim()) {
      tweeter.addPost(postInput.value.trim());
      postInput.value = '';
      refresh();
    }
  };

  refresh();
});