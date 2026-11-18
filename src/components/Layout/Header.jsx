import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <h2>CommunityHub</h2>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#explore">Explore</a>
        <a href="#about">About</a>
      </nav>

      <div className="user-menu">
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}
