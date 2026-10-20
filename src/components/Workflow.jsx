import { workflow } from '../data/profile'
import { Reveal, Section } from './ui'

export default function Workflow() {
  return (
    <div className="border-y border-line bg-surface">
      <Section title="I build with AI coding agents. I own the design.">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal>
            <p className="max-w-[40ch] text-lg leading-relaxed text-muted">
              Claude Code is my main agent, with Codex, Cursor and Ollama for local models. {workflow.line}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {workflow.tools.map((t) => (
                <span key={t} className="rounded-full bg-accent-soft px-3.5 py-1.5 text-sm font-medium text-accent">{t}</span>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {workflow.steps.map((s, i) => (
              <Reveal key={s.verb} delay={i * 0.07}>
                <p className="text-2xl font-semibold tracking-tight">{s.verb}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
