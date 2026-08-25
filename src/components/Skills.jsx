import useReveal from '../hooks/useReveal'

const categories = [
  {
    numeral: 'Ⅰ',
    label: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    numeral: 'Ⅱ',
    label: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'Python'],
  },
  {
    numeral: 'Ⅲ',
    label: 'Database',
    items: ['MongoDB', 'Mongoose', 'SQL'],
  },
  {
    numeral: 'Ⅳ',
    label: 'AI & Tools',
    items: ['TensorFlow', 'Git', 'GitHub', 'Vite'],
  },
]

const proficiency = [
  { skill: 'HTML', level: 95 },
  { skill: 'JavaScript', level: 90 },
  { skill: 'React', level: 88 },
  { skill: 'Python', level: 85 },
  { skill: 'SQL', level: 84 },
  { skill: 'MongoDB', level: 82 },
  { skill: 'PHP', level: 80 },
  { skill: 'TensorFlow', level: 70 },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" ref={ref} className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute -left-32 top-1/3 h-80 w-80 animate-blob rounded-full bg-accent/8 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-16 text-center">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Ⅱ — The craft
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Skills &{' '}
            <span className="text-gradient italic">proficiency</span>
          </h2>
          <div className="hairline mx-auto mt-6 w-32" />
        </div>

        <div className="reveal mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group relative rounded-2xl border border-border/80 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-5 flex items-baseline gap-3">
                <span className="font-display text-2xl font-bold text-primary">{cat.numeral}</span>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10" style={{ transitionDelay: '150ms' }}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Core proficiency
            </h3>
            <span className="font-display text-sm italic text-muted-foreground">
              measured by years of practice
            </span>
          </div>
          <div className="grid gap-x-12 gap-y-7 sm:grid-cols-2">
            {proficiency.map((item) => (
              <div key={item.skill}>
                <div className="mb-2.5 flex items-baseline justify-between">
                  <span className="font-display text-base font-semibold text-foreground">
                    {item.skill}
                  </span>
                  <span className="font-mono text-xs text-primary">{item.level}%</span>
                </div>
                <div className="h-[3px] overflow-hidden rounded-full bg-muted">
                  <div
                    className="progress-bar h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    style={{ '--w': `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
