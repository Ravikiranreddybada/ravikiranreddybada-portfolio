import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.2 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <motion.div
          ref={ref}
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={childVariants} className="hero-badge-row">
            <span className="available-badge">
              <span className="badge-dot" />
              Available for internships
            </span>
          </motion.div>

          <motion.h1 variants={childVariants} className="hero-name">
            Bada Ravi <br />Kiran Reddy
          </motion.h1>

          <motion.p variants={childVariants} className="hero-title-line">
            Building production <span className="accent-text">agentic AI systems</span>
          </motion.p>

          <motion.p variants={childVariants} className="hero-subtitle-line">
            ReAct &nbsp;·&nbsp; RAG &nbsp;·&nbsp; async FastAPI &nbsp;·&nbsp; Open to 6–12 month internships
          </motion.p>

          <motion.p variants={childVariants} className="hero-desc">
            3rd-year B.Tech CSE (AI &amp; ML) at NIIT University. I build production-grade agentic AI
            systems — from-scratch ReAct loops, RAG pipelines with Pinecone, async FastAPI backends.
            I care about <strong>systems thinking at the execution level</strong>, not just framework abstractions.
          </motion.p>

          <motion.div variants={childVariants} className="hero-cta">
            <a href="#projects" className="magnetic-btn">
              View My Work <ArrowUpRight size={18} style={{ marginLeft: 8 }} />
            </a>
            <a href="#contact" className="hero-btn-ghost">
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-image-glow" />
          <img src="/profile.jpg" alt="Bada Ravi Kiran Reddy" className="hero-image" />
          <div className="hero-stat-chip chip-top">
            <span className="chip-num">308</span>
            <span className="chip-label">GitHub contributions</span>
          </div>
          <div className="hero-stat-chip chip-bottom">
            <span className="chip-num">3</span>
            <span className="chip-label">Production systems</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
