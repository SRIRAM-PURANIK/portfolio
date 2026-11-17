"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

type Link = { href: string; label: string };

// Sticky top bar. The link for the section currently on screen gets a pill behind it.
export default function Header({ links }: { links: Link[] }) {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    let frame = 0;
    // The active section is the last one whose top has passed 40% of the screen height.
    // Above the first section (the intro) nothing is highlighted.
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      const line = window.innerHeight * 0.4;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [links]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-line/80 bg-bg/75 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="group font-mono text-sm font-medium tracking-tight">
          sriram<span className="text-accent transition-colors group-hover:text-accent-2">.</span>puranik
        </a>
        <nav aria-label="Sections" className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((l) => {
              const on = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={on ? "true" : undefined}
                    className={`rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                      on ? "bg-accent-bg text-accent" : "text-mute hover:text-text"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
