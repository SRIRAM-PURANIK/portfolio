"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";

// Fixed top navigation. Highlights the section currently on screen and
// collapses into a toggle menu on small screens.
export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // The band in the middle of the viewport decides which section counts as "current".
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const link of navLinks) {
      const section = document.querySelector(link.href);
      if (section) io.observe(section);
    }
    return () => io.disconnect();
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
        <a href="#top" aria-label="Back to top" className="flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-border">
            <Image src="/profile.jpg" alt="" fill sizes="36px" className="object-cover object-[center_25%]" priority />
          </span>
          <span className="font-mono text-sm text-muted">sriram puranik</span>
        </a>

        <div className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={`text-sm transition-colors duration-200 hover:text-accent ${
                active === link.href ? "text-accent" : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="cursor-pointer rounded-full border border-border px-4 py-1.5 text-sm md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            // Close the menu after a tap so the section is not hidden behind it.
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-2.5 text-muted hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
