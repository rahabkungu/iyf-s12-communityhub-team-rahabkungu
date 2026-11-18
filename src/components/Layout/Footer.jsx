
import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#contact">Contact</a>
      </div>

      <p>
        &copy; {new Date().getFullYear()} CommunityHub. All rights reserved.
      </p>

    </footer>
  );
}
