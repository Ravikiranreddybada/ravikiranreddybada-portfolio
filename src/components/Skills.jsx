import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"]
  },
  {
    label: "Backend",
    skills: ["FastAPI", "asyncio", "Pydantic v2", "httpx", "REST APIs"]
  },
  {
    label: "LLM / Agents",
    skills: ["ReAct orchestration", "RAG pipelines", "Groq", "Gemini 2.0", "Pinecone"]
  },
  {
    label: "Databases",
    skills: ["Pinecone (vector)", "MongoDB", "MySQL"]
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js 14", "Tailwind CSS", "TypeScript"]
  },
  {
    label: "DevOps",
    skills: ["Docker", "Jenkins", "Git", "Render", "Vercel", "AWS"]
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 55, damping: 18 }
  }
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="skills-section container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>Tech</span> Stack
      </motion.h2>

      <motion.div
        ref={ref}
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skillGroups.map((group, idx) => (
          <motion.div key={idx} className="skill-card glass-panel" variants={cardVariants}>
            <p className="skill-group-label">{group.label}</p>
            <div className="skill-pills">
              {group.skills.map((skill, i) => (
                <span key={i} className="tech-pill">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
