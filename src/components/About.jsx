import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  { cat:'Languages', items:['Python','JavaScript','SQL','TypeScript'] },
  { cat:'Frontend', items:['React','Next.js 14','Vite','TailwindCSS'] },
  { cat:'Backend', items:['FastAPI','Express.js','Flask','Node.js'] },
  { cat:'ML/AI', items:['TensorFlow','PyTorch','scikit-learn','LangChain'] },
  { cat:'Infrastructure', items:['Docker','AWS','Jenkins','MongoDB'] },
];

const CERTS = [
  { icon:'☁️', name:'AWS Cloud Practitioner', issuer:'Amazon Web Services', color:'#FF9900' },
  { icon:'🔷', name:'Azure AI Fundamentals', issuer:'Microsoft (AI-900)', color:'#00B4F1' },
];

const card = {
  hidden:   { opacity:0, y:30 },
  visible:  { opacity:1, y:0, transition:{ type:'spring', stiffness:60, damping:18 } }
};

const About = () => (
  <section id="about" style={{ padding:'8rem 0' }}>
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, amount:0.15 }}>
        <p className="eyebrow">01 — About</p>
        <h2 className="sec-title">Capabilities.</h2>
      </motion.div>

      {/* Top row: bio + certs */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', marginBottom:'1.5rem' }}>

        {/* Bio card */}
        <motion.div
          className="glass scan-hover"
          variants={card} initial="hidden" whileInView="visible" viewport={{ once:true }}
          style={{ padding:'2.5rem', gridColumn:'1' }}
        >
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.68rem', color:'var(--cyan)', letterSpacing:'0.15em', marginBottom:'1.2rem' }}>
            &gt; cat about.txt
          </div>
          <h3 style={{ fontFamily:'var(--font-disp)', fontSize:'1.8rem', color:'var(--white)', marginBottom:'0.8rem', letterSpacing:'0.04em' }}>
            NIIT University
          </h3>
          <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.85rem', color:'var(--cyan)', marginBottom:'0.4rem' }}>
            B.Tech — CSE (AI &amp; ML)
          </p>
          <p style={{ color:'var(--muted)', fontSize:'0.88rem', marginBottom:'1.5rem' }}>2023 — 2027 · Neemrana, Rajasthan</p>
          <p style={{ color:'var(--muted)', fontSize:'0.95rem', lineHeight:'1.8' }}>
            Third-year student actively pursuing the <span style={{ color:'var(--off)' }}>IP 2027 industry placement</span>.
            I specialize in agentic LLM systems, computer vision pipelines, and full-stack deployment — shipping production-grade, demo-able systems over academic theory.
          </p>
        </motion.div>

        {/* Certs + focus */}
        <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
          {CERTS.map((c, i) => (
            <motion.div key={i} className="glass scan-hover" variants={card} initial="hidden" whileInView="visible" viewport={{ once:true }}
              style={{ padding:'1.8rem', display:'flex', alignItems:'center', gap:'1.2rem', flex:1 }}>
              <div style={{ fontSize:'2rem', flexShrink:0 }}>{c.icon}</div>
              <div>
                <div style={{ fontWeight:600, color:'var(--off)', marginBottom:'0.2rem', fontSize:'0.95rem' }}>{c.name}</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:c.color, letterSpacing:'0.08em' }}>{c.issuer}</div>
              </div>
              <div style={{ marginLeft:'auto' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'var(--muted)', border:'1px solid var(--border)', padding:'0.2rem 0.5rem', borderRadius:'4px' }}>
                  VERIFIED
                </span>
              </div>
            </motion.div>
          ))}

          <motion.div className="glass" variants={card} initial="hidden" whileInView="visible" viewport={{ once:true }}
            style={{ padding:'1.8rem', flex:1 }}>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.68rem', color:'var(--cyan)', letterSpacing:'0.12em', marginBottom:'1rem' }}>
              CORE FOCUS AREAS
            </div>
            {['LLM Agentic Pipelines','Computer Vision (CV)','Full-Stack ML Deployment','Autonomous GitHub Agents'].map((f,i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.5rem' }}>
                <span style={{ color:'var(--cyan)', fontFamily:'var(--font-mono)', fontSize:'0.75rem' }}>▶</span>
                <span style={{ color:'var(--muted)', fontSize:'0.9rem' }}>{f}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Skills grid */}
      <motion.div className="glass" variants={card} initial="hidden" whileInView="visible" viewport={{ once:true }}
        style={{ padding:'2.5rem' }}>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.68rem', color:'var(--cyan)', letterSpacing:'0.15em', marginBottom:'2rem' }}>
          &gt; skills --list-all
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'2rem' }}>
          {SKILLS.map(({ cat, items }) => (
            <div key={cat}>
              <div style={{
                fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'var(--muted)',
                letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:'1rem',
                borderBottom:'1px solid var(--border)', paddingBottom:'0.5rem'
              }}>
                {cat}
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.4rem' }}>
                {items.map(s => (
                  <span key={s} className="pill" style={{ fontSize:'0.72rem', justifyContent:'center' }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
