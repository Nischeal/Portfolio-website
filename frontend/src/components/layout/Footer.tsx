import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07070E] py-12 px-4 sm:px-6 mt-20 w-full">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-slate-300">NISCHAL BASNET</span>
          <span>// PORTFOLIO V1.0</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#profile" className="hover:text-cyan-400 transition-colors">
            TOP ↑
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GITHUB ↗
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LINKEDIN ↗
          </a>
        </div>

        <div>
          <span>© 2026 // ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}
