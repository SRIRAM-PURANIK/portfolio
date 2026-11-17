"use client";

import { useEffect, useRef } from "react";

// One component wires up every page-wide effect, so there is a single pointer
// listener and a single scroll observer instead of one per element.
export default function Effects() {
  const bar = useRef<HTMLDivElement>(null);
  const spot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Scroll reveal: add .is-visible once an element enters the screen, then stop watching it.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Pause each moving strip while it is off screen, so the browser only animates what you can see.
    const strips = new IntersectionObserver((entries) => {
      for (const e of entries) e.target.classList.toggle("is-paused", !e.isIntersecting);
    });
    document.querySelectorAll("[data-marquee]").forEach((el) => strips.observe(el));

    // 2. Cursor light: only on devices with a real mouse; updates batched to one per frame.
    const fine = window.matchMedia("(pointer: fine)").matches;
    let frame = 0;
    let px = 0;
    let py = 0;
    let target: Element | null = null;
    const paint = () => {
      frame = 0;
      // Move the glow with transform only: the GPU slides an existing layer, nothing is repainted.
      if (spot.current) spot.current.style.transform = `translate3d(${px - 350}px, ${py - 350}px, 0)`;
      const card = target?.closest<HTMLElement>(".spot-card");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${px - r.left}px`);
        card.style.setProperty("--my", `${py - r.top}px`);
      }
    };
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      target = e.target as Element;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });

    // 3. Reading progress bar at the very top.
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      strips.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={spot} className="page-spotlight hidden [@media(pointer:fine)]:block" style={{ transform: "translate3d(-999px,-999px,0)" }} aria-hidden="true" />
      <div
        ref={bar}
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-accent to-accent-2"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />
    </>
  );
}
