import { GitPullRequest } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Contribution } from "@/data/portfolio";
import { HoverLiftLink } from "./motion/hover-lift-link";

export function ContributionCard({ contribution }: { contribution: Contribution }) {
  return (
    <HoverLiftLink
      href={contribution.link}
      className="block focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-xl"
    >
      <Card className="h-full transition-colors hover:ring-primary/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-sm">
            <GitPullRequest className="size-4 shrink-0 text-muted-foreground" />
            {contribution.repo}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">{contribution.description}</p>
          <span className="inline-block rounded bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
            {contribution.role}
          </span>
        </CardContent>
      </Card>
    </HoverLiftLink>
  );
}
