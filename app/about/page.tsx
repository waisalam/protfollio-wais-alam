'use client'

import Navigation from '@/components/navigation'

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
            WAISALAM
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl">
            Full-stack developer, AI engineer, and powerlifter. I build products that matter and push limits in the gym.
          </p>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12">DEVELOPER</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                I specialize in building modern web applications with Next.js and React. My focus is on creating scalable, performant solutions that solve real problems.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                With expertise in Python, machine learning, and AI product engineering, I bring full-stack capabilities to every project. I&apos;m passionate about creating AI-powered applications that push the boundaries of what&apos;s possible.
              </p>
            </div>
            <div>
              <div className="border-4 border-foreground p-8 bg-card">
                <h3 className="text-primary font-bold text-sm tracking-widest mb-8">TECH PROFICIENCY</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold tracking-wide mb-2">Frontend</p>
                    <p className="text-sm text-foreground/70">Next.js, React, TypeScript, Tailwind CSS</p>
                  </div>
                  <div>
                    <p className="font-bold tracking-wide mb-2">Backend</p>
                    <p className="text-sm text-foreground/70">Node.js, Python, Prisma, SQL</p>
                  </div>
                  <div>
                    <p className="font-bold tracking-wide mb-2">AI & ML</p>
                    <p className="text-sm text-foreground/70">PyTorch, Pandas, NumPy, Scikit-learn</p>
                  </div>
                  <div>
                    <p className="font-bold tracking-wide mb-2">Databases</p>
                    <p className="text-sm text-foreground/70">Neon DB, PostgreSQL, MongoDB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powerlifter Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12">POWERLIFTER</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="border-4 border-foreground p-8 mb-8">
                <h3 className="text-primary font-bold text-sm tracking-widest mb-8">COMPETITION RECORDS</h3>
                <div className="space-y-6">
                  <div className="border-b-2 border-foreground pb-4">
                    <p className="text-sm text-foreground/60 tracking-widest mb-1">SQUAT</p>
                    <p className="text-4xl font-bold">365 LBS</p>
                  </div>
                  <div className="border-b-2 border-foreground pb-4">
                    <p className="text-sm text-foreground/60 tracking-widest mb-1">BENCH PRESS</p>
                    <p className="text-4xl font-bold">275 LBS</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 tracking-widest mb-1">DEADLIFT</p>
                    <p className="text-4xl font-bold">495 LBS</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Beyond coding, I&apos;m deeply committed to powerlifting. I compete regularly and focus on continuous improvement in strength and performance.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Powerlifting has taught me discipline, persistence, and the importance of proper preparation. These principles directly influence my approach to building software—always pushing limits, always improving.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <p className="font-bold tracking-wide mb-1">DISCIPLINE</p>
                  <p className="text-sm text-foreground/70">Consistency in training and life</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <p className="font-bold tracking-wide mb-1">STRENGTH</p>
                  <p className="text-sm text-foreground/70">Physical and mental resilience</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <p className="font-bold tracking-wide mb-1">DEDICATION</p>
                  <p className="text-sm text-foreground/70">Long-term commitment to goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-none">
            LET&apos;S COLLABORATE
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Always open to new opportunities and interesting projects.
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-6 bg-primary text-primary-foreground font-bold tracking-widest uppercase transition-fast hover:px-14"
          >
            Start Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-foreground/70 text-sm font-mono">
          <p>© 2024 WAISALAM. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  )
}
