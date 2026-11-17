"use client";

import Lenis from "lenis";
import { useEffect } from "react";

// Gives mouse-wheel scrolling an eased, gliding feel and smooth-scrolls the #section links.
// Touch devices keep their native scrolling, and reduced-motion visitors are left alone.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.11, smoothWheel: true, anchors: { offset: -72 } });
    let id = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return null;
}
