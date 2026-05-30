'use client'

import Navigation from '@/components/navigation'

// Project template - edit these to add your projects
const projects = [
  {
    id: 1,
    name: 'Resume Builder',
    description: 'It detects ATS score of your resume and resume building .',
    tags: ['Next.js', 'React', 'TypeScript', 'Python', 'Flask','OpenAI API'],
    link: 'https://resume-builder-neon-eta.vercel.app/',
    media: (
      <div className="w-full h-96 bg-foreground/10 border-4 border-dashed border-foreground flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-bold tracking-wide mb-2">
            <img src="resume.png" alt="" />
          </p>
          {/* <p className="text-sm text-foreground/60">Replace with your project media</p> */}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: 'Portfollio For startup',
    description: 'Build a portfollio for startup.',
    tags: ['Next.js', 'Prisma', 'Neon DB'],
    link: 'https://bb-ten-beige.vercel.app/',
    media: (
      <div className="w-full h-96 bg-foreground/10 border-4 border-dashed border-foreground flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-bold tracking-wide mb-2">
            <img src="portfollio.png" alt="" />
          </p>
          
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: 'AI Chatbot',
    description: 'AI chatbot for coding assistant and more.',
    tags: ["NextJs","NEON DB",'Python', 'PyTorch', 'NumPy'],
    link: 'https://apenai.vercel.app/',
    media: (
      <div className="w-full h-96 bg-foreground/10 border-4 border-dashed border-foreground flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-bold tracking-wide mb-2">
           <img src="chatbot.png" alt="" />
          </p>
          
        </div>
      </div>
    ),
  },
  {
    id: 4,
    name: 'Spam Sms Detection',
    description: 'Detects spam sms.',
    tags: ['Next.js', 'React', 'TypeScript','Python', 'Flask','pandas', 'scikit-learn', 'NumPy'],
    link: '#',
    media: (
      <div className="w-full h-96 bg-foreground/10 border-4 border-dashed border-foreground flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-bold tracking-wide mb-2">
            <img src="spam.png" alt="" />
          </p>
          
        </div>
      </div>
    ),
  },
  {
    id: 5,
    name: 'Project Name',
    description: 'Brief description of your project and what it does.',
    tags: ['React Native', 'TypeScript', 'Node.js'],
    link: '#',
    media: (
      <div className="w-full h-96 bg-foreground/10 border-4 border-dashed border-foreground flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-bold tracking-wide mb-2">ADD IMAGE/VIDEO</p>
          <p className="text-sm text-foreground/60">Replace with your project media</p>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    name: 'Project Name',
    description: 'Brief description of your project and what it does.',
    tags: ['Python', 'PyTorch', 'Next.js'],
    link: '#',
    media: (
      <div className="w-full h-96 bg-foreground/10 border-4 border-dashed border-foreground flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-bold tracking-wide mb-2">ADD IMAGE/VIDEO</p>
          <p className="text-sm text-foreground/60">Replace with your project media</p>
        </div>
      </div>
    ),
  },
]

export default function Work() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-foreground">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
            MY WORK
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            A collection of projects showcasing my expertise in full-stack development, AI engineering, and product building.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border-4 border-foreground bg-card group transition-fast hover:bg-foreground hover:text-background"
              >
                {/* Media Placeholder */}
                <div className="overflow-hidden">
                  {project.media}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-foreground/70 group-hover:text-background/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs border border-primary text-primary group-hover:border-background group-hover:text-background font-mono tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    className="inline-block font-bold tracking-widest text-sm uppercase hover:pl-2 transition-fast"
                  >
                    VIEW PROJECT →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Add More Projects CTA */}
          <div className="mt-20 py-16 px-8 border-4 border-foreground text-center">
            <h3 className="text-4xl font-bold mb-4 tracking-tight">MORE PROJECTS</h3>
            <p className="text-foreground/70 mb-4 text-lg">
              Always working on new projects. Follow my GitHub for the latest.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t-4 border-foreground bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter leading-none">
            PROJECT IN MIND?
          </h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
            Always interested in new opportunities and exciting projects.
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-6 bg-primary text-primary-foreground font-bold tracking-widest uppercase transition-fast hover:px-14"
          >
            Let&apos;s Discuss
          </a>
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
