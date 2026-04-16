import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquareDiff } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <motion.div 
          className="footer-content glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="footer-title">
            <h2 className="section-title">
              <span>Let's build</span> <br/>
              something.
            </h2>
            <p className="bento-sub mb-4" style={{ textAlign: "center" }}>Tell me about your next project or role.</p>
          </div>
          
          <div className="contact-details">
            <a href="mailto:badaravikiranreddy@gmail.com" className="con-box">
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a href="tel:+919676312146" className="con-box">
              <Phone size={24} />
              <span>Call</span>
            </a>
            <a href="https://github.com/Ravikiranreddybada" target="_blank" rel="noreferrer" className="con-box">
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/badaravikiranreddy" target="_blank" rel="noreferrer" className="con-box">
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
          
        </motion.div>
        
        <div className="footer-bottom">
          <p className="bento-muted">&copy; {new Date().getFullYear()} BRKR. Built with React, Vite & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
