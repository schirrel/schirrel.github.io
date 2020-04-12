const postsList = document.querySelector("#blog ul");

const fetchResource = async () => {
  let posts = await fetch("./assets/blog.json").then(res => res.json());
  return posts;
};

const renderPosts = posts => {
  posts.forEach(post => {
    let newPost = document.createElement("li");
    let newPostkLink = document.createElement("a");
    newPostkLink.href = "#blog?" + post.name.replace(".md", "");
    newPostkLink.innerText = post.title; //language.name;
    newPost.appendChild(newPostkLink);
    postsList.appendChild(newPost);
    newPostkLink.addEventListener;
  });
};
const Blog = {
  init: async current => {
    if (current) {
    } else {
      let posts = await fetchResource();
      renderPosts(posts);
    }
  }
};

export default Blog;
