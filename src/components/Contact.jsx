import { useState } from 'react'
import { ArrowUpRight, Check, Copy, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { person } from '../data/profile'
import { LinkButton, Reveal } from './ui'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard blocked; mailto still works */ }
  }

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl" />
      <div className="relative mx-auto w-full max-w-[1240px] px-4 pb-10 pt-24 md:px-8 md:pt-32">
        <Reveal>
          <h2 className="max-w-[16ch] text-[clamp(2.5rem,6.5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            Building something that has to be right<span className="text-accent">?</span>
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
            B.Tech 2027 batch. Internship runs until 15 Jan 2027. Open to AI / ML, GenAI and forward-deployed roles, Bengaluru first.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <LinkButton href={`mailto:${person.email}`} primary icon={ArrowUpRight}>Email me</LinkButton>
            <button
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:bg-surface-2 hover:text-ink active:scale-[0.98]"
            >
              {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
              <span aria-live="polite">{copied ? 'Copied' : person.email}</span>
            </button>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col-reverse items-start justify-between gap-6 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {person.name}</p>
          <div className="flex items-center gap-5">
            <a href={person.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink"><GithubLogo size={17} />GitHub</a>
            <a href={person.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink"><LinkedinLogo size={17} />LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
