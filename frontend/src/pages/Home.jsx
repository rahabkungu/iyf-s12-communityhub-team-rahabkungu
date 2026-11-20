import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import PostCard from '../components/Post/PostCard';
import styles from './Home.module.css';

export default function Home() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  // Grab only the first 3 posts for the Home page preview
  const recentPosts = posts ? posts.slice(0, 3) : [];

  return (
    <div className={styles.homePage}>
      {/* 1. Welcome Banner */}
      <section className={styles.heroSection}>
        <h1>Welcome to CommunityHub</h1>
        <p>
          A space to share ideas, read community discussions, and connect with fellow developers.
        </p>
        <div className={styles.heroActions}>
          <Link to="/posts" className={styles.btnPrimary}>
            Explore All Posts
          </Link>
          <Link to="/create" className={styles.btnSecondary}>
            Create a Post
          </Link>
        </div>
      </section>

      {/* 2. Recent Posts Section */}
        <h2>Recent Posts</h2>

        {loading && <p>Loading recent posts...</p>}
        {error && <p className="error-message">Could not load recent posts: {error}</p>}

        {loading && !error && (
          <div className={styles.postsGrid}>
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
    </div>
  );
}