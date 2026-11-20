import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      {/* Navigation Header */}
      <nav style={{ display: 'flex', gap: '20px', padding: '1rem', background: '#1a1a1a', color: '#fff' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/posts" style={{ color: '#fff', textDecoration: 'none' }}>Posts</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
      </nav>

      {/* Page Routes */}
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}