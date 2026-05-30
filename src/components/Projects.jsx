import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: "AgentPilot",
    subtitle: "ReAct loop from scratch · No LangChain · Async FastAPI · Pinecone RAG",
    desc: "Implemented a full ReAct (Reason + Act) orchestration loop without LangChain — the agent decomposes queries into tool calls, observes results, and synthesizes grounded answers. Built an async FastAPI backend integrating 5 external systems (Slack, Tavily, MongoDB, Pinecone, HTTP APIs) via a custom tool dispatcher.",
    impact: "RAG pipeline with Jina embeddings + Pinecone for hallucination-free document Q&A. 7-stage Jenkins CI/CD pipeline with parallel lint, Docker build, smoke test, and Render deploy hook.",
    tech: ["Python", "FastAPI", "asyncio", "Pydantic", "Pinecone", "MongoDB", "Docker", "Jenkins", "Groq", "React.js"],
    github: "https://github.com/Ravikiranreddybada/agentpilot",
    live: "https://agentpilot-liard.vercel.app"
  },
  {
    title: "DermaSmart",
    subtitle: "4-stage safe-audit pipeline · MobileNetV2 · Gemini 2.0 · In-memory processing",
    desc: "Engineered a 4-stage Safe-Audit pipeline: HSV neural image gating (OpenCV) → MobileNetV2 classification of 23+ skin conditions → ethical hard-intercept for malignant cases → Gemini 2.0 reasoning for personalized routines. Images processed entirely in volatile RAM — deliberate privacy and performance trade-off.",
    impact: "End-to-end pipeline from image upload to personalized skincare routine with Auth0-gated access and TypeScript frontend.",
    tech: ["Python", "FastAPI", "TensorFlow", "MobileNetV2", "OpenCV", "Gemini 2.0", "React 18", "TypeScript", "Auth0"],
    github: "https://github.com/Ravikiranreddybada/dermasmart",
    live: "https://dermasmart.vercel.app"
  },
  {
    title: "MergeMind",
    subtitle: "Agentic state machine · Real-time SSE streaming · Human-in-the-loop gates",
    desc: "Designed an agentic state machine (issue fetch → repo analysis → AI fix generation → human approval → PR open) with real-time SSE streaming and two-stage human-in-the-loop gates preventing unsafe auto-merge.",
    impact: "Groq LLaMA 3.1-70B on LPU for sub-second code generation. Full PR lifecycle automation with developer oversight preserved at every merge gate.",
    tech: ["Python", "FastAPI", "asyncio", "Pydantic v2", "Groq LLaMA 3.1-70B", "SSE", "Next.js 14", "TypeScript", "GitHub API"],
    github: "https://github.com/Ravikiranreddybada/MergeMind",
    live: "https://merge-mind-eight.vercel.app"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>Production</span> Architectures
      </motion.h2>

      <div className="projects-layout">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-row glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: idx * 0.08 }}
          >
            <div className="p-header">
              <span className="projects-number">0{idx + 1}</span>
              <div className="p-title-group">
                <a href={project.live} target="_blank" rel="noreferrer" className="project-title-link">
                  <h3>{project.title}</h3>
                </a>
              </div>
              <p className="p-tagline">{project.subtitle}</p>
            </div>

            <div className="p-body">
              <p>{project.desc}</p>
              <h4 className="p-impact-title">Engineered Impact</h4>
              <p className="p-impact">{project.impact}</p>
            </div>

            <div className="p-footer">
              <div className="p-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="p-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="link-icon" title="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="link-icon" title="Live demo">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
