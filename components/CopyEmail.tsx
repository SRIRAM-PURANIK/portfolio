"use client";

import { useState } from "react";

// Copies the email address to the clipboard and confirms it for two seconds.
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (old browser, no permission): fall back to the mail app.
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="cursor-pointer rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
