"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "PROFILE", href: "#profile" },
    { label: "ARMORY", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "QUEST // CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A14]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm tracking-wider text-white hover:text-cyan-400 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-bold">NISCHAL</span>
          <span className="text-slate-400">// SYS.ARCHITECT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors tracking-widest relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 px-3 py-1 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-all text-xs"
          >
            GITHUB ↗
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden font-mono text-xs text-slate-300 hover:text-white p-2 border border-white/10 rounded"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? "[CLOSE]" : "[MENU]"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0D0D1A] px-6 py-6 font-mono text-xs space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 py-1"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 border border-white/10 px-3 py-1.5 text-slate-200"
          >
            GITHUB ↗
          </a>
        </div>
      )}
    </header>
  );
}
