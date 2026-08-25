import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const sections = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = sections.map((s) => document.getElementById(s.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-primary via-accent to-primary shadow-sm shadow-primary/20"
        style={{ width: `${progress}%` }}
      />
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-105">
              <span className="font-display text-sm font-bold text-white">AX</span>
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              Arwayne
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group relative font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              >
                {section.label}
                {active === section.id && (
                  <span className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-white shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              Hire me
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="p-2 text-foreground"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border/70 bg-background/95 px-4 py-4 backdrop-blur-xl lg:hidden">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              >
                {section.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-center font-mono text-xs uppercase tracking-[0.25em] text-white shadow-md shadow-primary/25"
            >
              Hire me
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
