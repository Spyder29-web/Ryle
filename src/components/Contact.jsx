import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { api } from '../lib/api'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'

const emptyForm = { name: '', email: '', message: '' }

const connectLinks = [
  {
    label: 'Email',
    value: 'arwaynexyrylem@gmail.com',
    icon: <MailIcon className="h-5 w-5" />,
    href: 'mailto:arwaynexyrylem@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'Spyder29-web',
    icon: <GithubIcon className="h-5 w-5" />,
    href: 'https://github.com/Spyder29-web',
  },
  {
    label: 'LinkedIn',
    value: 'Arwayne Xyryle Manzano',
    icon: <LinkedinIcon className="h-5 w-5" />,
    href: 'https://www.linkedin.com/in/arwayne-xyryle-manzano-9b2665404/',
  },
]

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      await api.contact({
        name: form.name,
        email: form.email,
        message: form.message,
      })
      setForm(emptyForm)
      setStatus('sent')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setErrorMsg(err.message || 'Unknown error')
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={ref} className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute -right-24 bottom-0 h-80 w-80 animate-blob-2 rounded-full bg-primary/8 blur-3xl" />

      <div className="mx-auto max-w-2xl">
        <div className="reveal mb-12 text-center">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Ⅵ — Contact
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let's build{' '}
            <span className="text-gradient italic">something great</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md font-display italic text-muted-foreground">
            Have a project in mind? Messages land straight in my inbox — I'll
            get back to you within 24 hours.
          </p>
          <div className="hairline mx-auto mt-6 w-32" />
        </div>

        {status === 'error' && (
          <div className="reveal mb-6 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-500">
            {errorMsg}. If this keeps happening, email me directly at{' '}
            <a className="underline" href="mailto:arwaynexyrylem@gmail.com">
              arwaynexyrylem@gmail.com
            </a>
            .
          </div>
        )}
        {status === 'sent' && (
          <div className="reveal mb-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600">
            Message sent! I'll reply to you within 24 hours.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="reveal relative rounded-3xl border border-border bg-card p-8 shadow-xl shadow-primary/5 sm:p-10"
        >
          <span className="absolute left-5 top-5 h-5 w-5 border-l-2 border-t-2 border-primary/60" />
          <span className="absolute bottom-5 right-5 h-5 w-5 border-b-2 border-r-2 border-primary/60" />

          <div className="mb-5">
            <label htmlFor="name" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 font-sans text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 font-sans text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="mb-7">
            <label htmlFor="message" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 font-sans text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3.5 font-display text-lg font-semibold text-white shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/30 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </form>

        <div className="reveal mt-12">
          <h3 className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            — or connect directly —
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {connectLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="group rounded-2xl border border-border/80 bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary/10">
                  {link.icon}
                </span>
                <p className="font-display text-lg font-semibold text-foreground">
                  {link.label}
                </p>
                <p className="mt-1 break-all font-mono text-[11px] text-muted-foreground">{link.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
