"use client";

import { useEffect } from "react";

// Soft glow that follows the mouse across the whole page.
// It only sets two CSS variables on <html>; the glow itself is drawn in globals.css.
export default function Spotlight() {
  useEffect(() => {
    // Skip on touch devices and for users who asked for reduced motion.
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const paint = () => {
      frame = 0;
      const root = document.documentElement;
      root.style.setProperty("--mx", `${x}px`);
      root.style.setProperty("--my", `${y}px`);
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div aria-hidden className="spotlight" />;
}
