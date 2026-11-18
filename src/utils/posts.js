
// Pure helper to sort posts newest first
export function sortPostsByDate(posts) {
  return [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}

// Pure helper to search posts by title or author
export function searchPosts(posts, query) {
  if (!query) return posts;

  const lowerQuery = query.toLowerCase();

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.author.toLowerCase().includes(lowerQuery)
  );
}
