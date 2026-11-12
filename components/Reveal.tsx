"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Fades children up the first time they scroll into view.
// The hidden state is CSS-only (.reveal), so content still shows if JS fails to load
// thanks to the <noscript> override in layout.tsx.
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number; // seconds, used to stagger siblings
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // One observer per element; it disconnects after the first reveal so it costs nothing later.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
