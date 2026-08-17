import Image from "next/image";
import { Mail, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import personalImg from "@/public/personal_image.jpg";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { SkillCard } from "@/components/skill-card";
import { ContributionCard } from "@/components/contribution-card";
import { ButtonLink } from "@/components/ui/button-link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row gap-8 items-center md:items-start py-20 border-b-4">
        <div className="flex-1 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-center md:text-left">
            {PORTFOLIO_DATA.name}
          </h1>
          <p className="text-xl font-semibold text-muted-foreground text-center md:text-left">
            {PORTFOLIO_DATA.role}
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed text-center md:text-left">
            {PORTFOLIO_DATA.bio}
          </p>
          <div className="flex gap-3 justify-center md:justify-start pt-2">
            <ButtonLink
              href={`mailto:${PORTFOLIO_DATA.socials.email}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary text-primary-foreground px-3.5 py-2 text-base font-medium hover:bg-primary/85 hover:no-underline transition-colors"
            >
              <Mail className="size-4" /> Contact
            </ButtonLink>
            <ButtonLink
              href={PORTFOLIO_DATA.socials.resume}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-base font-medium hover:bg-muted transition-colors"
            >
              <FileText className="size-4" /> Resume
            </ButtonLink>
            <ButtonLink
              href={PORTFOLIO_DATA.socials.github}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-base font-medium hover:bg-muted transition-colors"
            >
              <SiGithub className="size-4" /> GitHub
            </ButtonLink>
          </div>
        </div>

        <div className="relative shrink-0">
          <Image
            src={personalImg}
            alt={`Profile photo of ${PORTFOLIO_DATA.name}`}
            width={220}
            height={220}
            priority
            className="rounded-full object-cover border-6 border-slate-400 dark:border-slate-50 shadow-lg"
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 space-y-6 py-16 scroll-mt-16">
        <SectionHeading title="Projects" />
        <div className="grid gap-4 sm:grid-cols-2">
          {PORTFOLIO_DATA.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-muted/40 border-y border-border scroll-mt-16">
        <div className="max-w-5xl mx-auto px-6 space-y-6 py-16">
          <SectionHeading title="Skills" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_DATA.skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contributions */}
      <section id="contributions" className="max-w-5xl mx-auto px-6 space-y-6 py-16 scroll-mt-16">
        <SectionHeading title="Contributions" />
        {PORTFOLIO_DATA.contributions.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {PORTFOLIO_DATA.contributions.map((contribution) => (
              <ContributionCard key={contribution.repo} contribution={contribution} />
            ))}
          </div>
        ) : (
          <p className="text-base text-muted-foreground">
            No public contributions listed yet.
          </p>
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 space-y-6 py-16 pb-24 scroll-mt-16">
        <SectionHeading title="Contact" />
        <p className="text-base text-muted-foreground max-w-md">
          Open to internships and collaboration. Reach out directly and I'll get back
          to you.
        </p>
        <div className="flex gap-3">
          <ButtonLink
            href={`mailto:${PORTFOLIO_DATA.socials.email}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary text-primary-foreground px-3.5 py-2 text-base font-medium hover:bg-primary/80 transition-colors"
          >
            <Mail className="size-4" /> {PORTFOLIO_DATA.socials.email}
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}