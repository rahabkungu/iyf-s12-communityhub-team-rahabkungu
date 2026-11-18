
import React from 'react';

export default function PostCard({ post, onLike }) {
  return (
    <div
      className="post-card"
      style={{
        background: '#2d2d39',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '1rem'
      }}
    >
      <h3>{post.title}</h3>

      <p style={{ margin: '0.5rem 0', color: '#d1d5db' }}>
        {post.content}
      </p>

      <div
        className="post-meta"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.85rem',
          color: '#9ca3af',
          marginTop: '1rem'
        }}
      >
        <span>
          By {post.author} on {post.date}
        </span>

        <button
          onClick={() => onLike(post.id)}
          style={{
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            padding: '0.25rem 0.75rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ❤️ {post.likes} Likes
        </button>
      </div>
    </div>
  );
}
