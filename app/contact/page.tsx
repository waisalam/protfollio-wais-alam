'use client'

import Navigation from '@/components/navigation'
import { useState } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/waisalam',
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/wais-alam',
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.723-2.004 1.422-.103.249-.129.597-.129.946v5.437h-3.541s.047-8.842 0-9.769h3.541v1.381c.43-.663 1.198-1.608 2.921-1.608 2.134 0 3.732 1.393 3.732 4.389v5.607zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.968.77-1.706 1.958-1.706 1.187 0 1.915.738 1.937 1.706 0 .948-.75 1.706-1.98 1.706zm1.581 11.597H3.635V9.683h3.283v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/waisalam121',
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s-1.5 2.5-7 4c2.5-1.5 3.5-4 3.5-4" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'waisalam9523@gmail.com',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    // For now, just show a success message
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
            GET IN TOUCH
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">SEND A MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  required
                  className="w-full px-4 py-3 bg-card border-2 border-foreground focus:outline-none focus:border-primary transition-fast"
                  placeholder="Your name"
                />
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
                  required
                  className="w-full px-4 py-3 bg-card border-2 border-foreground focus:outline-none focus:border-primary transition-fast"
                  placeholder="your@email.com"
                />
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
                  required
                  className="w-full px-4 py-3 bg-card border-2 border-foreground focus:outline-none focus:border-primary transition-fast"
                  placeholder="Project inquiry"
                />
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
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-card border-2 border-foreground focus:outline-none focus:border-primary transition-fast resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitted && (
                <div className="p-4 bg-primary text-primary-foreground border-2 border-primary font-bold tracking-wide">
                  ✓ MESSAGE SENT! I&apos;LL GET BACK TO YOU SOON.
                </div>
              )}

              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase transition-fast hover:px-8"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-12">CONTACT INFO</h2>

            <div className="space-y-12">
              <div className="border-l-4 border-primary pl-6">
                <p className="text-primary font-bold tracking-widest text-sm mb-2">EMAIL</p>
                <a
                  href="mailto:hello@waisalam.com"
                  className="text-lg text-foreground hover:text-primary transition-fast"
                >
                  waisalam9523@gmail.com
                </a>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <p className="text-primary font-bold tracking-widest text-sm mb-2">LOCATION</p>
                <p className="text-lg text-foreground">Ranchi , jharkhand , India</p>
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
                      className="text-foreground hover:text-primary transition-fast text-lg"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-4 border-foreground p-8 bg-card">
                <p className="text-lg font-bold tracking-wide leading-relaxed">
                  Available for freelance projects and full-time opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-foreground/70 text-sm font-mono">
          <p>© 2024 WAISALAM. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  )
}
