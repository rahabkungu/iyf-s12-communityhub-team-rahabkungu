
import { describe, it, expect } from 'vitest';
import { sortPostsByDate, searchPosts } from './posts';

describe('CommunityHub Post Utils', () => {
  const samplePosts = [
    {
      id: 1,
      title: 'React Basics',
      author: 'Alice',
      date: '2026-11-01'
    },
    {
      id: 2,
      title: 'Advanced Hooks',
      author: 'Bob',
      date: '2026-11-15'
    },
    {
      id: 3,
      title: 'CSS Layouts',
      author: 'Alice',
      date: '2026-10-20'
    },
  ];

  it('sorts posts from newest to oldest', () => {
    const sorted = sortPostsByDate(samplePosts);

    expect(sorted[0].id).toBe(2);
    expect(sorted[2].id).toBe(3);
  });

  it('filters posts by search query matching title', () => {
    const results = searchPosts(samplePosts, 'React');

    expect(results.length).toBe(1);
    expect(results[0].title).toBe('React Basics');
  });

  it('filters posts by search query matching author', () => {
    const results = searchPosts(samplePosts, 'Alice');

    expect(results.length).toBe(2);
  });
});
