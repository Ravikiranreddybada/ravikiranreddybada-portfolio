import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Cpu, GitBranch } from 'lucide-react';
import './About.css';

const stats = [
  { value: "308", label: "GitHub contributions", icon: GitBranch },
  { value: "3", label: "Production projects", icon: Cpu },
  { value: "67", label: "Deployments shipped", icon: Award },
  { value: "AWS", label: "Cloud Practitioner", icon: Award },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 }
  }
};

const About = () => {
  return (
    <section id="about" className="about-section container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span>About</span> Me
        </h2>
      </motion.div>

      {/* Stats row */}
      <div className="stats-row">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="stat-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Bio + bento grid */}
      <div className="about-layout">
        <motion.div
          className="about-bio"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="bio-text">
            I'm a 3rd-year B.Tech CSE (AI &amp; ML) student at NIIT University, building
            production-grade agentic AI systems from the ground up — custom ReAct orchestration loops,
            RAG pipelines backed by Pinecone, and async FastAPI backends that handle real workloads.
          </p>
          <p className="bio-text">
            I don't rely on framework magic. I understand the execution layer — how agents decompose
            queries into tool calls, how embeddings get retrieved under load, how CI/CD pipelines fail in
            the real world. 308 GitHub contributions in the last year is not a talking point; it's a pattern
            of shipping.
          </p>
          <p className="bio-text">
            I'm actively looking for <strong>6–12 month internships</strong> in AI engineering, backend systems,
            or full-stack roles where the work is real and the feedback loop is tight.
          </p>
        </motion.div>

        <div className="bento-grid">
          <motion.div
            className="bento-card glass-panel"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bento-icon"><GraduationCap size={22} /></div>
            <h3>NIIT University</h3>
            <p className="bento-sub">B.Tech — CSE (AI &amp; ML)</p>
            <p className="bento-muted">2023 – 2027</p>
            <p className="bento-muted">CGPA: 7.01</p>
          </motion.div>

          <motion.div
            className="bento-card glass-panel"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bento-icon"><Award size={22} /></div>
            <h3>Certification</h3>
            <p className="bento-sub">AWS Certified</p>
            <p className="bento-muted">Cloud Practitioner</p>
            <p className="bento-muted">June 2025</p>
          </motion.div>

          <motion.div
            className="bento-card glass-panel bento-focus"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bento-icon"><Cpu size={22} /></div>
            <h3>Core Focus</h3>
            <ul className="bento-focus-list">
              <li>ReAct agentic loops (from scratch)</li>
              <li>RAG pipelines &amp; vector search</li>
              <li>Async FastAPI backends</li>
              <li>CI/CD &amp; container-first deploys</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
