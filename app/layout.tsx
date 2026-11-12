import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are stored in app/fonts and served from this site itself, so the build
// needs no network access and no visitor request ever goes to a third party.
// All three are open-source (SIL Open Font License).
const body = localFont({ src: "./fonts/inter-latin-wght-normal.woff2", variable: "--font-body", weight: "100 900", display: "swap" });
const display = localFont({ src: "./fonts/space-grotesk-latin-wght-normal.woff2", variable: "--font-display", weight: "300 700", display: "swap" });
const code = localFont({ src: "./fonts/jetbrains-mono-latin-wght-normal.woff2", variable: "--font-code", weight: "100 800", display: "swap" });

const siteUrl = "https://portfolio-xi-ochre-76.vercel.app";
const title = "Sriram Puranik | Full-Stack Developer";
const description =
  "Full-stack developer in Bengaluru building billing, wallet and scheduling systems with Node.js, PostgreSQL and React.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: siteUrl, type: "website" },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* If JavaScript is off, scroll-reveal content would stay hidden; this shows it. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className={`${body.variable} ${display.variable} ${code.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
