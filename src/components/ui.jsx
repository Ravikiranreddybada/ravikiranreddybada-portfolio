import { motion, useReducedMotion } from 'motion/react'

import { ease } from './motion-utils'

// Fade-up on enter. Collapses to static under reduced motion.
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const M = motion[as]
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </M>
  )
}

export function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-[1240px] px-4 py-20 md:px-8 md:py-28 ${className}`}>
      {title && (
        <Reveal as="h2" className="mb-10 max-w-[18ch] text-3xl font-semibold leading-[1.05] tracking-tight md:mb-14 md:text-5xl">
          {title}
        </Reveal>
      )}
      {children}
    </section>
  )
}

export function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-2.5 py-1 font-mono text-[11.5px] text-muted">
      {children}
    </span>
  )
}

export function LinkButton({ href, children, primary = false, icon: Icon, ...rest }) {
  const base =
    'group inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-[transform,background-color,color] duration-300 active:scale-[0.98]'
  const tone = primary
    ? 'bg-accent text-accent-ink hover:-translate-y-0.5'
    : 'border border-line text-ink hover:bg-surface-2'
  return (
    <a href={href} className={`${base} ${tone}`} {...rest}>
      {children}
      {Icon && <Icon size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />}
    </a>
  )
}
