import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer id="contact" style={{ padding:'8rem 0 3rem', borderTop:'1px solid var(--border)' }}>
    <div className="container">

      <motion.div
        initial={{ opacity:0, y:50 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        style={{ marginBottom:'6rem' }}
      >
        <p className="eyebrow">03 — Contact</p>
        <h2 style={{
          fontFamily:'var(--font-disp)',
          fontSize:'clamp(3rem, 8vw, 7rem)',
          letterSpacing:'0.03em',
          color:'var(--white)',
          lineHeight:1,
          marginBottom:'1rem',
        }}>
          Let's build
        </h2>
        <h2 style={{
          fontFamily:'var(--font-disp)',
          fontSize:'clamp(3rem, 8vw, 7rem)',
          letterSpacing:'0.03em',
          background:'linear-gradient(100deg, #00e5ff, #7c3aed)',
          WebkitBackgroundClip:'text',
          WebkitTextFillColor:'transparent',
          backgroundClip:'text',
          lineHeight:1,
          marginBottom:'3rem',
        }}>
          something.
        </h2>

        <p style={{ color:'var(--muted)', fontSize:'1.05rem', maxWidth:'500px', marginBottom:'3rem', lineHeight:'1.75' }}>
          Open to full-stack AI/ML engineering roles, research internships, and interesting collaborations. Reach out anytime.
        </p>

        <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
          {[
            { href:'mailto:badaravikiranreddy@gmail.com', icon:<Mail size={18}/>, label:'badaravikiranreddy@gmail.com', primary:true },
            { href:'https://github.com/Ravikiranreddybada', icon:<FaGithub size={18}/>, label:'GitHub', primary:false },
            { href:'https://linkedin.com/in/badaravikiranreddy', icon:<FaLinkedin size={18}/>, label:'LinkedIn', primary:false },
            { href:'tel:+919676312146', icon:<Phone size={18}/>, label:'+91 96763 12146', primary:false },
          ].map(({ href, icon, label, primary }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={primary ? 'cta-btn' : 'ghost-btn'}
              style={{ gap:'0.5rem', display:'inline-flex', alignItems:'center' }}
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div style={{
        display:'flex', justifyContent:'space-between', alignItems:'center',
        paddingTop:'2rem', borderTop:'1px solid var(--border)',
      }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--dim)', letterSpacing:'0.08em' }}>
          © {new Date().getFullYear()} BRKR.DEV — All rights reserved
        </span>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--dim)', letterSpacing:'0.08em' }}>
          React · Vite · Framer Motion
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
