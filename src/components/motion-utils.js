export const ease = [0.16, 1, 0.3, 1]

// Writes pointer position to CSS vars for the .spotlight border. No React re-render.
export function spot(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}
