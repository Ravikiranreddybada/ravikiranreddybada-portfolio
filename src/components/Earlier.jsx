import { ArrowUpRight } from '@phosphor-icons/react'
import { earlier } from '../data/profile'
import { Reveal, Section } from './ui'

export default function Earlier() {
  return (
    <Section title="Earlier builds, still live." className="!pt-4">
      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {earlier.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07} className="w-[82%] shrink-0 snap-start md:w-auto">
            <a href={p.live} target="_blank" rel="noreferrer" className="group block">
              <div className="overflow-hidden rounded-[20px] border border-line bg-surface-2">
                <img
                  src={p.shot}
                  alt={`${p.name} live app screenshot`}
                  loading="lazy"
                  width="1440"
                  height="900"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.kind}</p>
                  <p className="mt-2 font-mono text-xs text-muted">{p.stack.join(', ')}</p>
                </div>
                <ArrowUpRight size={18} className="mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
