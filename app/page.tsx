import Image from "next/image";
import CopyEmail from "@/components/CopyEmail";
import Effects from "@/components/Effects";
import Header from "@/components/Header";
import RotatingWord from "@/components/RotatingWord";
import { ArrowUpRight, FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { education, experience, headlineWords, marquee, navLinks, profile, projects, skills } from "@/data/site";

// External links open in a new tab without giving the new page access to this one.
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

// Lets a stagger delay be passed as a CSS variable (read by .rise / .reveal in globals.css).
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// Section heading: a numbered mono label above a large title, revealed on scroll.
function SectionHead({ n, label, title }: { n: string; label: string; title: string }) {
  return (
    <div className="reveal mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {n} <span className="text-faint">/</span> {label}
      </p>
      <h2 className="title-slide mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <li className="rounded-full border border-line bg-bg/60 px-2.5 py-0.5 font-mono text-[11px] text-mute">{children}</li>;
}

// The hero's code card: a short profile written as code, each line rising in after the last.
function CodeCard() {
  const s = (t: string) => <span className="text-emerald-500 dark:text-emerald-400">&quot;{t}&quot;</span>;
  const lines: React.ReactNode[] = [
    <><span className="text-accent-2">const</span> <span className="text-accent">developer</span> = {"{"}</>,
    <>  name: {s(profile.name)},</>,
    <>  role: {s(profile.role)},</>,
    <>  based: {s("Bengaluru, IN")},</>,
    <>  backend: [{s("Node.js")}, {s("Express")}, {s("SQL")}],</>,
    <>  frontend: [{s("React")}, {s("JavaScript")}],</>,
    <>  focus: {s("web applications")},</>,
    <>  shipping: <span className="text-amber-500 dark:text-amber-400">true</span>,</>,
    <>{"}"};</>,
  ];
  return (
    <div className="rise relative min-w-0" style={delay(450)}>
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/40 via-transparent to-accent-2/40" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/20">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-faint">developer.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 text-mute sm:text-[13px]">
          {lines.map((l, i) => (
            <div key={i} className="rise flex" style={delay(700 + i * 110)}>
              <span className="mr-4 w-4 shrink-0 select-none text-right text-faint/60">{i + 1}</span>
              <code className="whitespace-pre">{l}</code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Effects />
      <Header links={navLinks} />

      <main id="top" className="relative z-10">
        {/* ---------------- Hero ---------------- */}
        <section className="relative overflow-hidden">
          <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
          <div className="blob blob-a -z-10 left-0 top-0 size-[34rem]" aria-hidden="true" />
          <div className="blob blob-b -z-10 right-0 top-10 size-[30rem]" aria-hidden="true" />

          {/* min-w-0 stops the code card's long lines from widening the grid on phones. */}
          <div className="mx-auto grid max-w-5xl items-center gap-14 px-6 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_1fr]">
            <div className="hero-out min-w-0">
              <div className="rise" style={delay(0)}>
                <Image src={profile.photo} alt={profile.name} width={64} height={64} priority className="size-16 rounded-full border-2 border-line object-cover" />
              </div>

              <h1 className="rise mt-7 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl" style={delay(120)}>
                Hi, I&apos;m <span className="text-gradient">{profile.name}</span>.
                <span className="mt-3 block text-2xl font-medium text-mute sm:text-3xl">
                  I build <RotatingWord words={headlineWords} />
                </span>
              </h1>

              <p className="rise mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg" style={delay(240)}>
                {profile.intro}
              </p>

              <div className="rise mt-8 flex flex-wrap items-center gap-2 sm:gap-3" style={delay(360)}>
                <a
                  href={profile.resume}
                  {...ext}
                  className="shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-2.5 sm:px-5 text-sm font-semibold text-bg shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
                >
                  <FileIcon /> Download Resume
                </a>
                {[
                  { href: profile.github, label: "GitHub", icon: <GitHubIcon />, external: true },
                  { href: profile.linkedin, label: "LinkedIn", icon: <LinkedInIcon />, external: true },
                  { href: `mailto:${profile.email}`, label: "Email", icon: <MailIcon />, external: false },
                ].map((b) => (
                  <a
                    key={b.label}
                    href={b.href}
                    {...(b.external ? ext : {})}
                    aria-label={b.label}
                    title={b.label}
                    className="grid size-10 place-items-center rounded-full border border-line bg-surface/60 text-mute transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    {b.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right column: the code card, drifting slightly slower than the page on scroll. */}
            <div className="hero-parallax relative min-w-0">
              <CodeCard />
            </div>
          </div>

          {/* Technology strip: the list is rendered twice so the loop has no gap. */}
          <div className="marquee relative overflow-hidden border-y border-line py-5" data-marquee aria-label="Technologies I use">
            <ul className="marquee-track font-mono text-sm text-mute">
              {[...marquee, ...marquee].map((t, i) => (
                <li key={i} aria-hidden={i >= marquee.length ? "true" : undefined} className="flex items-center gap-10 whitespace-nowrap pr-10">
                  {t}
                  <span className="text-[10px] text-accent/70" aria-hidden="true">◆</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6">
          {/* ---------------- About ---------------- */}
          <section id="about" className="py-24">
            <SectionHead n="01" label="About" title="Correctness first, then polish." />
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
              <div className="space-y-5 text-[17px] leading-relaxed text-mute">
                {profile.about.map((p, i) => (
                  <p key={p.slice(0, 24)} className="reveal" style={delay(i * 100)}>
                    {p}
                  </p>
                ))}
              </div>
              <ul className="reveal spot-card space-y-3 self-start rounded-2xl border border-line bg-surface/60 p-6" style={delay(200)}>
                {[
                  ["Role", profile.role],
                  ["Based in", profile.location],
                  ["Education", "B.Tech CSE, 2026"],
                  ["Focus", "Backend & full-stack"],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between gap-4 border-b border-line pb-3 text-sm last:border-0 last:pb-0">
                    <span className="text-faint">{k}</span>
                    <span className="text-right font-medium">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ---------------- Experience: timeline ---------------- */}
          <section id="experience" className="py-24">
            <SectionHead n="02" label="Experience" title="Where I've been building." />
            <ol className="reveal relative space-y-12 pl-8">
              <span className="timeline-line absolute left-[5px] top-2 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-accent via-accent-2/60 to-line" aria-hidden="true" />
              {experience.map((r) => (
                <li key={r.title} className="relative">
                  <span className="pulse absolute -left-8 top-7 size-3 rounded-full bg-accent" aria-hidden="true" />
                  <div className="spot-card rounded-2xl border border-line bg-surface/60 p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold">
                        {r.title} <span className="text-accent">@ {r.org}</span>
                      </h3>
                      <span className="font-mono text-xs text-faint">{r.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-faint">
                      {r.place} · {r.summary}
                    </p>
                    <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-mute">
                      {r.points.map((pt) => (
                        <li key={pt} className="flex gap-3">
                          <span className="mt-[0.2em] font-mono text-accent" aria-hidden="true">▹</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                      {r.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
              <li className="relative">
                <span className="absolute -left-8 top-1.5 size-3 rounded-full border-2 border-accent bg-bg" aria-hidden="true" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">
                    {education.title} <span className="font-normal text-faint">· {education.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-faint">{education.period}</span>
                </div>
                <p className="mt-1 text-sm text-faint">{education.place}</p>
              </li>
            </ol>
            <a href={profile.resume} {...ext} className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
              View full resume <ArrowUpRight />
            </a>
          </section>

          {/* ---------------- Projects: spotlight cards ---------------- */}
          <section id="projects" className="py-24">
            <SectionHead n="03" label="Projects" title="Things I've built." />
            <ul className="grid gap-5 md:grid-cols-2">
              {projects.map((p, i) => (
                <li key={p.title} className="reveal" style={delay((i % 2) * 120)}>
                  <article className="spot-card flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-accent">{p.kind}</span>
                      <span className="font-mono text-xs text-faint">{p.year}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug">
                      {p.repo ? (
                        // The ::after overlay makes the whole card clickable.
                        <a href={p.repo} {...ext} className="inline-flex items-start gap-1.5 after:absolute after:inset-0 after:rounded-2xl after:content-['']">
                          {p.title} <ArrowUpRight className="arrow mt-1 size-4 shrink-0 text-accent" />
                        </a>
                      ) : (
                        p.title
                      )}
                    </h3>
                    {p.note && (
                      <span className="mt-2 w-fit rounded-full bg-accent-bg px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">{p.note}</span>
                    )}
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-mute">{p.blurb}</p>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                      {p.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </ul>
                    {p.repo && (
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-mute">
                        <GitHubIcon className="size-3.5" /> Source code
                      </span>
                    )}
                  </article>
                </li>
              ))}
            </ul>
            <a href={profile.github} {...ext} className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
              More on GitHub <ArrowUpRight />
            </a>
          </section>

          {/* ---------------- Skills: rows of chips sliding right to left ----------------
              Each row repeats its list so it fills wide screens, then doubles it for a seamless loop.
              Hovering a row pauses it so a recruiter can read it. */}
          <section id="skills" className="py-24">
            <SectionHead n="04" label="Skills" title="My toolkit." />
            <div className="space-y-4">
              {skills.map((g, i) => {
                const filled = Array.from({ length: Math.ceil(14 / g.items.length) }, () => g.items).flat();
                return (
                  <div key={g.label} className="reveal flex items-center gap-4" style={delay(i * 80)}>
                    <h3 className="w-28 shrink-0 font-mono text-xs uppercase tracking-wider text-accent sm:w-40">{g.label}</h3>
                    <div className="marquee relative min-w-0 flex-1 overflow-hidden" data-marquee aria-label={`${g.label}: ${g.items.join(", ")}`}>
                      <ul className="marquee-track gap-3 py-1" style={{ "--speed": `${26 + i * 5}s` } as React.CSSProperties}>
                        {[...filled, ...filled].map((sk, j) => (
                          <li
                            key={j}
                            aria-hidden="true"
                            className="whitespace-nowrap rounded-full border border-line bg-surface/70 px-4 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent"
                          >
                            {sk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ---------------- Contact: card with a slowly rotating gradient border ---------------- */}
          <section id="contact" className="py-24">
            <div className="reveal glow-border rounded-3xl px-6 py-14 text-center sm:px-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">05 / Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s <span className="text-gradient">build something</span>.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-mute">Email is the best way to reach me.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
                >
                  <MailIcon /> {profile.email}
                </a>
                <CopyEmail email={profile.email} />
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sriram Puranik</p>
          <p>Built with Next.js, TypeScript and Tailwind CSS. Deployed on Vercel.</p>
        </div>
      </footer>
    </>
  );
}
