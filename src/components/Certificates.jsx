import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const filters = ['All', 'Certificate', 'Award', 'Webinar']

const certificates = [
  {
    title: 'Operating Systems Basics',
    issuer: 'Cisco Networking Academy · DICT-ITU DTC Initiative',
    date: 'January 2026',
    category: 'Certificate',
    image: '/certificates/operating-systems-basics.png',
    url: null,
  },
  {
    title: 'Prompt Engineering Applications',
    issuer: 'Cisco Networking Academy',
    date: 'January 2026 · Code 9739188',
    category: 'Certificate',
    image: '/certificates/prompt-engineering.png',
    url: 'https://www.netacad.com/certificates/?issuanceId=482c202e-cd8e-41f2-a665-8464e409c61f',
  },
]

export default function Certificates() {
  const ref = useReveal()
  const [active, setActive] = useState('All')

  const visible =
    active === 'All'
      ? certificates
      : certificates.filter((c) => c.category === active)

  return (
    <section id="certificates" ref={ref} className="relative bg-muted/60 px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-14 text-center">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Ⅴ — Recognition
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Awards &{' '}
            <span className="text-gradient italic">certificates</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-display italic text-muted-foreground">
            Professional certifications and learning experiences that have
            shaped my journey.
          </p>
          <div className="hairline mx-auto mt-6 w-32" />
        </div>

        <div className="reveal mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-6 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-all ${
                active === filter
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25'
                  : 'border border-border bg-white text-muted-foreground hover:border-primary/50 hover:text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((cert) => (
            <div
              key={cert.title}
              className="reveal group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div
                className={`relative flex h-52 items-center justify-center overflow-hidden border-b border-border/70 bg-slate-100 p-4 ${cert.url ? 'cursor-pointer' : ''}`}
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-indigo-950/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 hover:opacity-100"
                  >
                    <span className="flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-600 shadow-lg backdrop-blur">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Verify
                    </span>
                  </a>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-4 self-start rounded-full border border-primary/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {cert.category}
                </span>
                <h3 className="mb-2 flex-1 font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {cert.title}
                </h3>
                <p className="mb-1 text-sm font-medium text-foreground/80">
                  {cert.issuer}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
