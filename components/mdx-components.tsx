import type { MDXComponents } from "mdx/types";

/* Maps mdx componenets to match the project's theme */
export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-4" {...props} />,
  h3: (props) => <h3 className="text-xl font-semibold tracking-tight mt-8 mb-3" {...props} />,
  p: (props) => (
    <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4" {...props} />
  ),
  a: (props) => (
    <a className="text-primary underline underline-offset-4 hover:no-underline" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc list-outside ml-5 space-y-1.5 mb-4 text-base text-zinc-600 dark:text-zinc-400" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-outside ml-5 space-y-1.5 mb-4 text-base text-zinc-600 dark:text-zinc-400" {...props} />
  ),
  code: (props) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm" {...props} />
  ),
  pre: (props) => (
    <pre className="rounded-lg bg-muted p-4 overflow-x-auto mb-4 font-mono text-sm" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground mb-4" {...props} />
  ),
};