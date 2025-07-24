const posts = [
    { name: "Uncle Jerome", text: "Happy birthday kiddo!" },
    { name: "BFF Charlene", text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD" },
    { name: "Old High School Teacher", text: "Hey ace, have a good one." }
];

const nameInput = document.getElementById('nameInput');
const textInput = document.getElementById('textInput');
const postButton = document.getElementById('postButton');
const postsContainer = document.getElementById('postsContainer');

function render() {
    // Clear the container first to avoid duplicates
    postsContainer.innerHTML = '';
    
    posts.forEach(post => {

        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        
        postDiv.innerHTML = `<strong>${post.name}:</strong> ${post.text}`;
        
        postsContainer.appendChild(postDiv);
    });
}

function addPost() {
    const name = nameInput.value.trim();
    const text = textInput.value.trim();
    
    if (name && text) {

        posts.push({ name: name, text: text });
        
        nameInput.value = '';
        textInput.value = '';
        
        render();
    } else {
        alert('Please fill in both name and text fields!');
    }
}

postButton.addEventListener('click', addPost);

render();
