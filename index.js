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

/*function to render posts from json object*/
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
                        <li><button class="like"><img src="images/icon-heart-outline.png" alt="like"></button></li>
                        <li><button><img src="images/icon-comment.png" alt="comment"></button></li>
                        <li><button><img src="images/icon-dm.png" alt="message"></button></li>
                    </ul>
                    <p class="content-bold"><span>${post.likes}</span> likes</p>
                    <p><span class="content-bold">${post.username}</span> ${post.comment}</p>
                </footer>
            </section>
        `;

      // const newPost = document.getElementById("post-template");
      // postContainer.appendChild(newPost);
    });
    const likeButtons = document.querySelectorAll(".like");
    likeButtons.forEach((button) => {
      button.addEventListener("click", updateCounter);
    });
  }
}

/*like logic*/

function updateCounter(el) {
  const targetLikesEl = el.target
    .closest("footer")
    .querySelectorAll(".content-bold span")[0];
  const likeButton = el.target.closest("button");
  console.log(el.target);

  if (likeButton.classList.contains("like")) {
    targetLikesEl.textContent = parseInt(targetLikesEl.textContent) + 1;
    likeButton.classList.remove("like");
    likeButton.classList.add("liked");
    likeButton.querySelectorAll("img")[0].src = "images/icon-heart-filled.png";
  } else {
    targetLikesEl.textContent = parseInt(targetLikesEl.textContent) - 1;
    likeButton.classList.remove("liked");
    likeButton.classList.add("like");
    likeButton.querySelectorAll("img")[0].src = "images/icon-heart-outline.png";
  }
}

/*what is called when javascript file loads*/
renderPosts();
