import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home','about','projects','contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      transition: 'all 0.4s ease',
      padding: scrolled ? '0.75rem 0' : '1.5rem 0',
      background: scrolled ? 'rgba(5,5,7,0.85)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
    }}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <a href="#home" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          color: 'var(--cyan)',
          letterSpacing: '0.12em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <span style={{
            display: 'inline-block',
            width: '8px', height: '8px',
            background: 'var(--cyan)',
            borderRadius: '50%',
            boxShadow: '0 0 8px var(--cyan)',
            animation: 'pls 2s ease infinite',
          }}/>
          BRKR.DEV
        </a>

        <ul style={{ display:'flex', gap:'2.5rem', listStyle:'none', alignItems:'center' }}>
          {[['about','About'],['projects','Work'],['contact','Contact']].map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: active === id ? 'var(--cyan)' : 'var(--muted)',
                  transition: 'color 0.2s',
                  textTransform: 'uppercase',
                  position: 'relative',
                }}
              >
                {label}
                {active === id && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px', left: 0, right: 0,
                    height: '1px',
                    background: 'var(--cyan)',
                    boxShadow: '0 0 6px var(--cyan)',
                  }}/>
                )}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Ravikiranreddybada"
              target="_blank"
              rel="noreferrer"
              className="cta-btn"
              style={{ fontSize:'0.75rem', padding:'0.5rem 1.2rem', letterSpacing:'0.05em' }}
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
      <style>{`@keyframes pls { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }`}</style>
    </nav>
  );
};

export default Navbar;
