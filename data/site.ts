// All page content lives here, so text can be changed without touching layout code.
// Keep it in step with the resume PDF in /public.

export const profile = {
  name: "Sriram Puranik",
  role: "Full-Stack Developer",
  location: "Bengaluru, India",
  photo: "/profile.jpg",
  intro:
    "I build web applications end to end, from the database and REST API to the React interface people use every day. Right now that means scheduling, billing and wallet features for a healthcare SaaS.",
  about: [
    "I'm a full-stack developer who likes the parts of a product where correctness matters most: billing rules, wallet balances, access control and the APIs behind them.",
    "Web is my home ground: Node.js, Express, Prisma and PostgreSQL on the backend and React on the frontend. I have also worked on Flutter mobile screens, I build with LLM APIs, and I deploy on AWS, Vercel and Render.",
    "Outside work I play basketball and cricket, swim and sing. I speak English, Kannada, Hindi, Telugu and Japanese.",
  ],
  email: "srirampuranik191@gmail.com",
  github: "https://github.com/SRIRAM-PURANIK",
  linkedin: "https://www.linkedin.com/in/sriram-puranik",
  resume: "/Sriram_Puranik_Resume.pdf",
  current: { title: "Software Developer Intern", org: "Techmiss3" },
};

// Words that rotate in the headline: "I build ___".
export const headlineWords = ["web applications", "REST APIs", "billing systems", "admin dashboards", "AI features"];

// Scrolling strip of technologies.
export const marquee = ["Node.js", "Express", "React", "JavaScript", "PostgreSQL", "Prisma", "MongoDB", "REST APIs", "AWS", "JWT", "Git", "Vercel", "Render", "OpenAI", "Groq", "Linux"];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export type Role = {
  period: string;
  title: string;
  org: string;
  place: string;
  summary: string;
  points: string[];
  stack: string[];
};

// Same scope as the resume: what was built and why it mattered, no internal details.
export const experience: Role[] = [
  {
    period: "Sep 2026 — Present",
    title: "Software Developer Intern (Full-Stack)",
    org: "Techmiss3",
    place: "Bengaluru",
    summary: "Multi-tenant healthcare SaaS: web admin panel, REST API and a companion mobile app.",
    points: [
      "Develop web features end to end across a React admin panel and Node.js/Express REST API, with some work on the Flutter mobile app.",
      "Handle role-based access for 8+ user roles; added tenant-isolation checks to secure admin deletion.",
      "Re-engineered recurring-appointment rescheduling to stop errors in billing and therapist allocation.",
      "Fixed a bug that reverted paid bills to “due” and automated wallet-based billing for assessments.",
      "Built automated low-balance alerts and added per-user rate limiting to transactional email.",
    ],
    stack: ["Node.js", "Express", "React", "Prisma", "PostgreSQL", "Flutter (basics)"],
  },
];

export type Project = {
  title: string;
  year: string;
  blurb: string;
  stack: string[];
  kind: string; // short category shown on the card
  repo?: string; // set only when the repository is public
  live?: string; // set only when a live demo exists
  note?: string; // short label such as "Research"
};

export const projects: Project[] = [
  {
    title: "AI-Assisted Therapy Session & Progress Tracker",
    kind: "Full-stack · AI",
    year: "2026",
    blurb:
      "Full-stack platform where therapists record session notes and get progress reports. A two-stage LLM pipeline turns notes into structured summaries (mood, themes, goals) and only approved summaries feed the final report. JWT auth with bcrypt hashing; API on Render, client on Vercel.",
    stack: ["React", "Node.js", "Express", "MongoDB Atlas", "Groq API"],
    repo: "https://github.com/SRIRAM-PURANIK/therapy-management-system",
  },
  {
    title: "AI Interview Coach & Career Assistant",
    kind: "Full-stack · AI",
    year: "2026",
    blurb:
      "MERN app for mock interviews and resume analysis. Generates role-specific questions, evaluates each answer and gives targeted feedback, with JWT sessions and persistent interview history.",
    stack: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
  },
  {
    title: "IS-HAITI: Hybrid Intrusion Detection",
    kind: "Deep learning · Security",
    year: "2026",
    note: "Research",
    blurb:
      "Final-year research combining a Graph Neural Network, a Transformer and an Autoencoder to detect network attacks. Submitted to the ICDSBS26 conference.",
    stack: ["Python", "PyTorch", "GNN", "Transformers"],
  },
  {
    title: "AWS Infrastructure Monitoring & FinOps Dashboard",
    kind: "Cloud · Backend",
    year: "2025",
    blurb:
      "Node.js service on EC2 (Ubuntu) that tracks CPU, memory and disk usage in real time, with the AWS Cost Explorer API surfacing billing trends and cost-saving opportunities.",
    stack: ["Node.js", "Express", "AWS EC2", "CloudWatch", "Cost Explorer"],
  },
];

export const skills = [
  { label: "Languages", items: ["JavaScript", "Python", "Java", "C", "SQL", "Dart"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "Prisma", "PostgreSQL", "MongoDB", "JWT", "RBAC"] },
  { label: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "Flutter (basics)"] },
  { label: "Cloud & Tools", items: ["AWS", "Linux", "Git", "GitHub", "Vercel", "Render"] },
  { label: "AI", items: ["OpenAI API", "Groq API", "Prompt engineering"] },
];

export const education = {
  period: "2022 — 2026",
  title: "B.Tech, Computer Science & Engineering",
  org: "Dayananda Sagar University",
  place: "Bengaluru",
};
