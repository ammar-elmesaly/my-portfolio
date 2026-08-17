import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <h2 className={cn("text-2xl font-semibold tracking-tight", className)}>
      {title}
    </h2>
  );
}
