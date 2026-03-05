"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" }
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b border-transparent backdrop-blur supports-[backdrop-filter]:bg-bg/70",
        scrolled && "border-border"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="#home" className="group inline-flex items-center gap-2">
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">Jinxuan Mu</span>
          <span className="text-sm font-semibold tracking-tight sm:hidden">JM</span>
          <span className="text-accent opacity-0 transition group-hover:opacity-100">•</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            className="btn btn-secondary py-2"
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

