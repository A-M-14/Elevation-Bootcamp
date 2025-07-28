// Logic Module for Tweeter
function Tweeter() {
  let posts = [
    { text: "First post!", id: "p1", comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" }
      ]
    },
    { text: "Aw man, I wanted to be first", id: "p2", comments: [
        { id: "c4", text: "Don't worry second poster, you'll be first one day." },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." }
      ]
    }
  ];
  let postIdCounter = posts.length;
  let commentIdCounter = posts.reduce((acc, p) => acc + p.comments.length, 0);

  function getPosts() {
    return JSON.parse(JSON.stringify(posts));
  }

  function addPost(text) {
    postIdCounter++;
    const newPost = { text, id: `p${postIdCounter}`, comments: [] };
    posts.push(newPost);
  }

  function removePost(postID) {
    posts = posts.filter(p => p.id !== postID);
  }

  function addComment(postID, text) {
    const post = posts.find(p => p.id === postID);
    if (!post) return;
    commentIdCounter++;
    post.comments.push({ id: `c${commentIdCounter}`, text });
  }

  function removeComment(postID, commentID) {
    const post = posts.find(p => p.id === postID);
    if (!post) return;
    post.comments = post.comments.filter(c => c.id !== commentID);
  }
  
  return { getPosts, addPost, removePost, addComment, removeComment };
}