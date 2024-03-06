// ArticleList.js

import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  if (!Array.isArray(posts)) {
    console.error("Invalid data format. 'posts' prop should be an array.");
    return null; // Or render an error message or a loading state
  }

  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;
