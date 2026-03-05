"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "#home", external: false },
  { label: "Case Studies", href: "#case-studies", external: false },
  { label: "Side Projects", href: "#side-projects", external: false },
  { label: "About", href: "#about", external: false },
  { label: "Blog", href: "https://jinxuanmu.github.io", external: true }
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onAnchorNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;

    const targetId = href.slice(1);
    const el = document.getElementById(targetId);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <header
      className={clsx(
        "site-header sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-bg/70",
        scrolled && "border-border"
      )}
    >
      <div className="container-page flex h-16 items-center">
        <a
          href="#home"
          onClick={onAnchorNavClick("#home")}
          className="group inline-flex items-center gap-2"
        >
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">Jinxuan Mu</span>
          <span className="text-sm font-semibold tracking-tight sm:hidden">JM</span>
          <span className="text-accent opacity-0 transition group-hover:opacity-100">•</span>
        </a>

        <div className="ml-auto flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={item.href.startsWith("#") ? onAnchorNavClick(item.href) : undefined}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="inline-flex items-center py-2 text-sm text-muted transition hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="/resume.pdf"
            className="nav-resume"
            download
            aria-label="Download resume PDF"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}

