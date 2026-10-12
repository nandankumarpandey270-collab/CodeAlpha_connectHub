const postInput = document.getElementById("postContent");
const postBtn = document.getElementById("publishBtn");
const posts = document.getElementById("postsContainer");
const message = document.getElementById("message");
const myPosts = document.getElementById("myPosts");

let postCount = 0;

// Publish a new post
postBtn.addEventListener("click", function () {
  const text = postInput.value.trim();

  if (text === "") {
    message.textContent = "Please write something first!";
    return;
  }

  const post = document.createElement("article");
  post.className = "card post";

  const name = document.createElement("h3");
  name.textContent = "Nandan Pandey";

  const time = document.createElement("small");
  time.textContent = "You · Just now";

  const content = document.createElement("p");
  content.textContent = text;

  const likeBtn = document.createElement("button");
  likeBtn.className = "likeBtn";
  likeBtn.textContent = "♡ Like (0)";

  let liked = false;

  likeBtn.addEventListener("click", function () {
    liked = !liked;
    likeBtn.textContent = liked ? "♥ Liked (1)" : "♡ Like (0)";
  });

  post.append(name, time, content, likeBtn);
  posts.prepend(post);

  postCount++;
  myPosts.textContent = postCount;

  postInput.value = "";
  message.textContent = "Post published successfully!";
});

// Enter a post using the button
postInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    postBtn.click();
  }
});