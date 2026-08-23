# Portfolio

Personal portfolio site — built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

**Live:** https://REPLACE_WITH_VERCEL_URL

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist Sans / Geist Mono via `next/font`
- **Hosting:** Vercel

## Notes

Statically prerendered — no server, no database. Section content lives in typed
arrays at the top of `app/page.tsx`, so adding a project or skill is a single
object, not new markup.

Animations are plain CSS keyframes rather than a motion library, and are
disabled under `prefers-reduced-motion`.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Author

Sriram Puranik — [github.com/SRIRAM-PURANIK](https://github.com/SRIRAM-PURANIK)