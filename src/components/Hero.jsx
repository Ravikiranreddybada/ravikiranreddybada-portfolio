import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ArrowDownRight, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { person } from '../data/profile'
import { LinkButton } from './ui'
import { ease } from './motion-utils'

const nameLines = ['Bada Ravi Kiran', 'Reddy']

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80])
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.06])

  const enter = (i) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: 0.1 + i * 0.09, ease },
  })

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <div className="dot-field pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid min-h-[100dvh] w-full max-w-[1240px] items-center gap-12 px-4 pb-16 pt-28 md:grid-cols-[1.25fr_1fr] md:gap-10 md:px-8 md:pt-24">
        <div>
          <motion.p {...enter(0)} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-3 pr-4 text-[13px] text-muted backdrop-blur">
            <span className="relative grid size-2 place-items-center">
              <span className="pulse-ring absolute size-2 rounded-full bg-accent" />
              <span className="size-2 rounded-full bg-accent" />
            </span>
            Open to 2027 AI / ML roles
          </motion.p>

          <h1 className="text-[clamp(2.75rem,7vw,5.6rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            {nameLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.1, ease }}
                >
                  {i === 1 ? <>{line}<span className="text-accent">.</span></> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p {...enter(3)} className="mt-7 max-w-[34ch] text-lg leading-relaxed text-muted md:text-xl">
            AI engineer. I build streaming pipelines, grounded LLM agents and 3D digital twins for airport clients.
          </motion.p>

          <motion.div {...enter(4)} className="mt-9 flex flex-wrap items-center gap-3">
            <LinkButton href="#work" primary icon={ArrowDownRight}>View work</LinkButton>
            <a href={person.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors hover:bg-surface-2 hover:text-ink">
              <GithubLogo size={19} />
            </a>
            <a href={person.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors hover:bg-surface-2 hover:text-ink">
              <LinkedinLogo size={19} />
            </a>
          </motion.div>
        </div>

        <motion.figure
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.25, ease }}
          className="mx-auto w-full max-w-[420px] md:justify-self-end"
        >
          <div className="overflow-hidden rounded-[20px] border border-line bg-surface-2 shadow-[var(--shadow)]">
            <motion.img
              src={person.photo}
              alt="Portrait of Bada Ravi Kiran Reddy"
              width="880"
              height="1100"
              fetchPriority="high"
              style={{ y: photoY, scale: photoScale }}
              className="aspect-[4/5] w-full object-cover object-[50%_35%]"
            />
          </div>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-sm">
            <span className="font-medium">{person.title}</span>
            <span className="font-mono text-xs text-muted">Bengaluru</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
