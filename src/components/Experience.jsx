import useReveal from '../hooks/useReveal'

const timeline = [
  {
    title: 'Software Development Intern',
    org: 'Internship',
    period: null,
    summary:
      'Hands-on experience building real user-facing web features across the stack — from UI components to API endpoints.',
    points: [
      'Developed and maintained front-end interfaces with React',
      'Worked with back-end APIs, databases and version control in a real team environment',
      'Learned debugging, code review and delivery workflows first-hand',
    ],
    tech: ['React', 'JavaScript', 'Git'],
  },
  {
    title: 'Undergraduate Student',
    org: 'Abra State Institute of Science and Technology',
    period: 'Present',
    summary:
      'Pursuing my degree while shipping production-level projects — the systems on this site run on a real MongoDB-backed API.',
    points: [
      'Built Smart Clinic and Open Municipality as live full-stack systems',
      'Explored ML concepts with Python and TensorFlow',
      'Self-driven learning across the modern web stack',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Python'],
  },
  {
    title: 'Full Stack Web Development',
    org: 'Independent learning path',
    period: null,
    summary:
      'Self-taught foundation built through courses, documentation and building things — from static pages to live database-driven apps.',
    points: [
      'JavaScript, React and Tailwind CSS for modern interfaces',
      'Node.js, Express, PHP and MongoDB for back ends',
      'Python with TensorFlow for AI-augmented features',
    ],
    tech: ['Tailwind CSS', 'Express', 'PHP', 'TensorFlow'],
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" ref={ref} className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute right-0 top-16 h-72 w-72 animate-blob-2 rounded-full bg-primary/8 blur-3xl" />

      <div className="mx-auto max-w-4xl">
        <div className="reveal mb-16 text-center">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Ⅲ — The journey
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Where I've{' '}
            <span className="text-gradient italic">been</span>
          </h2>
          <div className="hairline mx-auto mt-6 w-32" />
        </div>

        <div className="relative">
          <div className="absolute left-6 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-primary/50 to-transparent sm:left-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className={`reveal relative flex ${i % 2 === 1 ? 'sm:justify-end' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="absolute left-6 top-4 -translate-x-1/2 rotate-45 border border-primary bg-background p-[5px] shadow-[0_0_14px_rgba(99,102,241,0.4)] sm:left-1/2">
                  <span className="absolute inset-[5px] rotate-45 bg-gradient-to-br from-primary to-accent" />
                </span>

                <div className="ml-14 w-full rounded-2xl border border-border/80 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:ml-0 sm:w-[calc(50%-2.75rem)]">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    {item.period && (
                      <span className="rounded-full border border-primary/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                        {item.period}
                      </span>
                    )}
                  </div>
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    {item.org}
                  </p>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                  <ul className="mb-5 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 rounded-[1px] bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
