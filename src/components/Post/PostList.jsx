
import React from 'react';
import PostCard from './PostCard';

export default function PostList({ posts, onLike }) {
  if (posts.length === 0) {
    return <p>No posts available yet. Create one below!</p>;
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
          onLike={onLike}
        />
      ))}
    </div>
  );
}
