import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { experience as xp } from '../data/profile'
import { Chip, Reveal, Section } from './ui'
import { ease } from './motion-utils'

export default function Experience() {
  const [active, setActive] = useState(xp.projects[0].id)
  const reduce = useReducedMotion()
  const project = xp.projects.find((p) => p.id === active)

  return (
    <Section id="experience" title="Building for airports, end to end.">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-[320px_minmax(0,1fr)] md:gap-16">
        <Reveal className="md:sticky md:top-28 md:self-start">
          <div className="rounded-[20px] border border-line bg-surface p-6 shadow-[var(--shadow)]">
            <p className="text-xl font-semibold tracking-tight">{xp.company}</p>
            <p className="mt-1 text-muted">{xp.role}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Chip>{xp.dates}</Chip>
              <Chip>{xp.place}</Chip>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">{xp.note}</p>
          </div>

          <div role="tablist" aria-label="Client projects" className="no-scrollbar -mx-4 mt-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-col md:px-0">
            {xp.projects.map((p) => {
              const on = p.id === active
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={on}
                  onClick={(e) => { setActive(p.id); e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: reduce ? 'auto' : 'smooth' }) }}
                  className={`relative shrink-0 rounded-2xl px-4 py-3.5 text-left transition-colors md:w-full ${on ? 'text-ink' : 'text-muted hover:text-ink'}`}
                >
                  {on && (
                    <motion.span
                      layoutId="xp-tab"
                      className="absolute inset-0 rounded-2xl border border-line bg-surface-2"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="relative block whitespace-nowrap text-sm font-medium md:whitespace-normal">{p.client}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div role="tabpanel" className="min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease }}
            >
              <p className="font-mono text-sm text-accent">{project.client}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">{project.name}</h3>
              <ul className="mt-8 space-y-6">
                {project.points.map((pt, i) => (
                  <motion.li
                    key={pt}
                    initial={reduce ? false : { opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.08 + i * 0.06, ease }}
                    className="grid grid-cols-[18px_1fr] gap-3 text-[15.5px] leading-relaxed md:text-base"
                  >
                    <span className="mt-[0.7em] h-px w-3 bg-accent" />
                    <span className="max-w-[68ch] text-ink/85">{pt}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-2">
                {project.stack.map((s) => <Chip key={s}>{s}</Chip>)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
