import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { List, Moon, Sun, X } from '@phosphor-icons/react'
import { person } from '../data/profile'

const items = [
  ['Experience', '#experience'],
  ['Work', '#work'],
  ['Skills', '#skills'],
  ['About', '#about'],
]

function getTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export default function Nav() {
  const [theme, setTheme] = useState(getTheme)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* storage blocked */ }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div className="h-[2px] origin-left bg-accent" style={{ scaleX: progress }} />
      <nav className="mx-auto mt-3 flex h-14 w-[calc(100%-2rem)] max-w-[1240px] items-center justify-between rounded-full border border-line bg-bg/75 pl-5 pr-2 backdrop-blur-xl md:w-[calc(100%-4rem)]">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          ravi<span className="text-accent">.</span>kiran
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {items.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:text-ink">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={`mailto:${person.email}`}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-transform active:scale-[0.98] sm:inline-flex"
          >
            Email me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full text-ink md:hidden"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-4 mt-2 rounded-[20px] border border-line bg-bg/95 p-2 backdrop-blur-xl md:hidden"
          >
            {[...items, ['Contact', '#contact']].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-base">
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
