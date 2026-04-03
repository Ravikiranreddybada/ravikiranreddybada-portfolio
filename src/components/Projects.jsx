import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldAlert } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "DermaSmart",
      tagline: "AI Skin Condition Diagnosis System",
      desc: "Built an end-to-end AI dermatology web application for personalized skincare analysis. Trained a CNN transfer learning model on the Dermnet dataset to classify 23 skin conditions from user-uploaded or live-captured images.",
      features: "Integrated Gemini API to generate personalized dermatology reports with skincare routines, diet tips, and product recommendations.",
      tech: ["React", "FastAPI", "TensorFlow", "MongoDB", "Gemini API", "Auth0"],
      github: "https://github.com/Ravikiranreddybada/dermasmart",
      wip: true
    },
    {
      title: "AgentPilot",
      tagline: "Production LLM Agentic AI Platform",
      desc: "Built a multi-agent AI platform with research, SQL, code review, and planning agents. Designed modular agent architecture supporting 4 specialized AI agents, enabling seamless addition of new agent types.",
      features: "Deployed on Render and Vercel with real-world agentic workflows handling research, database querying, and automated code review.",
      tech: ["React", "Express", "MongoDB", "Groq API", "Docker", "Google OAuth"],
      github: "https://github.com/Ravikiranreddybada/AgentPilot",
      live: "https://agentpilot-liard.vercel.app"
    },
    {
      title: "MergeMind",
      tagline: "Autonomous GitHub PR Agent",
      desc: "Built an AI system that autonomously converts GitHub issues into pull requests. Automated full PR lifecycle including issue parsing, branch creation, and diff generation, reducing manual PR effort significantly.",
      features: "Implemented real-time workflow tracking with a human approval gate before PR creation, ensuring code quality and developer oversight.",
      tech: ["FastAPI", "Next.js 14", "Groq LLaMA", "GitHub APIs"],
      github: "https://github.com/Ravikiranreddybada/MergeMind",
      live: "https://merge-mind-eight.vercel.app"
    },
    {
      title: "FarmMaster",
      tagline: "AI Agricultural Decision System",
      desc: "Built an end-to-end ML web application for intelligent farmer decision support. Achieved high accuracy on disease detection using CNN-based transfer learning on the PlantVillage dataset.",
      features: "Built a unified ML pipeline combining crop recommendation, fertilizer prediction, and plant disease detection from leaf images into a single application.",
      tech: ["Flask", "scikit-learn", "TensorFlow", "PlantVillage"],
      github: "https://github.com/Ravikiranreddybada/FarmMaster"
    }
  ];

  return (
    <section id="projects" className="projects-section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Production Architectures.
      </motion.h2>
      
      <div className="projects-layout">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            className="project-row glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="p-header">
              <div className="p-title-group">
                <a href={project.live || project.github} target="_blank" rel="noreferrer" className="project-title-link">
                  <h3>{project.title}</h3>
                </a>
                {project.wip && <span className="dev-badge"><ShieldAlert size={14}/> Developing</span>}
              </div>
              <p className="p-tagline">{project.tagline}</p>
            </div>
            
            <div className="p-body">
              <p>{project.desc}</p>
              <p className="p-impact"><strong>Engineered Impact:</strong> {project.features}</p>
            </div>
            
            <div className="p-footer">
              <div className="p-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="p-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="link-icon">
                    <FaGithub size={20}/>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="link-icon">
                    <ExternalLink size={20}/>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
