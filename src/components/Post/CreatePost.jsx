
import React, { useState } from 'react';

export default function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      author: 'Rahab',
      date: new Date().toISOString().split('T')[0],
      likes: 0,
    };

    onAddPost(newPost);

    setTitle('');
    setContent('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: '1.5rem',
        background: '#2d2d39',
        padding: '1.5rem',
        borderRadius: '8px'
      }}
    >
      <h3 style={{ marginBottom: '1rem', color: '#fff' }}>
        Create a New Post
      </h3>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          color: '#d1d5db'
        }}>
          Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title..."
          required
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #4b5563',
            background: '#1f2937',
            color: '#fff'
          }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          color: '#d1d5db'
        }}>
          Content
        </label>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
          rows="3"
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #4b5563',
            background: '#1f2937',
            color: '#fff'
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '600'
        }}
      >
        Publish Post
      </button>
    </form>
  );
}
