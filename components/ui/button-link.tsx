import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  className?: string;
}

export function ButtonLink({ href, children, className, ...props }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant: "link" }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}