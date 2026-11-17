"use client";

import { useEffect, useState } from "react";

// Cycles through a list of words every few seconds; the key change replays the slide-in.
export default function RotatingWord({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="inline-flex items-baseline">
      {/* Screen readers get the full list once instead of hearing every change. */}
      <span className="sr-only">{words.join(", ")}</span>
      <span key={i} className="word-swap inline-block text-accent" aria-hidden="true">
        {words[i]}
      </span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
