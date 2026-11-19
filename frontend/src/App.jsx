
import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import PostList from './components/Post/PostList';
import CreatePost from './components/Post/CreatePost';
import PostCard from './components/Post/PostCard';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Welcome to communityHub!', content: 'Glad to have you all here building together.', author: 'Admin', date: '2026-11-18', likes: 5 }
  ]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleLikePost = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="app-container">
      <Header />

      <div className="main-content" style={{ display: 'flex' }}>
        <Sidebar />

        <main style={{ padding: '20px' }}>
          <h2>Community Feed</h2>
          <CreatePost onAddPost={handleAddPost} />
          <hr style={{ margin: '2rem 0', borderColor: '#333'}}/>
          <PostList posts={posts} onLike={handleLikePost} />
          <PostCard post={{ id: 2, title: 'Sample Post', content: 'This is a sample post content.', author: 'User1', date: '2026-11-19', likes: 3 }} onLike={handleLikePost} />
          <p>Your collaborative space is coming together!</p>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
