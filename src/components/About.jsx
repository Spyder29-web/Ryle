import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const highlights = [
  'Full Stack Web Developer focused on practical, usable systems',
  'IT student at Abra State Institute of Science and Technology',
  'AI-augmented apps with TensorFlow for intent classification',
  'Government-style portals with clean, accessible UIs',
  'Cisco-certified — Operating Systems Basics & Prompt Engineering',
]

export default function About() {
  const ref = useReveal()
  const [imgOk, setImgOk] = useState(true)

  return (
    <section id="about" ref={ref} className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute right-0 top-24 h-72 w-72 animate-blob rounded-full bg-primary/8 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="reveal relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rotate-3 rounded-[2rem] border border-primary/20" />
          <div className="relative animate-float-slow rounded-[2rem] border border-border bg-white p-2 shadow-2xl shadow-primary/10">
            <div className="relative aspect-square overflow-hidden rounded-[calc(2rem-10px)] bg-muted">
              <span className="absolute left-3 top-3 z-10 h-6 w-6 border-l-2 border-t-2 border-primary" />
              <span className="absolute bottom-3 right-3 z-10 h-6 w-6 border-b-2 border-r-2 border-primary" />
              {imgOk ? (
                <img
                  src="/profile.jpg"
                  alt="Arwayne Xyryle P. Manzano"
                  onError={() => setImgOk(false)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <span className="font-display text-7xl font-bold text-primary">AX</span>
                </div>
              )}
            </div>
          </div>
          <div className="absolute -right-6 top-8 animate-float rounded-xl border border-border bg-white px-5 py-3 shadow-xl shadow-primary/5">
            <p className="font-display text-2xl font-bold text-primary">2+</p>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              live systems
            </p>
          </div>
          <div className="absolute -left-6 bottom-10 animate-float rounded-xl border border-border bg-white px-5 py-3 shadow-xl shadow-primary/5" style={{ animationDelay: '1.5s' }}>
            <p className="font-display text-2xl font-bold text-accent">∞</p>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              learning
            </p>
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: '150ms' }}>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Ⅰ — About me
          </p>
          <h2 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            A developer devoted to{' '}
            <span className="text-gradient italic">craftsmanship</span>
          </h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            I'm Arwayne Xyryle P. Manzano — a Full Stack Web Developer and IT
            student at the Abra State Institute of Science and Technology. My
            passion is building web applications that combine solid engineering
            with a touch of AI.
          </p>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            From appointment systems that understand intent to portals that put
            public services online — I ship real, working software, not just
            mockups.
          </p>

          <ul className="mb-10 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-4 text-muted-foreground">
                <span className="mt-1.5 h-2 w-2 rotate-45 rounded-[2px] bg-gradient-to-br from-primary to-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="group flex items-center gap-3 font-display text-lg font-medium italic text-primary transition-colors hover:text-accent"
            >
              let's build something
              <span className="font-sans transition-transform group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
