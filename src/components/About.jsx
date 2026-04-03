import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiFastapi, SiFlask, SiMongodb, SiJenkins 
} from 'react-icons/si';
import './About.css';

const About = () => {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Jenkins", icon: <SiJenkins /> }
  ];

  const timeline = [
    {
      title: "B.Tech - Computer Science Engineering (AI & ML)",
      organization: "NIIT University",
      date: "2023 - 2027",
      description: "Focused on core Computer Science principles with a specialization in Artificial Intelligence and Machine Learning algorithms. Actively building robust and production-ready intelligent systems."
    }
  ];

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, type: "spring" }
    }
  };

  return (
    <section id="about" className="about-section container">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
      >
        <h2 className="section-title">Capabilities & Journey.</h2>
      </motion.div>
      
      <div className="about-layout">
        
        {/* Skills Column */}
        <motion.div 
          className="skills-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={variants}
        >
          <h3 className="subsection-title">Technical Arsenal</h3>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-card glass-panel">
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Column */}
        <motion.div 
          className="timeline-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={variants}
        >
          <h3 className="subsection-title">Experience & Education</h3>
          <div className="timeline">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <span className="timeline-date">{item.date}</span>
                  <h4>{item.title}</h4>
                  <p className="timeline-org">{item.organization}</p>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
