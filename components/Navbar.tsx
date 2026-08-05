"use client";

import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "CV", href: "#cv" },
];

const email = "gh.pak@yonsei.ac.kr";

export default function Navbar() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-white transition hover:text-cyan-400"
        >
          Gyuhyeon Pak
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={copyEmail}
          className="min-w-28 rounded-lg border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          aria-label="Copy email address"
        >
          {copied ? "Email Copied!" : "Contact Email"}
        </button>
      </nav>
    </header>
  );
}