"use client";

import type { PointerEvent } from "react";
import type { Project } from "@/data/site";

// Project card with a glow that follows the mouse inside the card.
export default function ProjectCard({ project }: { project: Project }) {
  // Store the pointer position as CSS variables; the glow is drawn by .card-glow in globals.css.
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--cx", `${e.clientX - box.left}px`);
    e.currentTarget.style.setProperty("--cy", `${e.clientY - box.top}px`);
  };

  return (
    <article
      onPointerMove={onMove}
      className="card-glow group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{project.kind}</p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
            {tech}
          </li>
        ))}
      </ul>
      {project.repo && (
        // rel="noopener noreferrer" stops the opened tab from controlling this one.
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
        >
          View code <span aria-hidden>↗</span>
        </a>
      )}
    </article>
  );
}
