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
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
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
          <motion.span variants={childVariants} className="hero-greeting">
            Hello, I'm
          </motion.span>
          
          <motion.h1 variants={childVariants} className="hero-name">
            Bada Ravi <br /> Kiran Reddy
          </motion.h1>
          
          <motion.h2 variants={childVariants} className="hero-title">
            <span className="hero-split">Creative</span> <br/>
            <span className="hero-profession-1">AI & ML</span> 
            <span className="hero-profession-2">Engineer</span>
          </motion.h2>
          
          <motion.p variants={childVariants} className="hero-desc">
            B.Tech CSE student specializing in <strong>AI & Machine Learning</strong> at NIIT University. 
            I build highly scalable, full-stack applications and deploy autonomous machine learning workflows that bring ideas to life.
          </motion.p>
          
          <motion.div variants={childVariants} className="hero-cta">
            <a href="#projects" className="magnetic-btn">
              View My Work <ArrowUpRight size={20} style={{marginLeft: 8}}/>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-image-glow"></div>
          <img src="/profile.jpg" alt="Bada Ravi Kiran Reddy" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
