// View Module for Tweeter
function Renderer() {
  function renderPosts(posts) {
    const container = document.querySelector('#posts');
    container.innerHTML = '';
    posts.forEach(post => {

      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postDiv.dataset.id = post.id;

      const text = document.createElement('div');
      text.classList.add('post-text');
      text.textContent = post.text;
      postDiv.appendChild(text);

      const commentsDiv = document.createElement('div');
      commentsDiv.classList.add('comments');
      post.comments.forEach(c => {
        const com = document.createElement('div');
        com.classList.add('comment');
        com.dataset.id = c.id;
        
        const x = document.createElement('span');
        x.textContent = '✖';
        x.classList.add('delete-comment');
        x.dataset.id = c.id;
        com.appendChild(x);
        
        const commentText = document.createElement('span');
        commentText.textContent = c.text;
        commentText.classList.add('comment-text');
        com.appendChild(commentText);
        
        commentsDiv.appendChild(com);
      });
      postDiv.appendChild(commentsDiv);

      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Got something to say?';
      input.classList.add('comment-input');
      postDiv.appendChild(input);

      const btn = document.createElement('button');
      btn.textContent = 'Comment';
      btn.classList.add('comment-button');
      btn.dataset.id = post.id;
      postDiv.appendChild(btn);

      const del = document.createElement('button');
      del.textContent = 'Delete Post';
      del.classList.add('delete-post');
      del.dataset.id = post.id;
      postDiv.appendChild(del);

      container.appendChild(postDiv);
    });
  }
  
  return { renderPosts };
}