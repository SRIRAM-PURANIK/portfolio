import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts live in app/fonts and are served by this site, so no visitor request
// goes to a third party. Both are open-source (SIL Open Font License).
const body = localFont({ src: "./fonts/inter-latin-wght-normal.woff2", variable: "--font-body", weight: "100 900", display: "swap" });
const code = localFont({ src: "./fonts/jetbrains-mono-latin-wght-normal.woff2", variable: "--font-code", weight: "100 800", display: "swap" });

export const metadata: Metadata = {
  title: "Sriram Puranik | Full-Stack Developer",
  description: "Full-stack developer in Bengaluru building web applications with Node.js, Express, React and PostgreSQL.",
  // Work in progress: ask search engines not to list the site yet. Remove this line to go public.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#070b12",
};

// Runs before the page paints: dark by default, light only if the visitor chose it before.
const themeScript = `(function(){var t="dark";try{if(localStorage.getItem("theme")==="light")t="light"}catch(e){}document.documentElement.dataset.theme=t})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The theme attribute is set by the script above, so React must not complain that it differs.
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* With JavaScript off, scroll-reveal content would stay hidden; this shows it. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.timeline-line{transform:none!important}`}</style>
        </noscript>
      </head>
      <body className={`${body.variable} ${code.variable} antialiased`}>{children}</body>
    </html>
  );
}
