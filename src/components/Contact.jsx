import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "badaravikiranreddy@gmail.com",
    href: "mailto:badaravikiranreddy@gmail.com"
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Ravikiranreddybada",
    href: "https://github.com/Ravikiranreddybada"
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ravikiranreddybada",
    href: "https://linkedin.com/in/ravikiranreddybada"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>Let's</span> Build
      </motion.h2>

      <motion.div
        className="contact-wrapper glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="contact-left">
          <p className="contact-eyebrow">Open to 6–12 month internships</p>
          <h3 className="contact-headline">
            Got an interesting problem?<br />Let's work on it.
          </h3>
          <p className="contact-sub">
            I'm actively looking for opportunities in AI/ML engineering, backend systems,
            or full-stack roles. If the work is real and the feedback loop is tight, I'm interested.
          </p>
          <a href="mailto:badaravikiranreddy@gmail.com" className="magnetic-btn contact-cta">
            Send an Email <ArrowUpRight size={18} style={{ marginLeft: 8 }} />
          </a>
        </div>

        <div className="contact-right">
          {links.map(({ icon: Icon, label, value, href }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="contact-link-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
            >
              <Icon size={20} className="contact-link-icon" />
              <div className="contact-link-text">
                <span className="contact-link-label">{label}</span>
                <span className="contact-link-value">{value}</span>
              </div>
              <ArrowUpRight size={16} className="link-arrow" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
