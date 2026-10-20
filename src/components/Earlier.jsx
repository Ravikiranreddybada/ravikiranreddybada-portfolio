import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { earlier } from '../data/profile'
import { Reveal } from './ui'

// Older projects: lowest priority, compact, no screenshots.
export default function Earlier() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 pb-20 md:px-8 md:pb-28">
      <Reveal as="h2" className="text-lg font-semibold tracking-tight text-muted">Older projects</Reveal>
      <ul className="mt-6 grid gap-x-10 border-t border-line md:grid-cols-3">
        {earlier.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 0.05} className="border-b border-line py-5 md:border-b-0">
            <div className="flex items-center justify-between gap-3">
              <a href={p.live} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 font-semibold tracking-tight hover:text-accent">
                {p.name}
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`} className="text-muted hover:text-ink">
                <GithubLogo size={16} />
              </a>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.kind}</p>
            <p className="mt-2 font-mono text-xs text-muted">{p.stack.join(', ')}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
