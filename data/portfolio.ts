export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  /** Screenshot path under /public, e.g. "/projects/installments.png". */
  image?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Contribution {
  repo: string;
  description: string;
  link: string;
  role: string;
}

export const PORTFOLIO_DATA = {
  name: "Ammar Elmesaly",
  role: "Full-stack Engineer",
  bio: "Engineering scalable APIs, transactional systems, and containerized infrastructure.",
  socials: {
    github: "https://github.com/ammar-elmesaly",
    email: "contact@elmesaly.dev",
    resume: "/resume.pdf",
  },

  projects: [
    {
      title: "Installments System",
      description:
        "Installments is a backend installment and receivables management API.",
      tags: ["NestJS", "TypeORM", "PostgreSQL", "Docker"],
      link: "https://github.com/ammar-elmesaly/Installments-System",
      // TODO: add a real screenshot, e.g. "/projects/installments.png"
    },
    {
      title: "DVLD System Engine",
      description: "Desktop & Backend infrastructure for licensing automation.",
      tags: ["Node.js", "TypeORM", "PostgreSQL", "Electron"],
      link: "https://github.com/ammar-elmesaly/dvld-app",
      // TODO: add a real screenshot, e.g. "/projects/dvld.png"
    },
  ] satisfies Project[],

  // Derived from the stacks used across the projects above — keep this
  // in sync when a project introduces a technology not listed here.
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Rust"],
    },
    {
      category: "Backend",
      items: ["Node.js", "NestJS", "Express.js", "TypeORM", "REST APIs"],
    },
    {
      category: "Frontend & Desktop",
      items: ["Next.js", "React.js", "Electron.js"],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "Mongoose"],
    },
    {
      category: "Tools & Infrastructure",
      items: ["Docker", "Git", "Linux", "CLI", "monorepo"],
    },
  ] satisfies SkillGroup[],

  // Real open-source contributions only. Add an entry here once a PR
  // has actually landed — this section is meant to stay verifiable.
  contributions: [
    {
      repo: "hnasheralneam/prayertimes",
      description:
        "Islamic prayer times widget for KDE Plasma 6. Credited as a contributor for work on the project.",
      link: "https://github.com/hnasheralneam/prayertimes",
      role: "Contributor",
    },
  ] satisfies Contribution[],
};
