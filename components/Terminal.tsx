"use client";

import { useEffect, useState } from "react";
import { terminalLines } from "@/data/site";

// OFFSETS[i] = number of characters that come before line i (computed once, not per render).
const OFFSETS = terminalLines.map((_, i) =>
  terminalLines.slice(0, i).reduce((sum, line) => sum + line.text.length, 0),
);
// Total characters across all lines; the typing effect counts up to this.
const TOTAL = terminalLines.reduce((sum, line) => sum + line.text.length, 0);

// Hero terminal that types its lines one character at a time.
export default function Terminal() {
  // How many characters (across all lines) are visible so far.
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    // Reduced motion: show everything at once on the next tick instead of animating.
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = calm ? TOTAL : 1;
    const id = window.setInterval(() => {
      setTyped((n) => {
        if (n >= TOTAL) {
          window.clearInterval(id);
          return n;
        }
        return Math.min(TOTAL, n + step);
      });
    }, 28);
    return () => window.clearInterval(id);
  }, []);

  // Each line shows the typed characters that fall after its starting offset.
  const rows = terminalLines.map((line, i) => {
    const visible = typed - OFFSETS[i];
    return { ...line, shown: line.text.slice(0, Math.max(0, visible)), started: visible > 0 };
  });

  return (
    <div className="float relative">
      <div aria-hidden className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3 font-mono text-xs text-muted">sriram@dev: ~</span>
        </div>
        {/* Fixed height so the card does not grow while text is typed. */}
        <div className="h-[19rem] p-5 font-mono text-[13px] leading-7" aria-label="Terminal summary of Sriram's stack and recent work">
          {rows.map((row, i) =>
            row.started ? (
              <p key={i} className={row.kind === "cmd" ? "mt-2 text-foreground first:mt-0" : "text-muted"}>
                {row.kind === "cmd" && <span className="text-accent">$ </span>}
                {row.shown}
              </p>
            ) : null,
          )}
          <span className="cursor-blink text-accent">▊</span>
        </div>
      </div>
    </div>
  );
}
