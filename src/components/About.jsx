import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Cloud, Database } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    "Python", "JavaScript", "SQL", "React", "Next.js", "Express.js", 
    "FastAPI", "Flask", "MongoDB", "Docker", "AWS", "Jenkins"
  ];

  const variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <section id="about" className="about-section container">
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="section-title">Capabilities.</h2>
      </motion.div>
      
      <div className="bento-grid">
        {/* Education Block */}
        <motion.div className="bento-card glass-panel col-span-2" variants={variants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, margin: "-50px" }}>
          <div className="bento-icon"><Terminal size={24}/></div>
          <h3>NIIT University</h3>
          <p className="bento-sub">B.Tech - Computer Science Engineering (AI & ML)</p>
          <p className="bento-muted">2023 - 2027</p>
        </motion.div>

        {/* Certifications Block */}
        <motion.div className="bento-card glass-panel" variants={variants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, margin: "-50px" }}>
           <div className="bento-icon"><Cloud size={24}/></div>
           <h3>Certifications</h3>
           <ul className="bento-list">
             <li>AWS Cloud Practitioner</li>
             <li>Python Fundamentals</li>
           </ul>
        </motion.div>

        {/* Big Skills Block */}
        <motion.div className="bento-card glass-panel col-span-3 row-span-2" variants={variants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, margin: "-50px" }}>
          <div className="bento-icon"><Database size={24}/></div>
          <h3>Tech Stack</h3>
          <p className="bento-sub mb-4">I actively construct systems with these technologies.</p>
          <div className="skills-cloud">
            {skills.map((skill, idx) => (
              <span key={idx} className="tech-pill">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Interests Block */}
        <motion.div className="bento-card glass-panel col-span-1" variants={variants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, margin: "-50px" }}>
          <div className="bento-icon"><Lightbulb size={24}/></div>
          <h3>Core Focus</h3>
          <p className="bento-muted">LLM Agentic Systems</p>
          <p className="bento-muted">Machine Learning</p>
          <p className="bento-muted">Automation</p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
