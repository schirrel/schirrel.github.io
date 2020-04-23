import Request from "./Request.js";
import Content from "./content.js";
import snarkdown from './snarkdown.js';

const postUrlRegex = new RegExp(/(#blog\?post\=)(.*?)/gm);
const postsList = document.querySelector("#blog ul");
const post = document.querySelector("#post .post-content");

const getPosts = async () => {
  let posts = await Request.get("./assets/blog.json");
  return posts;
};
const getPost = async (fileName) => {
  let blogPost = await Request.get(`./assets/blog/${fileName}.md`);
  return await blogPost;
};
const openPost = async (fileName) => {
  let blogPost = await getPost(fileName);
  if (blogPost) {
    Content.setDataSection("post");
    post.innerHTML = snarkdown(blogPost);
  }
};
const getSelectedPost = (hash) => {
  return hash.replace(postUrlRegex, `$2`);
};
const postHandler = async () => {
  let currentPath = window.location.hash;
  if (/(#blog)/gm.test(currentPath)) {
    if (postUrlRegex.test(currentPath)) {
      openPost(getSelectedPost(currentPath));
    } else {
      let posts = await getPosts();
      renderPosts(posts);
      if(Content.getDataSection() !== 'blog') {
      Content.setDataSection("blog");
      }
    }
  }
};
const watchURL = () => {
  window.onhashchange = postHandler;
};
const renderPosts = (posts) => {
  postsList.innerHTML = "";
  posts.forEach((post) => {
    let newPost = document.createElement("li");
    let newPostkLink = document.createElement("a");
    newPostkLink.href = "#blog?post=" + post.name.replace(".md", "");
    newPostkLink.innerText = post.title; //language.name;
    newPost.appendChild(newPostkLink);
    postsList.appendChild(newPost);
  });
};
const Blog = {
  init: async () => {
    postHandler();
    watchURL();
  },
};
export default Blog;