// All page content lives here so text can be edited without touching layout code.

export const profile = {
  name: "Sriram Puranik",
  role: "Full-Stack Developer",
  location: "Bengaluru, India",
  tagline:
    "I build the unglamorous parts that have to be right: billing, wallets, scheduling and the APIs behind them.",
  email: "srirampuranik191@gmail.com",
  github: "https://github.com/SRIRAM-PURANIK",
  linkedin: "https://www.linkedin.com/in/sriram-puranik",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// Shown as a moving strip under the hero.
export const marquee = [
  "Node.js", "Express", "PostgreSQL", "Prisma", "React", "Next.js",
  "TypeScript", "Flutter", "REST APIs", "JWT", "AWS", "Git",
];

export type Job = {
  title: string;
  company: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    title: "Software Developer Intern (Full-Stack)",
    company: "Techmiss3, Bengaluru",
    period: "Sep 2026 - Present",
    summary:
      "Multi-tenant SaaS platform for therapy and healthcare clinics: scheduling, billing, wallet, HR and reports across a mobile app, an admin panel and a REST backend.",
    points: [
      "Ship features end to end across a Flutter app, a React admin panel and a Node.js/Express + Prisma + PostgreSQL backend, with role-based access for 8+ user roles.",
      "Built the assessment booking and billing flow: charged from patient wallets, bills created automatically, and fixed a bug where paid bills reverted to due.",
      "Built wallet low-balance alerts with scheduled cron jobs and in-app notifications, shipped as Prisma migrations.",
      "Integrated transactional email with per-user rate limiting and a check that blocks invalid addresses before sending.",
      "Built a secure branch-admin deletion feature with tenant-isolation checks so no other organisation's data is touched.",
      "Traced payment and dues miscalculations in dashboard charts to their root causes and wrote the fix plans.",
    ],
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "React", "Flutter"],
  },
];

export type Project = {
  title: string;
  kind: string;
  blurb: string;
  stack: string[];
  repo?: string; // only set when the repository is public
};

export const projects: Project[] = [
  {
    title: "AI-Assisted Therapy Session Manager",
    kind: "Full-stack",
    blurb:
      "Therapists record session notes and get structured progress reports. Two-level AI summarisation: notes are batched into summaries with mood, themes and goals, and only approved summaries feed the final report, so raw clinical notes are never exposed.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Groq API"],
    repo: "https://github.com/SRIRAM-PURANIK/therapy-management-system",
  },
  {
    title: "Coach Intellect",
    kind: "Full-stack",
    blurb:
      "An AI interview coach that runs mock technical interviews, evaluates each answer and gives targeted feedback on where the response fell short.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Groq API"],
  },
  {
    title: "IS-HAITI: Intrusion Detection Research",
    kind: "Research",
    blurb:
      "Final-year research project: a hybrid intrusion detection system combining a Graph Neural Network, a Transformer and an Autoencoder to detect network attacks. Submitted to the ICDSBS26 conference.",
    stack: ["Python", "PyTorch", "GNN", "Transformers"],
  },
  {
    title: "AWS Monitoring and FinOps Dashboard",
    kind: "Cloud",
    blurb:
      "Tracks AWS resource usage and cloud spend: pulls billing and utilisation data, breaks cost down by service and surfaces the underused resources driving avoidable spend.",
    stack: ["AWS", "CloudWatch", "Cost Explorer", "Python", "React"],
  },
];

export const skills = [
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "Prisma", "JWT Auth", "RBAC", "Cron jobs"] },
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Flutter"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "Schema design", "Migrations", "Multi-tenant isolation"] },
  { label: "Tools and Cloud", items: ["Git", "GitHub", "AWS", "Linux", "Vercel", "Render", "Python"] },
];

export const education = [
  { title: "B.Tech, Computer Science", place: "Dayananda Sagar University, Bengaluru", period: "2022 - 2026" },
  { title: "Pre-University (PCMC)", place: "Sri Guru PU College, Hospet", period: "2020 - 2022" },
  { title: "Schooling", place: "St. Joseph's High School, Hospet", period: "Class of 2020" },
];

// Lines typed out in the hero terminal. "cmd" lines get a prompt, "out" lines do not.
export const terminalLines: { kind: "cmd" | "out"; text: string }[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "sriram / full-stack developer" },
  { kind: "cmd", text: "cat stack.json" },
  { kind: "out", text: '{ "api": "node + express + prisma",' },
  { kind: "out", text: '  "db": "postgresql", "ui": "react" }' },
  { kind: "cmd", text: "git log --oneline -3" },
  { kind: "out", text: "feat: assessment billing from wallet" },
  { kind: "out", text: "fix: paid bills reverting to due" },
  { kind: "out", text: "feat: low-balance alerts (cron)" },
];
