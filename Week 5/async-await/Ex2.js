async function getUserWithPosts(userId) {
  try {
    if (!userId || userId <= 0) {
      throw new Error('Invalid user ID. Please provide a valid positive number.');
    }

    // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
    console.log(`Fetching user with ID: ${userId}`);
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    if (!userResponse.ok) {
      if (userResponse.status === 404) {
        throw new Error(`User with ID ${userId} not found.`);
      }
      throw new Error(`Failed to fetch user: ${userResponse.status} ${userResponse.statusText}`);
    }

    const user = await userResponse.json();
    
    // Check if user data is empty (JSONPlaceholder returns {} for non-existent users)
    if (!user.id) {
      throw new Error(`User with ID ${userId} does not exist.`);
    }

    console.log(`User found: ${user.name}`);

    // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
    console.log(`Fetching posts`);
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    
    if (!postsResponse.ok) {
      throw new Error(`Failed to fetch posts: ${postsResponse.status} ${postsResponse.statusText}`);
    }

    const posts = await postsResponse.json();
    
    console.log(`Found ${posts.length} posts for user ${user.name}`);

    // 3. Return combined data
    return {
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        company: user.company,
        address: user.address
      },
      posts: posts.map(post => ({
        id: post.id,
        title: post.title,
        body: post.body
      })),
      summary: {
        userName: user.name,
        totalPosts: posts.length,
        fetchedAt: new Date().toISOString()
      }
    };

  } catch (error) {
    console.error('Error in getUserWithPosts:', error.message);
    throw error;
  }
}

async function testFunction() {
  try {
    const result = await getUserWithPosts(6);
    console.log('Success:', result);
  } catch (error) {
    console.error('Failed to get user with posts:', error.message);
  }
}

testFunction();
