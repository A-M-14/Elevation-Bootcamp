async function dashboard() {
  try {
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/comments')
    ]);

    if (!usersRes.ok || !postsRes.ok || !commentsRes.ok) {
      throw new Error('One or more requests failed with status: ' +
        [usersRes.status, postsRes.status, commentsRes.status].join(', '));
    }

    const [users, posts, comments] = await Promise.all([
      usersRes.json(),
      postsRes.json(),
      commentsRes.json()
    ]);

    const totalUsers = users.length;
    const totalPosts = posts.length;
    const totalComments = comments.length;
    const avgPostsPerUser = totalPosts / totalUsers;
    const avgCommentsPerPost = totalComments / totalPosts;

    // Step 5: Analyze top users
    const userStats = users.map(user => {
      const userPosts = posts.filter(post => post.userId === user.id);
      const postIds = userPosts.map(post => post.id);
      const userComments = comments.filter(comment => postIds.includes(comment.postId));

      return {
        name: user.name,
        postCount: userPosts.length,
        commentCount: userComments.length
      };
    });

    const topUsers = [...userStats]
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3);

    // Get 5 most recent posts
    const recentPosts = [...posts]
      .sort((a, b) => b.id - a.id)
      .slice(0, 5);

    return {
      summary: {
        totalUsers,
        totalPosts,
        totalComments,
        avgPostsPerUser,
        avgCommentsPerPost
      },
      topUsers,
      recentPosts
    };

  } catch (error) {
    console.error('Failed to generate dashboard:', error.message);
    throw error;
  }
}

dashboard()
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(err => console.log('Dashboard could not be loaded.'));
