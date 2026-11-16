import { ABOUT_BLOCKS, ABOUT_HEADING } from "@/data/about";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="px-6 max-w-6xl mx-auto w-full">
      <p className="font-mono text-[11px] text-muted tracking-widest uppercase">02 // About</p>
      <h2 id="about-heading" className="font-serif text-headline">
        {ABOUT_HEADING}
      </h2>

      <dl>
        {ABOUT_BLOCKS.map((block) => (
          <div key={block.label}>
            <dt className="font-mono text-xs text-dim uppercase tracking-widest">{block.label}</dt>
            <dd className="text-body">{block.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
