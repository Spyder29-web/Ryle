import useReveal from '../hooks/useReveal'
import { GithubIcon } from './icons'

const projects = [
  {
    title: 'Smart Clinic',
    description:
      'An AI-powered clinic appointment system with an intent-aware chatbot that books, reschedules and cancels appointments, plus a real MongoDB-backed booking flow.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'TensorFlow'],
    monogram: 'SC',
    live: 'https://github.com/Spyder29-web',
    github: 'https://github.com/Spyder29-web',
  },
  {
    title: 'Open Municipality',
    description:
      'A Philippine local government portal that puts public services online — e-service requests, announcements and a clean, accessible citizen interface.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    monogram: 'OM',
    live: 'https://github.com/Spyder29-web',
    github: 'https://github.com/Spyder29-web',
  },
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" ref={ref} className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute -left-24 top-1/4 h-80 w-80 animate-blob rounded-full bg-primary/8 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-16 text-center">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Ⅳ — The work
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Live systems,{' '}
            <span className="text-gradient italic">built & working</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-display italic text-muted-foreground">
            Fully functional applications — real databases, real APIs, real
            users.
          </p>
          <div className="hairline mx-auto mt-6 w-32" />
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group reveal flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15"
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-52 w-full cursor-pointer items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700"
              >
                <span className="absolute inset-0 bg-dots opacity-40" />
                <span className="font-display text-8xl font-bold tracking-tight text-white/15 transition-all duration-500 group-hover:scale-110 group-hover:text-white/25">
                  {project.monogram}
                </span>
                <span className="absolute left-5 top-5 h-6 w-6 border-l border-t border-white/40" />
                <span className="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-white/40" />
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-950/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-2.5 rounded-full bg-white/90 px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-600 shadow-lg backdrop-blur">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Live
                  </span>
                </div>
              </a>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-2 font-display text-2xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mb-6 flex-grow leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-center font-display text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
                  >
                    View Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 font-display text-base font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
