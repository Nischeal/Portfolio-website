import { ABOUT_BLOCKS, ABOUT_HEADING } from "@/data/about";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-6 max-w-6xl mx-auto w-full pt-12 sm:pt-16 pb-24 sm:pb-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left: counter + heading */}
        <div className="lg:col-span-4 space-y-5">
          <p aria-hidden="true" className="flex items-center gap-2.5 font-mono text-[11px] text-muted tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-olive" />
            <span>02 // About</span>
          </p>
          <h2
            id="about-heading"
            className="font-serif text-5xl sm:text-6xl font-semibold tracking-tight text-headline leading-[1.02]"
          >
            {ABOUT_HEADING}
          </h2>
        </div>

        {/* Right: label + text rows divided by hairlines */}
        <dl className="lg:col-span-8 border-t border-hairline divide-y divide-hairline">
          {ABOUT_BLOCKS.map((block) => (
            <div
              key={block.label}
              className="grid grid-cols-1 sm:grid-cols-[9.5rem_1fr] gap-x-8 gap-y-3 py-8 sm:py-10"
            >
              <dt className="font-mono text-xs text-muted uppercase tracking-widest sm:pt-1.5">
                {block.label}
              </dt>
              <dd className="text-body text-lg leading-relaxed max-w-prose">{block.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
