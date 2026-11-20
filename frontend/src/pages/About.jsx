import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page">
      <h1>About CommunityHub</h1>
      <p>
        CommunityHub is a React-powered community platform built during Season 12 to practice
        client-side routing, custom hooks, and responsive UI architecture.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Browse live community posts fetched from JSONPlaceholder</li>
        <li>Read full post details on dedicated dynamic routes</li>
        <li>Create and save new posts locally in your browser</li>
      </ul>

      <Link to="/posts">Back to Community Posts</Link>
    </div>
  );
}