"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Craft", href: "#craft" },
    { label: "Inquiry", href: "#inquiry" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-page/85 backdrop-blur-md border-b border-hairline/70 transition-colors duration-400">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Fluid Signature Brand Mark */}
        <Link
          href="/"
          className="font-signature text-3xl sm:text-4xl text-headline hover:text-olive transition-colors leading-none pt-1 select-none"
        >
          Nischal
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-body hover:text-headline tracking-wider transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-olive transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Olive Pill Action Button */}
          <Link
            href="#inquiry"
            className="bg-olive hover:bg-olive-dark text-white font-mono text-xs px-5 py-2 rounded-full tracking-wider transition-all shadow-[0_2px_10px_rgba(74,93,78,0.2)]"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden font-mono text-xs text-body hover:text-headline px-3 py-1.5 border border-hairline rounded-full bg-card/50"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? "[ Close ]" : "[ Menu ]"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-page border-b border-hairline px-8 py-8 space-y-5 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-serif text-2xl text-headline hover:text-olive transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-hairline">
            <Link
              href="#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block bg-olive text-white font-mono text-xs px-6 py-2.5 rounded-full tracking-wider"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
