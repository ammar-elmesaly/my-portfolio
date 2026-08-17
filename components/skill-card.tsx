import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Skill } from "@/data/portfolio";
import { Star } from "lucide-react";

export function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  const maxStars = 5;

  return (
    <Card className="group h-full transition-colors hover:ring-1 hover:ring-primary/50">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="flex items-center gap-2.5 text-lg">
            <Icon className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
            {skill.name}
          </CardTitle>
          
          {/* Star Rating */}
          <div className="flex items-center gap-0.5" aria-label={`Skill level: ${skill.level} out of 5`}>
            {Array.from({ length: maxStars }).map((_, index) => {
              const isFilled = index < skill.level;
              return (
                <Star
                  key={index}
                  className={`size-3.5 ${
                    isFilled
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted-foreground/30"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">{skill.description}</p>
      </CardContent>
    </Card>
  );
}