import Navigation from '@/components/navigation'
import ProfileImage from '@/components/profile-image'
import ScrollReveal from '@/components/scroll-reveal'
import ScrollPath from '@/components/scroll-path'
import Link from 'next/link'

const services = [
  {
    title: 'Bug Fixing & Debugging',
    price: 'From $25',
    stack: 'Next.js · React · Node.js',
    description: 'I track down and fix bugs fast — console errors, broken APIs, layout issues, race conditions.',
    includes: [
      'Root-cause analysis & fix',
      'Works across Next.js, React, Node, Python',
      'Same-day turnaround for simple issues',
      'Clear explanation of what was wrong',
    ],
  },
  {
    title: 'AI Chatbot Integration',
    price: 'From $99',
    stack: 'GPT-4o · Gemini · RAG',
    description: 'Add a smart AI assistant to your product — customer support, internal tools, or a custom RAG chatbot.',
    includes: [
      'OpenAI / Gemini API integration',
      'RAG with your own documents or data',
      'Custom system prompt & personality',
      'Chat UI + streaming responses',
    ],
    highlighted: true,
  },
  {
    title: 'Full-Stack Web App',
    price: 'From $199',
    stack: 'Next.js · Prisma · Neon DB',
    description: 'End-to-end web apps with auth, database, API, and a polished UI. Deployed to Vercel.',
    includes: [
      'Next.js frontend + API routes',
      'PostgreSQL (Neon) + Prisma ORM',
      'Auth (NextAuth or custom)',
      'Vercel deployment included',
    ],
  },
  {
    title: 'AI SaaS MVP',
    price: 'From $499',
    stack: 'Next.js · Python · LLMs',
    description: 'A complete, launchable AI SaaS — payments, auth, AI features, and landing page. Ship in weeks.',
    includes: [
      'Everything in Full-Stack Web App',
      'AI feature (LLM, classification, or RAG)',
      'Stripe payments integration',
      'Dashboard + usage limits',
    ],
  },
]

const packages = [
  {
    name: 'STARTER',
    price: '$25',
    period: 'one-time fix',
    description: 'Single bug fix or small feature',
    features: ['1 bug or small task', 'Next.js / React / Node', 'Delivered in 1–2 days', 'Code explained'],
    cta: 'Get a Fix',
  },
  {
    name: 'PROJECT',
    price: '$199',
    period: 'per project',
    description: 'Full feature or small app',
    features: ['Full-stack web app', 'Database + API + UI', 'Deployed to Vercel', '1 week of revisions'],
    cta: 'Start a Project',
    featured: true,
  },
  {
    name: 'AI SAAS',
    price: '$499',
    period: 'per MVP',
    description: 'Complete AI product, launch-ready',
    features: ['AI feature (GPT/Gemini/RAG)', 'Auth + payments', 'Full deployment', 'Ongoing support option'],
    cta: 'Build My SaaS',
  },
]

const liveProjects = [
  {
    name: 'Resume Builder + ATS Scorer',
    description: 'Analyzes your resume against job descriptions, scores ATS compatibility, and gives rewrite suggestions using AI.',
    url: 'https://resume-builder-neon-eta.vercel.app/',
    tags: ['Next.js', 'Python', 'Flask', 'OpenAI API'],
    image: 'resume.png',
  },
  {
    name: 'AI Data Analyst',
    description: 'AI data analyst reads your data and you can talk about your data and see graphs of all data.',
    url: 'https://ai-data-analytics-geneereator.vercel.app/',
    tags: ['Next.js', 'Neon DB', 'AI'],
    image: 'ai.png',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollPath />
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-36 pb-28 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground relative overflow-hidden">
        {/* Background grid decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" aria-hidden>
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Scroll-drawing SVG line decoration */}
        <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-20">
          <svg viewBox="0 0 200 200" fill="none" aria-hidden>
            <path
              d="M 0 200 L 0 80 L 60 80 L 60 40 L 120 40 L 120 0"
              stroke="oklch(0.75 0.19 70)"
              strokeWidth="1.5"
              className="svg-draw is-visible"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — text */}
            <div>
              <p className="text-primary font-bold tracking-widest text-xs mb-6 uppercase">
                Full-Stack Developer & AI Engineer · Available for Remote Work
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tighter mb-6">
                I BUILD AI<br />
                PRODUCTS FOR<br />
                <span className="text-primary">GLOBAL CLIENTS</span>
              </h1>

              <p className="text-base md:text-lg text-foreground/65 mb-10 max-w-lg leading-relaxed">
                From bug fixes to full AI SaaS MVPs — production-ready code in Next.js, React, Python, and LLMs.
                Message me your project and I&apos;ll send a custom demo within 24&nbsp;hours.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="#section-services"
                  className="px-8 py-4 bg-foreground text-background font-bold tracking-wide uppercase text-sm hover:opacity-80 transition-opacity"
                >
                  View Services & Pricing
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-foreground text-foreground font-bold tracking-wide uppercase text-sm hover:bg-foreground hover:text-background transition-all"
                >
                  Message Me
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="border-l-4 border-primary pl-5">
                  <p className="text-sm font-bold tracking-wide mb-0.5">TECH</p>
                  <p className="text-xs text-foreground/60">Next.js · React · Python · TypeScript · NeonDB</p>
                </div>
                <div className="border-l-4 border-primary pl-5">
                  <p className="text-sm font-bold tracking-wide mb-0.5">RESPONSE</p>
                  <p className="text-xs text-foreground/60">Within 24 hours — async-friendly, no calls</p>
                </div>
              </div>
            </div>

            {/* Right — animated profile */}
            <div className="hidden lg:flex justify-center items-center">
              <ProfileImage />
            </div>
          </div>
        </div>
      </section>

      {/* ── Live Projects ────────────────────────────────────── */}
      <section id="section-projects" className="py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-16 flex-wrap gap-4">
              <div>
                <p className="text-primary font-bold tracking-widest text-xs mb-3">LIVE DEMOS</p>
                <h2 className="text-5xl font-bold tracking-tighter leading-none">DEPLOYED PROJECTS</h2>
              </div>
              <Link href="/work" className="text-sm font-bold tracking-widest uppercase border-b-2 border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
                VIEW ALL WORK →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {liveProjects.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 120}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-4 border-foreground bg-card group hover:bg-foreground hover:text-background transition-all block h-full"
                >
                  <div className="overflow-hidden border-b-4 border-foreground h-48 flex items-center justify-center bg-foreground/5 relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/80">
                      <span className="text-background font-bold tracking-widest uppercase text-sm">OPEN LIVE DEMO →</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 tracking-tight">{p.name}</h3>
                    <p className="text-foreground/70 group-hover:text-background/70 mb-5 text-sm leading-relaxed">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs border border-primary text-primary group-hover:border-background group-hover:text-background font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="section-services" className="py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-primary font-bold tracking-widest text-xs mb-3">WHAT I BUILD</p>
              <h2 className="text-5xl font-bold tracking-tighter leading-none">SERVICES</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <div
                  className={`border-4 p-8 h-full ${s.highlighted ? 'border-primary bg-primary/5' : 'border-foreground bg-card'}`}
                >
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
                    <span className={`font-bold text-lg ${s.highlighted ? 'text-primary' : 'text-foreground'}`}>{s.price}</span>
                  </div>
                  <p className="text-xs font-mono text-foreground/40 mb-4 tracking-widest">{s.stack}</p>
                  <p className="text-foreground/65 mb-6 leading-relaxed text-sm">{s.description}</p>
                  <ul className="space-y-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section id="section-pricing" className="py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="text-primary font-bold tracking-widest text-xs mb-3">TRANSPARENT PRICING · USD</p>
              <h2 className="text-5xl font-bold tracking-tighter leading-none">PACKAGES</h2>
              <p className="text-foreground/55 mt-4 max-w-xl mx-auto text-sm">Not sure which fits? Message me — I&apos;ll give a custom quote based on your project scope.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 120}>
                <div
                  className={`border-4 p-8 flex flex-col h-full ${pkg.featured ? 'border-primary' : 'border-foreground bg-background'}`}
                >
                  {pkg.featured && (
                    <p className="text-xs font-bold tracking-widest text-primary mb-4 uppercase">Most Popular</p>
                  )}
                  <p className="text-xs font-bold tracking-widest text-foreground/45 mb-3">{pkg.name}</p>
                  <div className="mb-1">
                    <span className="text-5xl font-bold tracking-tighter">{pkg.price}</span>
                  </div>
                  <p className="text-xs text-foreground/45 font-mono mb-2">{pkg.period}</p>
                  <p className="text-sm text-foreground/65 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center px-6 py-3 font-bold tracking-widest uppercase text-sm transition-all ${
                      pkg.featured
                        ? 'bg-primary text-primary-foreground hover:opacity-90'
                        : 'border-2 border-foreground hover:bg-foreground hover:text-background'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <section id="section-stack" className="py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-5xl font-bold tracking-tighter mb-16">TECH STACK</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Next.js', 'React', 'Python', 'TypeScript', 'Tailwind', 'Prisma', 'Neon DB', 'Pandas', 'NumPy', 'PyTorch'].map((skill, i) => (
              <ScrollReveal key={skill} delay={i * 60}>
                <div className="border-2 border-foreground p-6 bg-card hover:bg-foreground hover:text-background transition-all text-center">
                  <p className="font-bold tracking-wide text-sm">{skill}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section id="section-cta" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative SVG corner arc */}
        <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-10">
          <svg viewBox="0 0 300 300" fill="none" aria-hidden>
            <circle cx="300" cy="0" r="200" stroke="oklch(0.75 0.19 70)" strokeWidth="1" strokeDasharray="6 18" />
            <circle cx="300" cy="0" r="150" stroke="oklch(0.75 0.19 70)" strokeWidth="0.5" strokeDasharray="3 12" />
          </svg>
        </div>

        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-primary font-bold tracking-widest text-xs mb-6">ASYNC-FRIENDLY · NO CALLS NEEDED</p>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
              MESSAGE ME<br />
              YOUR PROJECT
            </h2>
            <p className="text-base text-foreground/65 mb-4 max-w-2xl mx-auto">
              Describe what you need — I&apos;ll send a custom demo or proposal within 24 hours.
            </p>
            <p className="text-xs text-foreground/40 mb-12 font-mono">No discovery calls. No back-and-forth. Just results.</p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
            >
              GET IN TOUCH
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <footer className="border-t-4 border-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-foreground/50 text-xs font-mono">
          <p>© 2025 WAISALAM. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  )
}
