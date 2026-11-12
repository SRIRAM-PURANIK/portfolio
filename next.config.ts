import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Content Security Policy: the browser refuses anything not listed here.
// 'unsafe-inline' is required because this site is statically generated and
// Next.js injects small inline scripts; a nonce-based policy would force every
// request to be rendered on the server. There is no user input, no backend and
// no third-party script on this site, so the inline allowance has nothing to exploit.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Force HTTPS for two years, including subdomains.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Stop the browser from guessing file types.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Block the site from being embedded in a frame (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Send only the origin, never the full URL, to other sites.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site needs no device features, so all are switched off.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  // Do not advertise the framework in an "X-Powered-By" response header.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
