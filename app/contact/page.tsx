'use client'

import Navigation from '@/components/navigation'
import { useState } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/waisalam',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/wais-alam',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.723-2.004 1.422-.103.249-.129.597-.129.946v5.437h-3.541s.047-8.842 0-9.769h3.541v1.381c.43-.663 1.198-1.608 2.921-1.608 2.134 0 3.732 1.393 3.732 4.389v5.607zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.968.77-1.706 1.958-1.706 1.187 0 1.915.738 1.937 1.706 0 .948-.75 1.706-1.98 1.706zm1.581 11.597H3.635V9.683h3.283v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/waisalam121',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

type FormData = { name: string; email: string; subject: string; message: string }
type FormErrors = Partial<FormData>

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim() || data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters'
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Valid email required'
  if (!data.subject.trim() || data.subject.trim().length < 3) errors.subject = 'Subject must be at least 3 characters'
  if (!data.message.trim() || data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters'
  return errors
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (touched[name as keyof FormData]) {
      const newErrors = validate({ ...formData, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormData] }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const newErrors = validate(formData)
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormData] }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, subject: true, message: true }
    setTouched(allTouched)
    const newErrors = validate(formData)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setStatus('loading')
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTouched({})
        setErrors({})
      } else {
        setStatus('error')
        setServerError(data.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setServerError('Network error. Please check your connection and try again.')
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 bg-card border-2 focus:outline-none transition-colors ${
      touched[field] && errors[field] ? 'border-red-500' : 'border-foreground focus:border-primary'
    }`

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
            GET IN TOUCH
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Message me your project — I&apos;ll send a custom demo or proposal within 24 hours. No calls needed.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">SEND A MESSAGE</h2>

            {status === 'success' ? (
              <div className="border-4 border-primary p-8 bg-primary/5">
                <p className="text-2xl font-bold tracking-tight mb-3">MESSAGE RECEIVED</p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Thanks for reaching out. I&apos;ll review your project and get back to you within 24 hours with a custom response or demo.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm font-bold tracking-widest uppercase text-primary border-b-2 border-primary pb-0.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold tracking-widest mb-3 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('name')}
                    placeholder="Your name"
                    disabled={status === 'loading'}
                  />
                  {touched.name && errors.name && (
                    <p className="mt-2 text-xs text-red-500 font-mono">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold tracking-widest mb-3 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('email')}
                    placeholder="your@email.com"
                    disabled={status === 'loading'}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-2 text-xs text-red-500 font-mono">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold tracking-widest mb-3 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('subject')}
                    placeholder="I need a chatbot for my SaaS..."
                    disabled={status === 'loading'}
                  />
                  {touched.subject && errors.subject && (
                    <p className="mt-2 text-xs text-red-500 font-mono">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold tracking-widest mb-3 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={6}
                    className={`${inputClass('message')} resize-none`}
                    placeholder="Describe your project, budget range, and timeline..."
                    disabled={status === 'loading'}
                  />
                  {touched.message && errors.message && (
                    <p className="mt-2 text-xs text-red-500 font-mono">{errors.message}</p>
                  )}
                </div>

                {status === 'error' && (
                  <div className="p-4 border-2 border-red-500 bg-red-500/10 text-red-500 text-sm font-mono">
                    {serverError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase transition-all hover:px-8 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      SENDING...
                    </>
                  ) : (
                    'SEND MESSAGE'
                  )}
                </button>

                <p className="text-xs text-foreground/50 font-mono text-center">
                  I respond within 24 hours. No spam, no calls.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-12">CONTACT INFO</h2>

            <div className="space-y-10">
              <div className="border-l-4 border-primary pl-6">
                <p className="text-primary font-bold tracking-widest text-sm mb-2">EMAIL</p>
                <a href="mailto:waisalam9523@gmail.com" className="text-lg text-foreground hover:text-primary transition-colors">
                  waisalam9523@gmail.com
                </a>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <p className="text-primary font-bold tracking-widest text-sm mb-2">LOCATION</p>
                <p className="text-lg text-foreground">Ranchi, Jharkhand, India</p>
                <p className="text-sm text-foreground/60 mt-1">Available for remote work worldwide</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <p className="text-primary font-bold tracking-widest text-sm mb-2">RESPONSE TIME</p>
                <p className="text-lg text-foreground">Within 24 hours</p>
                <p className="text-sm text-foreground/60 mt-1">Async-first — I&apos;ll send a custom demo or plan</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <p className="text-primary font-bold tracking-widest text-sm mb-4">FOLLOW</p>
                <div className="flex gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-4 border-foreground p-8 bg-card">
                <p className="text-primary font-bold tracking-widest text-sm mb-3">HOW IT WORKS</p>
                <ol className="space-y-3 text-foreground/80 leading-relaxed">
                  <li className="flex gap-3"><span className="font-bold text-primary">01</span>You describe your project</li>
                  <li className="flex gap-3"><span className="font-bold text-primary">02</span>I reply with a custom demo or plan within 24h</li>
                  <li className="flex gap-3"><span className="font-bold text-primary">03</span>We agree on scope + price, then I build</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-foreground/70 text-sm font-mono">
          <p>© 2025 WAISALAM. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  )
}
