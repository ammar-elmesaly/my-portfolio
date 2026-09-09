import { Mail } from "lucide-react";
import { SiGithub, SiLinkerd, SiYoutube } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between text-base text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.socials.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <BsLinkedin className="size-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground transition-colors"
          >
            <SiGithub className="size-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-foreground transition-colors"
          >
            <SiYoutube className="size-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.socials.email}`}
            aria-label="Email"
            className="hover:text-foreground transition-colors"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}