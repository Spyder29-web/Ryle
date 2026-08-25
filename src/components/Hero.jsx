import { useState } from 'react'
import useTypewriter from '../hooks/useTypewriter'

const stats = [
  { value: '12+', label: 'Technologies' },
  { value: '2', label: 'Featured Apps' },
  { value: '2', label: 'Certifications' },
  { value: '∞', label: 'Curiosity' },
]

export default function Hero() {
  const [imgOk, setImgOk] = useState(true)
  const typed = useTypewriter(['Arwayne Xyryle P. Manzano'])

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16">
      <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_40%,black,transparent)]" />

      <div className="absolute -left-32 top-24 h-96 w-96 animate-blob rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 top-1/3 h-96 w-96 animate-blob-2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-primary">
          — Full Stack Developer · Philippines —
        </p>

        <div className="relative mx-auto mb-10 h-44 w-44 md:h-52 md:w-52">
          <span className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-primary/40 via-transparent to-accent/40 blur-md" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-2 border-white bg-muted shadow-2xl shadow-primary/20 ring-1 ring-border">
            {imgOk ? (
              <img
                src="/profile.jpg"
                alt="Arwayne Xyryle P. Manzano"
                onError={() => setImgOk(false)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <span className="font-display text-5xl font-bold text-primary">AX</span>
              </div>
            )}
          </div>
        </div>

        <h1 className="mb-6 text-balance font-display text-5xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          <span className="text-muted-foreground">Hi, I'm</span>{' '}
          <span className="text-gradient">{typed}</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
          Crafting intelligent full-stack systems — appointment platforms with
          intent-aware AI and public service portals, built with precision and
          care.
        </p>

        <div className="mx-auto mb-10 h-px w-40 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-primary to-accent px-9 py-3.5 font-display text-lg font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/35"
          >
            View the Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-white px-9 py-3.5 font-display text-lg font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            Get In Touch
          </a>
        </div>

        <div className="mx-auto mt-14 flex max-w-2xl items-center justify-between gap-2">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-1 items-center justify-center gap-2">
              {i > 0 && <span className="hidden h-8 w-px bg-border sm:block" />}
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground md:text-[10px]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a href="#about" aria-label="Scroll to About" className="group mt-12 inline-flex p-2">
          <svg
            className="h-5 w-5 animate-bounce text-primary/50 transition-colors group-hover:text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
