import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          &copy; 2026 Bada Ravi Kiran Reddy. Built with React, Vite &amp; Framer Motion.
        </p>
        <div className="footer-links">
          <a href="https://github.com/Ravikiranreddybada" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ravikiranreddybada" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:badaravikiranreddy@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
