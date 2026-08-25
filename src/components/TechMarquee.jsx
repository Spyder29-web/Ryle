const techs = [
  'React',
  'JavaScript',
  'Node.js',
  'Express',
  'MongoDB',
  'Python',
  'TensorFlow',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'PHP',
  'SQL',
  'Git',
  'Mongoose',
]

export default function TechMarquee() {
  const row = [...techs, ...techs]

  return (
    <div className="relative overflow-hidden border-y border-border/70 bg-card/50 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            {tech}
            <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
          </span>
        ))}
      </div>
    </div>
  )
}
