import { useFetch } from '../hooks/useFetch';
import PostCard from '../components/Post/PostCard'; // Assuming you have this component

export default function Posts() {
  // Call your custom hook with the JSONPlaceholder posts endpoint
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  // 1. Handle Loading State (required by marker rules)
  if (loading) {
    return <div className="loading-spinner">Loading posts...</div>;
  }

  // 2. Handle Error State (required by marker rules)
  if (error) {
    return <div className="error-message">Error loading posts: {error}</div>;
  }

  return (
    <div className="posts-page">
      <h1>Community Posts</h1>
      
      <div className="posts-grid">
        {posts && posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}