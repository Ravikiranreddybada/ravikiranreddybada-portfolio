import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ROLES = ['AI & ML Engineer', 'Full-Stack Developer', 'Agentic Systems Builder', 'LLM Architect'];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;
    if (!deleting && charIdx <= current.length) {
      setDisplayed(current.slice(0, charIdx));
      timeout = setTimeout(() => setCharIdx(c => c + 1), 60);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx >= 0) {
      setDisplayed(current.slice(0, charIdx));
      timeout = setTimeout(() => setCharIdx(c => c - 1), 35);
    } else {
      setDeleting(false);
      setRoleIdx(r => (r + 1) % ROLES.length);
      setCharIdx(0);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
  };
  const up = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 18 } }
  };

  return (
    <section id="home" style={{ minHeight:'100vh', display:'flex', alignItems:'center', padding:'5rem 0 3rem' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 420px', gap:'5rem', alignItems:'center' }}>

          {/* LEFT */}
          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Badge */}
            <motion.div variants={up} style={{ marginBottom:'2.5rem' }}>
              <span style={{
                display:'inline-flex', alignItems:'center', gap:'0.5rem',
                fontFamily:'var(--font-mono)', fontSize:'0.72rem',
                letterSpacing:'0.15em', textTransform:'uppercase',
                color:'var(--cyan)',
                padding:'0.45rem 1rem',
                border:'1px solid rgba(0,229,255,0.25)',
                borderRadius:'50px',
                background:'rgba(0,229,255,0.05)',
              }}>
                <span style={{
                  width:'6px', height:'6px', background:'var(--emerald)',
                  borderRadius:'50%', boxShadow:'0 0 8px #10b981',
                  animation:'pls 2s ease infinite'
                }}/>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={up}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--muted)', letterSpacing:'0.15em', marginBottom:'0.6rem' }}>
                // hello world
              </div>
              <h1 style={{
                fontFamily:'var(--font-disp)',
                fontSize:'clamp(3.5rem, 7vw, 6.5rem)',
                letterSpacing:'0.04em',
                color:'var(--white)',
                marginBottom:'0.2rem',
                textShadow:'0 0 60px rgba(0,229,255,0.08)',
              }}>
                Bada Ravi
              </h1>
              <h1 style={{
                fontFamily:'var(--font-disp)',
                fontSize:'clamp(3.5rem, 7vw, 6.5rem)',
                letterSpacing:'0.04em',
                background:'linear-gradient(100deg, #00e5ff, #7c3aed)',
                WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent',
                backgroundClip:'text',
              }}>
                Kiran Reddy.
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div variants={up} style={{ margin:'1.5rem 0 2rem', minHeight:'3rem' }}>
              <span style={{
                fontFamily:'var(--font-mono)',
                fontSize:'clamp(1rem, 2vw, 1.4rem)',
                color:'var(--off)',
                letterSpacing:'0.02em',
              }}>
                {displayed}
                <span style={{
                  display:'inline-block', width:'2px', height:'1.2em',
                  background:'var(--cyan)', marginLeft:'3px',
                  verticalAlign:'middle',
                  animation:'blink 1s step-end infinite'
                }}/>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p variants={up} style={{
              color:'var(--muted)', fontSize:'1.05rem', maxWidth:'550px',
              marginBottom:'3rem', lineHeight:'1.75'
            }}>
              B.Tech CSE (AI & ML) @ NIIT University. I build{' '}
              <span style={{ color:'var(--off)' }}>autonomous agentic systems</span>,{' '}
              <span style={{ color:'var(--off)' }}>full-stack ML platforms</span>, and{' '}
              deploy real production AI workflows — not just notebooks.
            </motion.p>

            {/* Stats row */}
            <motion.div variants={up} style={{ display:'flex', gap:'2.5rem', marginBottom:'3rem' }}>
              {[['4+','Projects Shipped'],['2','Cloud Certs'],['38','CV Classes Solved']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily:'var(--font-disp)', fontSize:'2.2rem', color:'var(--cyan)', letterSpacing:'0.04em' }}>{num}</div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.68rem', color:'var(--muted)', letterSpacing:'0.1em', textTransform:'uppercase' }}>{label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={up} style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <a href="#projects" className="cta-btn">View My Work ↓</a>
              <a href="#contact" className="ghost-btn">Let's Talk →</a>
            </motion.div>
          </motion.div>

          {/* RIGHT — image */}
          <motion.div
            initial={{ opacity:0, x:40 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.9, delay:0.5 }}
            style={{ position:'relative' }}
          >
            {/* Corner brackets */}
            {['tl','tr','bl','br'].map(p => (
              <span key={p} style={{
                position:'absolute', zIndex:3,
                width:'20px', height:'20px',
                borderColor:'var(--cyan)',
                borderStyle:'solid',
                borderWidth: 0,
                ...(p==='tl'?{top:-8,left:-8,borderTopWidth:'2px',borderLeftWidth:'2px'}:{}),
                ...(p==='tr'?{top:-8,right:-8,borderTopWidth:'2px',borderRightWidth:'2px'}:{}),
                ...(p==='bl'?{bottom:-8,left:-8,borderBottomWidth:'2px',borderLeftWidth:'2px'}:{}),
                ...(p==='br'?{bottom:-8,right:-8,borderBottomWidth:'2px',borderRightWidth:'2px'}:{}),
              }}/>
            ))}

            {/* Glow behind image */}
            <div style={{
              position:'absolute', inset:'-20%',
              background:'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 65%)',
              zIndex:0,
            }}/>

            <img
              src="/profile.jpg"
              alt="Ravi Kiran Reddy"
              style={{
                position:'relative', zIndex:2,
                width:'100%',
                aspectRatio:'3/4',
                objectFit:'cover',
                borderRadius:'var(--r-lg)',
                border:'1px solid var(--border-b)',
                filter:'contrast(1.05) saturate(0.9)',
              }}
            />

            {/* Floating badge */}
            <motion.div
              animate={{ y:[0,-6,0] }}
              transition={{ duration:3, repeat:Infinity, ease:'easeInOut' }}
              style={{
                position:'absolute', bottom:'2rem', left:'-2rem', zIndex:4,
                background:'var(--bg-2)', border:'1px solid var(--border-b)',
                borderRadius:'var(--r)', padding:'0.8rem 1.2rem',
                backdropFilter:'blur(12px)',
                display:'flex', alignItems:'center', gap:'0.75rem',
              }}
            >
              <div style={{ fontSize:'1.4rem' }}>🤖</div>
              <div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--cyan)' }}>LLM Agents</div>
                <div style={{ fontSize:'0.78rem', color:'var(--muted)' }}>Multi-agent systems</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pls { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.4)} }
        @media (max-width:900px) {
          .hero-inner { grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
