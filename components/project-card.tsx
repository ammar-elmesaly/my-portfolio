import Image from "next/image";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/portfolio";
import { HoverLift } from "./motion/hover-lift";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <HoverLift className="group">
      <Card className="h-full transition-colors hover:ring-primary/40">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="block focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-t-xl"
        >
          {project.image ? (
            <div className="aspect-video w-full rounded-t-xl overflow-hidden">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                width={640}
                height={360}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>
          ) : (
            <div className="flex aspect-video w-full items-center justify-center rounded-t-xl bg-muted">
              <FolderGit2 className="size-8 text-muted-foreground/40" />
            </div>
          )}
        </a>

        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2 text-lg">
            {project.title}
            <span className="flex items-center gap-2 shrink-0">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source on GitHub`}
                className="rounded text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                <SiGithub className="size-4" />
              </a>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="rounded text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                >
                  <ExternalLink className="size-4" />
                </a>
              )}
            </span>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-base text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-muted px-2 py-0.5 font-mono text-sm text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </HoverLift>
  );
}