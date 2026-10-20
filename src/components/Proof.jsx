import { proof, workflow } from '../data/profile'
import { Reveal } from './ui'

const stack = ['Python', 'LangGraph', 'MCP', 'FastAPI', 'Kafka', 'PostgreSQL', 'React Three Fiber', 'Gemini', 'Claude', 'MediaMTX', 'WebRTC', 'LightGBM', 'Docker', 'Cloud Run', ...workflow.tools]

export default function Proof() {
  return (
    <>
      <div className="relative overflow-hidden border-y border-line py-5" aria-label="Tools I use">
        <div className="marquee-track flex w-max gap-10 pr-10">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} aria-hidden={i >= stack.length} className="whitespace-nowrap font-mono text-sm text-muted">
              <span className="mr-10 text-accent">/</span>{s}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
      </div>

      <section className="mx-auto w-full max-w-[1240px] px-4 py-20 md:px-8 md:py-24" aria-label="Numbers">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-5 md:gap-x-8">
          {proof.map((p, i) => (
            <Reveal key={p.value} delay={i * 0.06} className={i === 4 ? 'col-span-2 md:col-span-1' : ''}>
              <div className="font-mono text-3xl font-medium tracking-tight md:text-[2.6rem]">{p.value}</div>
              <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-muted">{p.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
