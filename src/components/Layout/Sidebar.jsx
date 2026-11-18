
import React from 'react';

export default function Sidebar() {
  const popularPosts = [
    { id: 1, title: 'Getting Started with React' },
    { id: 2, title: 'Understanding Tailwind CSS' },
    { id: 3, title: 'Async/Await in JavaScript' },
  ];

  const tags = ['JavaScript', 'React', 'WebDev', 'CSS'];

  return (
    <aside className="sidebar">

      <section className="about-section">
        <h3>About CommunityHub</h3>
        <p>
          A collaborative space for developers to share knowledge and projects.
        </p>
      </section>

      <section className="popular-posts">
        <h3>Popular Posts</h3>
        <ul>
          {popularPosts.map(post => (
            <li key={post.id}>
              <a href={`#post-${post.id}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="tags-section">
        <h3>Tags</h3>
        <div className="tag-list">
          {tags.map((tag, index) => (
            <span key={index} className="tag-badge">
              #{tag}
            </span>
          ))}
        </div>
      </section>

    </aside>
  );
}
