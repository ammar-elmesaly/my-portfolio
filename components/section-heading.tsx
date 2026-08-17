import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-5 w-1 rounded-full bg-primary" />
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}