import { about, achievements, education } from '../data/profile'
import { Reveal, Section } from './ui'

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 md:grid-cols-[1.5fr_1fr] md:gap-20">
        <div>
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className={i === 0 ? 'text-2xl font-medium leading-snug tracking-tight md:text-[2rem]' : 'mt-6 max-w-[60ch] text-lg leading-relaxed text-muted'}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="space-y-10">
          <Reveal>
            <h3 className="text-sm font-medium text-muted">Education</h3>
            <p className="mt-3 text-lg font-semibold tracking-tight">{education.school}</p>
            <p className="mt-1 text-[15px] leading-relaxed">{education.degree}</p>
            <p className="mt-1 font-mono text-xs text-muted">{education.dates}, {education.place}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="text-sm font-medium text-muted">Recognition</h3>
            <ul className="mt-3 space-y-4">
              {achievements.map((a) => (
                <li key={a.title}>
                  <p className="font-semibold tracking-tight">{a.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">{a.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
