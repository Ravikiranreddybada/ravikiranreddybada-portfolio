import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  const cfg = { damping: 35, stiffness: 180, mass: 1 };
  const cx = useSpring(mousePos.x, cfg);
  const cy = useSpring(mousePos.y, cfg);

  useEffect(() => {
    cx.set(mousePos.x);
    cy.set(mousePos.y);
  }, [mousePos, cx, cy]);

  return (
    <div className="app-wrapper">
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <motion.div className="cursor-glow" style={{ x: cx, y: cy }} />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
