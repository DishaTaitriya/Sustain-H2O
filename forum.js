const postsContainer = document.getElementById('posts-container');

// Example posts
const posts = [
  {
    name: "Admin",
    content: "Welcome to the community forum! Share your thoughts.",
    timestamp: new Date().toLocaleString()
  }
];

// Render posts
function renderPosts() {
  postsContainer.innerHTML = '';
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
      <strong>${post.name}</strong>
      <p>${post.content}</p>
      <small>${post.timestamp}</small>
    `;
    postsContainer.appendChild(postElement);
  });
}

// Add a new post
function addPost() {
  const userName = document.getElementById('user-name').value;
  const newPostText = document.getElementById('new-post-text').value;

  if (userName.trim() === '' || newPostText.trim() === '') {
    alert('Please enter both your name and some text for your post.');
    return;
  }

  const newPost = {
    name: userName,
    content: newPostText,
    timestamp: new Date().toLocaleString()
  };

  posts.unshift(newPost);  // Add the new post to the beginning of the array
  renderPosts();  // Re-render the posts
  document.getElementById('user-name').value = '';  // Clear the name field
  document.getElementById('new-post-text').value = '';  // Clear the text area
}

// Initial rendering of posts
renderPosts();

