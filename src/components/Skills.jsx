import { skills } from '../data/profile'
import { Reveal, Section } from './ui'
import { spot } from './motion-utils'

const spans = ['md:col-span-4', 'md:col-span-2', 'md:col-span-3', 'md:col-span-3', 'md:col-span-2', 'md:col-span-4']

export default function Skills() {
  return (
    <Section id="skills" title="Toolkit, by where I used it.">
      <div className="grid gap-4 md:grid-cols-6">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.05} className={spans[i]}>
            <div
              onPointerMove={spot}
              className={`spotlight h-full rounded-[20px] border border-line p-6 md:p-7 ${i === 0 ? 'bg-[radial-gradient(120%_120%_at_100%_0%,var(--accent-soft),transparent_55%)] bg-surface' : 'bg-surface'}`}
            >
              <h3 className="text-lg font-semibold tracking-tight">{g.group}</h3>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2.5">
                {g.items.map((s) => (
                  <span key={s} className="text-[15px] text-muted transition-colors hover:text-ink">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
