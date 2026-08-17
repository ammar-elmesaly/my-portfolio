import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiRust,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiTypeorm,
  SiReact,
  SiElectron,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiDocker,
  SiGit,
  SiLinux,
  SiNextdotjs,
} from "react-icons/si";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

export interface Skill {
  name: string;
  description: string;
  icon: IconType;
  level: number;
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
    },
    {
      title: "DVLD System Engine",
      description: "Desktop & Backend infrastructure for licensing automation.",
      tags: ["Node.js", "TypeORM", "PostgreSQL", "Electron"],
      link: "https://github.com/ammar-elmesaly/dvld-app",
    },
  ] satisfies Project[],

  skills: [
    { name: "NestJS", description: "Structured, opinionated Node.js framework for scalable APIs.", icon: SiNestjs, level: 4 },
    { name: "Node.js", description: "Runs JavaScript server-side for fast, event-driven backends.", icon: SiNodedotjs, level: 5 },
    { name: "TypeScript", description: "Static typing on top of JavaScript for safer, more maintainable code.", icon: SiTypescript, level: 5 },
    { name: "PostgreSQL", description: "Relational database for transactional, structured data.", icon: SiPostgresql, level: 4 },
    { name: "Next.js", description: "React framework for production-grade web applications.", icon: SiNextdotjs, level: 3 },
    { name: "React", description: "Component-based library for building interactive UIs.", icon: SiReact, level: 4 },
    { name: "TypeORM", description: "TypeScript ORM mapping classes directly to SQL tables.", icon: SiTypeorm, level: 5 },
    { name: "MongoDB", description: "Document database for flexible, schema-less data.", icon: SiMongodb, level: 4 },
    { name: "Mongoose", description: "Schema-based modeling layer for MongoDB in Node.js.", icon: SiMongoose, level: 4 },
    { name: "JavaScript", description: "The language every part of this stack ultimately runs on.", icon: SiJavascript, level: 5 },
    { name: "Rust", description: "Systems programming with memory safety and no garbage collector.", icon: SiRust, level: 2 },
    { name: "Express.js", description: "Minimal, unopinionated web framework for Node.js.", icon: SiExpress, level: 4 },
    { name: "Electron", description: "Ships web apps as cross-platform desktop applications.", icon: SiElectron, level: 3 },
    { name: "Docker", description: "Packages apps and dependencies into portable containers.", icon: SiDocker, level: 3 },
    { name: "Git", description: "Version control for tracking and collaborating on code.", icon: SiGit, level: 4 },
    { name: "Linux", description: "Primary development and deployment environment.", icon: SiLinux, level: 5 },
  ] satisfies Skill[],

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