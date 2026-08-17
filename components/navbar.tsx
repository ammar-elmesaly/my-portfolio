"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contributions", href: "#contributions" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <ButtonLink 
          href="/" 
          onClick={closeMenu}
          className="font-bold text-lg hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
        >
          elmesaly.dev
        </ButtonLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6 text-base font-medium text-zinc-600 dark:text-zinc-400">
            {NAV_ITEMS.map((item) => (
              <ButtonLink
                key={item.name}
                href={item.href}
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {item.name}
              </ButtonLink>
            ))}
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4 transition-all">
          <div className="flex flex-col gap-4 font-medium text-zinc-600 dark:text-zinc-400">
            {NAV_ITEMS.map((item) => (
              <ButtonLink
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors py-1"
              >
                {item.name}
              </ButtonLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}