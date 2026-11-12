import CopyEmail from "@/components/CopyEmail";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Spotlight from "@/components/Spotlight";
import Terminal from "@/components/Terminal";
import { education, experience, marquee, profile, projects, skills } from "@/data/site";

// Section heading with a number, used by every section so they stay consistent.
function Heading({ index, children }: { index: string; children: string }) {
  return (
    <Reveal>
      <h2 className="mb-10 flex items-baseline gap-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="font-mono text-sm font-normal text-accent">{index}</span>
        {children}
        <span aria-hidden className="h-px flex-1 self-center bg-border" />
      </h2>
    </Reveal>
  );
}

// This page is a Server Component: it is rendered to static HTML at build time.
// Only the small interactive pieces in /components run JavaScript in the browser.
export default function Home() {
  const nameWords = profile.name.split(" ");

  return (
    <>
      <ScrollProgress />
      <Spotlight />
      <Nav />

      <main id="top" className="mx-auto max-w-6xl px-6 pt-16 sm:px-10">
        {/* HERO */}
        <section className="grid min-h-[92vh] items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="fade-up inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-muted">
              <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
              {profile.role} · {profile.location}
            </p>

            <h1 className="mt-7 font-display text-6xl font-bold leading-[0.95] tracking-tighter sm:text-8xl">
              {nameWords.map((word, i) => (
                <span key={word} className="word mr-[0.22em]">
                  {/* Each word starts slightly later than the one before it. */}
                  <span style={{ animationDelay: `${0.1 + i * 0.12}s` }} className={i === 1 ? "text-accent" : ""}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            <p className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-muted" style={{ animationDelay: "0.45s" }}>
              {profile.tagline}
            </p>

            <div className="fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.6s" }}>
              <a
                href="#projects"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="fade-up hidden lg:block" style={{ animationDelay: "0.7s" }}>
            <Terminal />
          </div>
        </section>
      </main>

      {/* TECH STRIP: the list is printed twice so the loop has no visible seam. */}
      <div className="marquee border-y border-border py-5" aria-hidden>
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="mx-7 flex items-center gap-14 font-display text-xl text-muted">
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* ABOUT */}
        <section id="about" className="scroll-mt-16 py-24">
          <Heading index="01">About</Heading>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
            <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I am a Computer Science graduate working as a full-stack developer on a production,
                multi-tenant healthcare platform. I like owning a feature from the database migration
                to the button a user presses, and I care most about the parts where a mistake costs
                someone money: billing rules, wallet balances and access control.
              </p>
              <p>
                Away from the keyboard I play basketball and cricket, swim, and sing. I speak five
                languages: English, Kannada, Hindi, Telugu and Japanese.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="mb-5 font-mono text-xs tracking-widest text-accent">EDUCATION</h3>
              <ul className="space-y-5">
                {education.map((item) => (
                  <li key={item.title} className="border-l-2 border-border pl-5 transition-colors duration-300 hover:border-accent">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-muted">{item.place}</p>
                    <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-16 py-24">
          <Heading index="02">Experience</Heading>
          {experience.map((job) => (
            <Reveal key={job.title}>
              <article className="rounded-2xl border border-border bg-card p-7 sm:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{job.title}</h3>
                  <p className="font-mono text-xs text-accent">{job.period}</p>
                </div>
                <p className="mt-1 text-muted">{job.company}</p>
                <p className="mt-5 max-w-3xl leading-relaxed text-muted">{job.summary}</p>
                <ul className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed">
                      <span aria-hidden className="mt-0.5 text-accent">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <li key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-16 py-24">
          <Heading index="03">Projects</Heading>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, i) => (
              // Stagger the two columns so cards do not all appear at once.
              <Reveal key={project.title} delay={(i % 2) * 0.12}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-16 py-24">
          <Heading index="04">Skills</Heading>
          <div className="grid gap-10 sm:grid-cols-2">
            {skills.map((group, i) => (
              <Reveal key={group.label} delay={(i % 2) * 0.12}>
                <h3 className="mb-4 font-mono text-xs tracking-widest text-accent">{group.label.toUpperCase()}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-card px-4 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-16 py-28 text-center">
          <Reveal>
            <p className="font-mono text-sm text-accent">05 / Contact</p>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-tighter sm:text-7xl">
              Let&apos;s build something <span className="text-accent">solid</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted">
              Have a full-stack or backend problem worth solving? Send me a note and I will reply.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                Email me
              </a>
              <CopyEmail email={profile.email} />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </section>

        <footer className="border-t border-border py-10 text-center">
          <p className="font-mono text-xs text-muted">© 2026 {profile.name}. Built with Next.js.</p>
        </footer>
      </div>
    </>
  );
}
