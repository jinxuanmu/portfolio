"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "#", external: false },
  { label: "Case Studies", href: "#case-studies", external: false },
  { label: "Side Projects", href: "#side-projects", external: false },
  { label: "About", href: "#about", external: false },
  { label: "Blog", href: "https://jinxuanmu.github.io", external: true }
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    if (!isHome) return;

    e.preventDefault();
    e.stopPropagation();

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "#");
      return;
    }

    const targetId = href.slice(1);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
  }, [isHome]);

  return (
    <header
      className={clsx(
        "site-header sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-bg/70",
        scrolled && "border-border"
      )}
    >
      <div className="container-page flex h-16 items-center">
        {isHome ? (
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="group inline-flex items-center gap-2 cursor-pointer"
          >
            <span className="hidden text-sm font-semibold tracking-tight sm:inline">Jinxuan Mu</span>
            <span className="text-sm font-semibold tracking-tight sm:hidden">JM</span>
            <span className="text-accent opacity-0 transition group-hover:opacity-100">•</span>
          </a>
        ) : (
          <Link
            href="/"
            className="group inline-flex items-center gap-2 cursor-pointer"
          >
            <span className="hidden text-sm font-semibold tracking-tight sm:inline">Jinxuan Mu</span>
            <span className="text-sm font-semibold tracking-tight sm:hidden">JM</span>
            <span className="text-accent opacity-0 transition group-hover:opacity-100">•</span>
          </Link>
        )}

        <div className="ml-auto flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center py-2 text-sm text-muted transition hover:text-text cursor-pointer"
                >
                  {item.label}
                </a>
              ) : isHome ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="inline-flex items-center py-2 text-sm text-muted transition hover:text-text cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href === "#" ? "/" : `/${item.href}`}
                  className="inline-flex items-center py-2 text-sm text-muted transition hover:text-text cursor-pointer"
                >
                  {item.label}
                </Link>
              )
            )}
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

