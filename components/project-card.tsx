import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/portfolio";
import { HoverLiftLink } from "./motion/hover-lift-link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <HoverLiftLink
      href={project.link}
      className="block focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-xl"
    >
      <Card className="h-full transition-colors hover:ring-primary/40">
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
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2 text-lg">
            {project.title}
            <ArrowUpRight className="size-5 shrink-0 text-muted-foreground" />
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
    </HoverLiftLink>
  );
}