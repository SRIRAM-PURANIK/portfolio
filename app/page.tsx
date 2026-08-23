"use client";

import Image from "next/image";

type Project = {
  title: string;
  blurb: string;
  stack: string[];
};

const projects: Project[] = [
  {
    title: "AI-Assisted Therapy Session Manager",
    blurb:
      "A platform for therapists to record session notes and generate structured progress reports. Uses two-level AI summarisation: session notes are batched into structured summaries with mood ratings, themes and goals, and approved summaries are then combined into a progress report that never touches the raw clinical notes.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Groq API"],
  },
  {
    title: "Coach Intellect",
    blurb:
      "An AI-powered interview coach that runs mock technical interviews, evaluates answers, and gives targeted feedback on where a response fell short.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Groq API"],
  },
  {
    title: "IS-HAITI - Intrusion Detection Research",
    blurb:
      "Final-year research project: a hybrid intrusion detection system combining a Graph Neural Network, a Transformer and an Autoencoder to detect network attacks. Submitted to the ICDSBS26 conference.",
    stack: ["Python", "PyTorch", "GNN", "Transformers"],
  },
  {
    title: "AWS Infrastructure Monitoring & FinOps Dashboard",
    blurb:
      "A dashboard for tracking AWS resource usage and cloud spend. Pulls billing and utilisation data, breaks costs down by service, and surfaces the underused resources driving avoidable spend.",
    stack: ["AWS", "CloudWatch", "Cost Explorer", "Python", "React"],
  },
];

const skills = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "JWT Auth", "GraphQL"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL", "Prisma", "Mongoose", "Supabase"],
  },
  {
    label: "Tools & Cloud",
    items: ["Git", "GitHub", "AWS", "Vercel", "Render", "Python", "Pandas"],
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-border hover:border-accent transition-all duration-300 cursor-pointer"
          >
            <Image
              src="/profile.jpg"
              alt="Sriram Puranik"
              fill
              sizes="40px"
              className="object-cover object-[center_25%]"
              priority
            />
          </button>

          <div className="hidden sm:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="sm:hidden text-sm text-accent border border-accent/40 rounded px-3 py-1.5"
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 sm:px-10 pt-16">
        {/* HERO */}
        <section className="min-h-[88vh] grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p
              className="reveal text-accent font-mono text-sm mb-5"
              style={{ animationDelay: "0.05s" }}
            >
              Hi, my name is
            </p>
            <h1
              className="reveal gradient-text text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05]"
              style={{ animationDelay: "0.15s" }}
            >
              Sriram Puranik
            </h1>
            <h2
              className="reveal text-2xl sm:text-4xl font-bold text-muted mt-3 tracking-tight"
              style={{ animationDelay: "0.25s" }}
            >
              I build full-stack web applications.
            </h2>
            <p
              className="reveal text-muted mt-7 max-w-lg leading-relaxed"
              style={{ animationDelay: "0.35s" }}
            >
              Computer Science graduate specialising in the MERN stack,
              currently looking for full-stack developer roles in Bengaluru.
            </p>
            <div
              className="reveal flex flex-wrap gap-4 mt-10"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href="#works"
                className="text-sm font-medium border border-accent text-accent rounded-md px-6 py-3 hover:bg-accent hover:text-background transition-all duration-300"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="text-sm font-medium border border-border rounded-md px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* TERMINAL */}
          <div
            className="reveal hidden lg:block"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="float relative">
              <div className="absolute -inset-6 bg-accent/10 blur-3xl rounded-full" />
              <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-xs text-muted">
                    sriram@dev: ~
                  </span>
                </div>
                <div className="p-5 font-mono text-[13px] leading-7">
                  <p className="text-muted">
                    <span className="text-accent">$</span>{" "}
                    <span
                      className="typing-line"
                      style={{ animationDelay: "0.8s" }}
                    >
                      whoami
                    </span>
                  </p>
                  <p className="text-foreground">full-stack developer</p>
                  <p className="text-muted mt-3">
                    <span className="text-accent">$</span> cat stack.json
                  </p>
                  <p className="text-foreground">
                    {"{"} <span className="text-accent2">&quot;m&quot;</span>:
                    mongodb, <span className="text-accent2">&quot;e&quot;</span>:
                    express,
                  </p>
                  <p className="text-foreground pl-3">
                    <span className="text-accent2">&quot;r&quot;</span>: react,{" "}
                    <span className="text-accent2">&quot;n&quot;</span>: node{" "}
                    {"}"}
                  </p>
                  <p className="text-muted mt-3">
                    <span className="text-accent">$</span> status 
                  </p>
                  <p className="text-green-400">
                    available for opportunities
                    <span className="cursor-blink ml-1">▊</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="pt-20 pb-16 scroll-mt-16">
          <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">
            About
            <span className="flex-1 h-px bg-border" />
          </h2>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I am a Computer Science graduate who enjoys building things that
                actually run - full-stack applications where I own both the API
                and the interface. Most of my work sits in the MERN stack, and
                lately I have been working with Next.js and TypeScript.
              </p>
              <p>
                Away from the keyboard I play basketball and cricket, swim, and
                sing. I also speak five languages: English, Kannada, Hindi,
                Telugu and Japanese.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono text-accent mb-5 tracking-widest">
                EDUCATION
              </h3>
              <div className="space-y-5">                
              <div className="space-y-5">
                <div className="border-l-2 border-border pl-5 hover:border-accent transition-colors duration-300">
                  <p className="font-semibold">B.Tech, Computer Science</p>
                  <p className="text-muted text-sm mt-1">
                    Dayananda Sagar University, Bengaluru
                  </p>
                  <p className="text-muted text-xs font-mono mt-1">
                    2022 - 2026
                  </p>
                </div>
                <div className="border-l-2 border-border pl-5 hover:border-accent transition-colors duration-300">
                  <p className="font-semibold">Pre-University (PCMC)</p>
                  <p className="text-muted text-sm mt-1">
                    Sri Guru PU College, Hospet
                  </p>
                  <p className="text-muted text-xs font-mono mt-1">
                    2020 - 2022
                  </p>
                </div>
                <div className="border-l-2 border-border pl-5 hover:border-accent transition-colors duration-300">
                  <p className="font-semibold">Schooling</p>
                  <p className="text-muted text-sm mt-1">
                    St. Joseph&apos;s High School, Hospet
                  </p>
                  <p className="text-muted text-xs font-mono mt-1">
                    Class of 2020
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKS */}
        <section id="works" className="pt-16 pb-16 scroll-mt-16">
          <h2 className="flex items-center gap-3 text-2xl font-bold mb-10">
            Works
            <span className="flex-1 h-px bg-border" />
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group bg-card border border-border rounded-xl p-7 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mt-3 flex-1">
                  {project.blurb}
                </p>
                <ul className="flex flex-wrap gap-2 mt-5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-mono text-accent bg-accent/5 border border-accent/20 rounded-full px-3 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="pt-16 pb-16 scroll-mt-16">
          <h2 className="flex items-center gap-3 text-2xl font-bold mb-10">
            Skills
            <span className="flex-1 h-px bg-border" />
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {skills.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-mono text-accent mb-4 tracking-widest">
                  {group.label.toUpperCase()}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm bg-card border border-border rounded-lg px-4 py-2 hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pt-16 pb-24 scroll-mt-16 text-center">
          <p className="font-mono text-accent text-sm mb-4">What is next</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Get in touch
          </h2>
          <p className="text-muted leading-relaxed max-w-md mx-auto mt-5">
            I am currently looking for full-stack developer roles. If you think
            I would be a fit for your team, my inbox is open.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-9">
            <a
              href="mailto:srirampuranik@gmail.com"
              className="text-sm font-medium border border-accent text-accent rounded-md px-7 py-3.5 hover:bg-accent hover:text-background transition-all duration-300"
            >
              Email me
            </a>
            <a
              href="https://github.com/SRIRAM-PURANIK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium border border-border rounded-md px-7 py-3.5 hover:border-accent hover:text-accent transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </section>
         <footer className="py-10 border-t border-border text-center">
          <p className="text-muted text-xs font-mono">
            © 2026 Sriram Puranik
          </p>
        </footer>
      </div>
    </>
  );
}