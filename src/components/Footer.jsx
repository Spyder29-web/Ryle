import { useEffect, useState } from 'react'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/Spyder29-web', icon: <GithubIcon className="h-5 w-5" /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arwayne-xyryle-manzano-9b2665404/', icon: <LinkedinIcon className="h-5 w-5" /> },
  { label: 'Email', href: 'mailto:arwaynexyrylem@gmail.com', icon: <MailIcon className="h-5 w-5" /> },
]

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="relative overflow-hidden border-t border-border/70 bg-card/50 backdrop-blur">
        <div className="absolute -top-28 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
            <div>
              <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
                <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
                  <span className="font-display text-xs font-bold text-white">AX</span>
                </span>
              </div>
              <p className="max-w-xs font-display italic text-muted-foreground">
                Full stack web developer building smart, working digital
                experiences.
              </p>
            </div>

            <div>
              <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                Navigation
              </h4>
              <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                Connect
              </h4>
              <div className="flex justify-center gap-3 md:justify-start">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hairline mb-6" />

          <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
            <p>
              © {new Date().getFullYear()} Arwayne Xyryle P. Manzano. All rights reserved.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em]">
              crafted with <span className="text-primary">♥</span> · React + Tailwind + Node
            </p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-primary shadow-xl shadow-primary/10 backdrop-blur transition-all hover:scale-110 hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  )
}
