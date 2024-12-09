import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <h3>{post.author}</h3>
      <p>{post.content}</p>
      <small>{new Date(post.createdAt).toLocaleString()}</small>
    </div>
  );
}

export default Post;
