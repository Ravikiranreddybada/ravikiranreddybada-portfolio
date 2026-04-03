import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    id: '01',
    title: 'AgentPilot',
    tagline: 'Production LLM Agentic AI Platform',
    desc: 'Multi-agent AI platform with research, SQL, code review, and planning agents. Designed modular architecture supporting 4 specialized AI agents with seamless extensibility.',
    impact: 'Deployed on Render + Vercel. Real agentic workflows handling research, database querying, and automated code review at production scale with Google OAuth.',
    tech: ['React', 'Express', 'MongoDB', 'Groq API', 'Docker', 'Google OAuth'],
    github: 'https://github.com/Ravikiranreddybada/AgentPilot',
    live: 'https://agentpilot-liard.vercel.app',
    status: 'live',
    color: '#00e5ff',
  },
  {
    id: '02',
    title: 'MergeMind',
    tagline: 'Autonomous GitHub PR Agent',
    desc: 'AI system that autonomously converts GitHub issues into pull requests. Full PR lifecycle automation — issue parsing, branch creation, diff generation with SSE real-time tracking.',
    impact: 'Human approval gate before PR creation ensures code quality. LLaMA 3.1-70B drives the entire reasoning pipeline with live workflow visualization.',
    tech: ['FastAPI', 'Next.js 14', 'Groq LLaMA', 'GitHub APIs', 'SSE'],
    github: 'https://github.com/Ravikiranreddybada/MergeMind',
    live: 'https://merge-mind-eight.vercel.app',
    status: 'live',
    color: '#7c3aed',
  },
  {
    id: '03',
    title: 'DermaSmart',
    tagline: 'AI Skin Condition Diagnosis System',
    desc: 'End-to-end AI dermatology web app. CNN transfer learning on Dermnet dataset classifying 23 skin conditions from user-uploaded or live-captured images.',
    impact: 'Gemini API generates personalised dermatology reports with skincare routines, diet tips, and product recommendations in real time.',
    tech: ['React', 'FastAPI', 'TensorFlow', 'MongoDB', 'Gemini API', 'Auth0'],
    github: 'https://github.com/Ravikiranreddybada/dermasmart',
    status: 'dev',
    color: '#10b981',
  },
  {
    id: '04',
    title: 'FarmMaster',
    tagline: 'AI Agricultural Decision System',
    desc: 'End-to-end ML web app for intelligent farmer decision support. High-accuracy disease detection via CNN transfer learning on PlantVillage dataset.',
    impact: 'Unified ML pipeline — crop recommendation, fertiliser prediction, and plant disease detection from a single leaf image upload in one app.',
    tech: ['Flask', 'scikit-learn', 'TensorFlow', 'PlantVillage'],
    github: 'https://github.com/Ravikiranreddybada/FarmMaster',
    status: 'done',
    color: '#ff6b35',
  },
];

const STATUS = {
  live: { label: 'Live ●', color: '#10b981' },
  dev:  { label: 'In Dev', color: '#f59e0b' },
  done: { label: 'Complete', color: '#6b6b80' },
};

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ padding: '8rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">02 — Work</p>
          <h2 className="sec-title">Production Architectures.</h2>
        </motion.div>

        <div>
          {PROJECTS.map((p, idx) => {
            const isHov = hovered === p.id;
            const st = STATUS[p.status];
            return (
              <motion.div
                key={p.id}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                style={{
                  borderBottom: '1px solid var(--border)',
                  padding: '3rem 0 3rem 1.5rem',
                  cursor: 'default',
                  background: isHov ? 'rgba(0,229,255,0.012)' : 'transparent',
                  position: 'relative',
                  transition: 'background 0.35s ease',
                }}
              >
                {/* Left accent bar */}
                <div style={{
                  position: 'absolute',
                  left: 0, top: '2rem', bottom: '2rem',
                  width: '2px',
                  background: p.color,
                  boxShadow: isHov ? `0 0 12px ${p.color}` : 'none',
                  transform: `scaleY(${isHov ? 1 : 0})`,
                  transformOrigin: 'top',
                  transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s',
                  borderRadius: '2px',
                }} />

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr 1fr 60px',
                  gap: '2rem',
                  alignItems: 'start',
                }}>
                  {/* Index number */}
                  <div style={{
                    fontFamily: 'var(--font-disp)',
                    fontSize: 'clamp(2.8rem, 4vw, 4rem)',
                    color: isHov ? p.color : 'var(--dim)',
                    letterSpacing: '0.04em',
                    lineHeight: 1,
                    transition: 'color 0.3s ease',
                    userSelect: 'none',
                    paddingTop: '0.3rem',
                  }}>
                    {p.id}
                  </div>

                  {/* Title + tagline + pills */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-disp)',
                        fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                        color: isHov ? 'var(--white)' : 'var(--off)',
                        letterSpacing: '0.04em',
                        transition: 'color 0.3s ease',
                      }}>
                        {p.title}
                      </h3>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.08em',
                        color: st.color,
                        border: `1px solid ${st.color}40`,
                        padding: '0.18rem 0.6rem',
                        borderRadius: '4px',
                        background: `${st.color}10`,
                        whiteSpace: 'nowrap',
                      }}>
                        {st.label}
                      </span>
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      color: 'var(--muted)',
                      letterSpacing: '0.02em',
                      marginBottom: '1.2rem',
                    }}>
                      {p.tagline}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {p.tech.map(t => <span key={t} className="pill">{t}</span>)}
                    </div>
                  </div>

                  {/* Description + impact */}
                  <div>
                    <p style={{
                      color: 'var(--muted)',
                      fontSize: '0.92rem',
                      lineHeight: '1.78',
                      marginBottom: '0.9rem',
                    }}>
                      {p.desc}
                    </p>
                    <p style={{
                      color: 'var(--off)',
                      fontSize: '0.88rem',
                      lineHeight: '1.72',
                      borderLeft: `2px solid ${p.color}60`,
                      paddingLeft: '0.9rem',
                    }}>
                      {p.impact}
                    </p>
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingTop: '0.3rem' }}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '42px', height: '42px', borderRadius: '50%',
                        border: '1px solid var(--border-b)',
                        color: 'var(--muted)',
                        transition: 'all 0.22s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--cyan)';
                        e.currentTarget.style.color = 'var(--cyan)';
                        e.currentTarget.style.boxShadow = '0 0 12px rgba(0,229,255,0.2)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--border-b)';
                        e.currentTarget.style.color = 'var(--muted)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <FaGithub size={17} />
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        title="Live Demo"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: '42px', height: '42px', borderRadius: '50%',
                          border: '1px solid var(--border-b)',
                          color: 'var(--muted)',
                          transition: 'all 0.22s ease',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = 'var(--cyan)';
                          e.currentTarget.style.color = 'var(--cyan)';
                          e.currentTarget.style.boxShadow = '0 0 12px rgba(0,229,255,0.2)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = 'var(--border-b)';
                          e.currentTarget.style.color = 'var(--muted)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
