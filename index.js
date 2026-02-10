const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function renderPosts() {
  const postContainer = document.querySelectorAll("main")[0];
  if (postContainer) {
    posts.forEach((post) => {
      postContainer.innerHTML += `
        <section class="post-card">
                <header class="post-header container">
                    <img class="user-image poster-image" src=${post.avatar} alt="${post.name} profile avatar">
                    <h2 class="poster-name">${post.name}</h2>
                    <p class="poster-location">${post.location}</p>
                </header>
                <img class="post-image" src=${post.post} alt="selfie">
                <footer class="post-footer container">
                    <ul class="post-controls">
                        <li><button><img src="images/icon-heart.png" alt="like"></button></li>
                        <li><button><img src="images/icon-comment.png" alt="comment"></button></li>
                        <li><button><img src="images/icon-dm.png" alt="message"></button></li>
                    </ul>
                    <p class="content-bold">${post.likes} likes</p>
                    <p><span class="content-bold">${post.username}</span> ${post.comment}</p>
                </footer>
            </section>
        `;
        const newPost = document.getElementById("post-template");
        postContainer.appendChild(newPost);
    });
  }
}

renderPosts();
