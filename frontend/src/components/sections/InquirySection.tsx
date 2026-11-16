import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { INQUIRY_COPY, INQUIRY_HEADING, INQUIRY_INTRO } from "@/data/inquiry";
import { CONTACT_EMAIL } from "@/data/site";

const ghost =
  "inline-flex items-center gap-2 min-h-11 rounded-full border border-border-muted bg-card px-5 font-mono text-xs uppercase tracking-widest text-headline hover:border-headline hover:-translate-y-0.5 transition-all cursor-pointer focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive";

export function InquirySection() {
  return (
    <section
      id="inquiry"
      aria-labelledby="inquiry-heading"
      className="px-6 max-w-6xl mx-auto w-full pt-12 sm:pt-16 pb-24 sm:pb-32"
    >
      {/* 5/7 like About and Works. Phones: heading → intro → form → direct (display: contents + order). */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-14 gap-y-10 items-start">
        <div className="contents lg:block lg:col-span-5 lg:space-y-10">
          <div className="order-1 space-y-5">
            <p aria-hidden="true" className="flex items-center gap-2.5 font-mono text-[11px] text-muted tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-olive" />
              <span>05 // Inquiry</span>
            </p>
            <h2
              id="inquiry-heading"
              className="font-serif text-5xl sm:text-6xl font-semibold tracking-tight text-headline leading-[1.02]"
            >
              {INQUIRY_HEADING}
            </h2>
            <p className="text-body text-lg leading-relaxed max-w-md">{INQUIRY_INTRO}</p>
          </div>

          <div className="order-3 border-t border-hairline pt-6 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">Direct</p>
            <p className="font-serif text-2xl sm:text-[1.7rem] text-headline break-all [font-variant-numeric:lining-nums]">{CONTACT_EMAIL}</p>
            <div className="flex flex-wrap gap-3">
              <CopyEmailButton email={CONTACT_EMAIL} label={INQUIRY_COPY.copy} copiedLabel={INQUIRY_COPY.copied} className={ghost} />
              <a href={`mailto:${CONTACT_EMAIL}`} className={ghost}>
                {INQUIRY_COPY.mail}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="order-2 lg:col-span-7 lg:pt-3.5">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
