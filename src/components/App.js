// App.js

import React from "react";
import Header from "./Header";
import About from "./About";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Your Blog Name" />
      <About
        image="https://your-custom-image-url.com"
        aboutText="Your blog description goes here."
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
