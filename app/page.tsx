'use client'

import Navigation from '@/components/navigation'
import Link from 'next/link'

export default function Home() {

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter mb-6">
                FULL-STACK<br />
                DEVELOPER<br />
                & AI ENGINEER
              </h1>
            </div>

            <div className="flex gap-6 mb-12 max-w-2xl">
              <div className="border-l-4 border-primary pl-6">
                <p className="text-lg md:text-xl font-bold tracking-wide mb-2">TECH</p>
                <p className="text-sm text-foreground/80">Next.js, React, Python, TypeScript, PyTorch, Neon DB</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <p className="text-lg md:text-xl font-bold tracking-wide mb-2">PASSION</p>
                <p className="text-sm text-foreground/80">AI product engineering & building ML models</p>
              </div>
            </div>

            <div className="flex gap-6">
              <Link
                href="/work"
                className="px-8 py-4 bg-foreground text-background font-bold tracking-wide uppercase text-sm transition-fast hover:px-10"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-foreground text-foreground font-bold tracking-wide uppercase text-sm transition-fast hover:bg-foreground hover:text-background"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Powerlifter Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-none">
                POWERLIFTER<br />
                ATHLETE
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-lg">
                Beyond code, I&apos;m committed to the iron. Competing in powerlifting competitions with a focus on strength, discipline, and pushing limits. The same mentality I bring to engineering.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wide uppercase text-sm transition-fast hover:px-10"
              >
                More About Me
              </Link>
            </div>

            <div className="border-4 border-foreground p-8 bg-card">
              <div className="space-y-6">
                <div className="border-b-2 border-foreground pb-6">
                  <p className="text-primary font-bold text-sm tracking-widest mb-2">SQUAT</p>
                  <p className="text-4xl font-bold tracking-tight">365 LBS</p>
                </div>
                <div className="border-b-2 border-foreground pb-6">
                  <p className="text-primary font-bold text-sm tracking-widest mb-2">BENCH PRESS</p>
                  <p className="text-4xl font-bold tracking-tight">275 LBS</p>
                </div>
                <div>
                  <p className="text-primary font-bold text-sm tracking-widest mb-2">DEADLIFT</p>
                  <p className="text-4xl font-bold tracking-tight">495 LBS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tighter mb-16">TECH STACK</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Next.js', 'React', 'Python', 'TypeScript', 'Tailwind', 'Prisma', 'Neon', 'Pandas', 'NumPy', 'PyTorch'].map((skill) => (
              <div key={skill} className="border-2 border-foreground p-6 bg-card hover:bg-foreground hover:text-background transition-fast text-center">
                <p className="font-bold tracking-wide">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
            LET&apos;S BUILD<br />
            SOMETHING GREAT
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s collaborate on something meaningful.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-6 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-base transition-fast hover:px-14"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-foreground/70 text-sm font-mono">
          <p>© 2024 WAISALAM. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  )
}
