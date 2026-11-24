import { ArrowUpRight } from '@phosphor-icons/react'
import { person } from '../data/profile'
import { Reveal, Section } from './ui'

const graphBase = 'https://github-readme-activity-graph.vercel.app/graph?username=Ravikiranreddybada&line=1457d9&point=1457d9&area=true&hide_border=true&hide_title=true'
const lightGraph = `${graphBase}&bg_color=f3f6f8&color=566171&area_color=1457d9`
const darkGraph = `${graphBase}&bg_color=0b0f15&color=98a5b5&line=71a2ff&point=edf2f7&area_color=71a2ff`

export default function Contributions() {
  return (
    <Section title="Code leaves a trail.">
      <Reveal>
        <a
          href={person.links.github}
          target="_blank"
          rel="noreferrer"
          className="group block overflow-hidden rounded-[20px] border border-line bg-surface p-3 shadow-[var(--shadow)] md:p-5"
          aria-label="View Ravi Kiran's GitHub contribution activity"
        >
          <img
            src={lightGraph}
            alt="GitHub contribution activity graph for Ravi Kiran Reddy"
            width="1200"
            height="360"
            loading="lazy"
            className="w-full dark:hidden"
          />
          <img
            src={darkGraph}
            alt="GitHub contribution activity graph for Ravi Kiran Reddy"
            width="1200"
            height="360"
            loading="lazy"
            className="hidden w-full dark:block"
          />
          <span className="mt-3 inline-flex items-center gap-2 px-2 pb-1 text-sm font-medium text-muted transition-colors group-hover:text-ink">
            View the work behind the graph
            <ArrowUpRight size={15} weight="bold" />
          </span>
        </a>
      </Reveal>
    </Section>
  )
}
