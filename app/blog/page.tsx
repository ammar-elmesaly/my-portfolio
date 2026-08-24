import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { HoverLift } from "@/components/motion/hover-lift";

export const metadata = {
  title: "Blog — Ammar Elmesaly",
  description: "Writing on backend engineering, systems, and things I'm building.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-6">
      <FadeIn className="space-y-6">
        <SectionHeading title="Blog" />
        {posts.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <HoverLift key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-xl"
                >
                  <Card className="h-full transition-colors hover:ring-primary/50">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between gap-2 text-lg">
                        {post.title}
                        <ArrowUpRight className="size-5 shrink-0 text-muted-foreground" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-base text-muted-foreground">{post.excerpt}</p>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="rounded bg-muted px-2 py-0.5 font-mono text-sm text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <time dateTime={post.date} className="text-sm text-muted-foreground shrink-0">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </HoverLift>
            ))}
          </div>
        ) : (
          <p className="text-base text-muted-foreground">No posts yet — check back soon.</p>
        )}
      </FadeIn>
    </main>
  );
}