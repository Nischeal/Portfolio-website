import { KathmanduClock } from "@/components/ui/KathmanduClock";
import { SeasonSwitch } from "@/components/ui/SeasonSwitch";
import { CONTACT_EMAIL } from "@/data/site";

// Approved copy (docs/portfolio-v1/plan.md, Phase 5).
const SECTIONS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Inquiry", href: "#inquiry" },
];
const ELSEWHERE = [
  { label: "GitHub", href: "https://github.com/Nischeal", external: true },
  { label: "Email", href: `mailto:${CONTACT_EMAIL}`, external: false },
];

const head = "font-mono text-xs uppercase tracking-widest text-page/65";
const link =
  "inline-flex items-center gap-1.5 min-h-11 text-page/85 hover:text-page underline-offset-[6px] decoration-page/40 hover:underline transition-colors rounded-[2px] focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-page";

/**
 * Site footer: the design-taste skill's `footer-dark` recipe on our own tokens, inverted (espresso band,
 * linen type; no new colours, ADR 032). The Inquiry form above is the page's close, so there's no extra CTA.
 */
export function SiteFooter() {
  const year = new Date().getFullYear(); // static export: fixed at build time

  return (
    <footer className="closing relative z-10 bg-headline text-page">
      <div className="px-6 max-w-6xl mx-auto w-full pt-24 sm:pt-32 pb-10">
        {/* Row 1: name + lede, then the two link columns */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-14 gap-y-12">
          <div className="col-span-2 lg:col-span-5 space-y-4">
            <p className="font-signature text-[1.9rem] sm:text-5xl leading-none">Nischal</p>
            <p className="font-serif text-xl sm:text-2xl text-page/85">Full-stack &amp; backend engineer, Kathmandu.</p>
          </div>

          <nav aria-label="Footer" className="col-span-2 lg:col-span-7 grid grid-cols-2 gap-x-14 gap-y-10">
            <div>
              <h2 className={head}>Sections</h2>
              <ul className="mt-4">
                {SECTIONS.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={link}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={head}>Elsewhere</h2>
              <ul className="mt-4">
                {ELSEWHERE.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={link}
                    >
                      {item.label}
                      <span aria-hidden="true">↗</span>
                      {item.external && <span className="sr-only"> (opens in a new tab)</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Row 2: legal row */}
        <div className="mt-16 pt-6 border-t border-page/15 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between font-mono text-xs tracking-wider text-page/65">
          <p>© {year} Nischal Basnet</p>
          <p>
            <KathmanduClock />
          </p>
          <SeasonSwitch />
        </div>

        {/* Row 3: the name set wide (decorative type moment; the Phase 6 Monarch doorway attaches here).
            Solid mixed colour, not alpha, so overlapping script strokes don't show seams. */}
        <p
          aria-hidden="true"
          data-monarch-doorway
          className="cursor-pointer mt-10 sm:mt-12 -mb-6 font-signature leading-[1.2] text-[color-mix(in_srgb,var(--bg-page)_16%,var(--text-headline))] select-none text-[6.7rem] sm:text-[12.6rem] md:text-[15.4rem] lg:text-[21rem] xl:text-[24rem] whitespace-nowrap"
        >
          Nischal
        </p>
      </div>
    </footer>
  );
}
