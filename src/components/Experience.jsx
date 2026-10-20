import { experience as xp } from '../data/profile'
import { Chip, Reveal, Section } from './ui'

// All client projects are shown in full. No tabs: visitors must not have to discover hidden content.
export default function Experience() {
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

          <nav aria-label="Projects in this role" className="mt-6 hidden md:block">
            <p className="text-sm text-muted">{xp.projects.length} projects in this role</p>
            <ul className="mt-3 space-y-1">
              {xp.projects.map((p) => (
                <li key={p.id}>
                  <a href={`#xp-${p.id}`} className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-ink">
                    <span className="h-px w-4 bg-line transition-all group-hover:w-6 group-hover:bg-accent" />
                    {p.client}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        <div className="divide-y divide-line [&>*]:py-14 [&>*:first-child]:pt-0 md:[&>*]:py-16">
          {xp.projects.map((project) => (
            <Reveal key={project.id} as="article">
              <div id={`xp-${project.id}`} className="scroll-mt-28">
                <p className="font-mono text-sm text-accent">{project.client}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">{project.name}</h3>
                <ul className="mt-8 space-y-6">
                  {project.points.map((pt) => (
                    <li key={pt} className="grid grid-cols-[18px_1fr] gap-3 text-[15.5px] leading-relaxed md:text-base">
                      <span className="mt-[0.7em] h-px w-3 bg-accent" />
                      <span className="max-w-[68ch] text-ink/85">{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((s) => <Chip key={s}>{s}</Chip>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
