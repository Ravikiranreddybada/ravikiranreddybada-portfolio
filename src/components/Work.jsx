import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, GithubLogo, Plus } from '@phosphor-icons/react'
import { work } from '../data/profile'
import { Chip, Reveal, Section } from './ui'
import { ease, spot } from './motion-utils'

function Shot({ href, className, children }) {
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>
  ) : (
    <div className={className}>{children}</div>
  )
}

function Card({ p, wide }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <article
      onPointerMove={spot}
      className={`spotlight group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-[var(--shadow)] ${wide ? 'md:grid md:grid-cols-[1fr_1.15fr]' : ''}`}
    >
      {p.shot ? (
        <Shot href={p.live} className={`relative block overflow-hidden bg-surface-2 ${wide ? 'md:order-2 md:h-full' : ''}`}>
          <img
            src={p.shot}
            alt={`${p.name} app screenshot`}
            loading="lazy"
            width="1440"
            height="900"
            className={`w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] ${wide ? 'aspect-[16/10] md:aspect-auto md:h-full' : 'aspect-[16/10]'}`}
          />
        </Shot>
      ) : null}

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{p.name}</h3>
            <p className="mt-1 text-sm text-muted">{p.kind}</p>
          </div>
          <div className="flex shrink-0 gap-1.5">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`} className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:text-ink">
                <GithubLogo size={16} />
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} live`} className="grid size-9 place-items-center rounded-full bg-accent text-accent-ink transition-transform hover:-translate-y-0.5">
                <ArrowUpRight size={16} weight="bold" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-5 max-w-[60ch] leading-relaxed text-ink/85">{p.blurb}</p>

        <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-6">
          {p.metrics.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-xl font-medium tracking-tight md:text-2xl">{m.value}</dt>
              <dd className="mt-1.5 text-xs leading-snug text-muted">{m.label}</dd>
            </div>
          ))}
        </dl>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-7 inline-flex items-center gap-2 self-start text-sm font-medium text-ink"
        >
          <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }} className="grid size-6 place-items-center rounded-full border border-line">
            <Plus size={12} weight="bold" />
          </motion.span>
          {open ? 'Hide details' : 'How it works'}
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease }}
              className="overflow-hidden"
            >
              <ul className="space-y-2.5 pt-5 text-sm leading-relaxed text-muted">
                {p.details.map((d) => (
                  <li key={d} className="grid grid-cols-[14px_1fr] gap-2">
                    <span className="mt-[0.65em] h-px w-2.5 bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-7">
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s) => <Chip key={s}>{s}</Chip>)}
          </div>
          <p className="mt-4 text-xs text-muted">{p.note}</p>
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <Section id="work" title="Selected work.">
      <div className="grid gap-5 md:grid-cols-2">
        {work.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08} className={i === 0 ? 'md:col-span-2' : ''}>
            <Card p={p} wide={i === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
