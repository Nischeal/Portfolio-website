"use client";

import { useRef, useState, type FormEvent } from "react";
import { INQUIRY_COPY, OPPORTUNITY_TYPES } from "@/data/inquiry";
import { WEB3FORMS_KEY } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";
type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const label = "block font-mono text-xs uppercase tracking-widest text-muted mb-2";
const input =
  "w-full rounded-[2px] border bg-page px-4 py-3 text-headline placeholder:text-muted/70 transition-colors focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-olive";

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!String(data.get("name") ?? "").trim()) errors.name = "Please add your name.";
  const email = String(data.get("email") ?? "").trim();
  if (!email) errors.email = "Please add your email so I can reply.";
  else if (!EMAIL_RE.test(email)) errors.email = "That email doesn't look right.";
  if (String(data.get("message") ?? "").trim().length < 10) errors.message = "Please write a little more (10 characters or so).";
  return errors;
}

/**
 * Inquiry form (Phase 4). Validates in the browser, then posts JSON to Web3Forms from the browser
 * (static export: no server). States idle → sending → sent / error are announced politely.
 * Spam: Web3Forms' `botcheck` honeypot, hidden from people and assistive tech.
 */
export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      if (!WEB3FORMS_KEY) throw new Error("Web3Forms key missing (src/data/site.ts)");
      const type = String(data.get("type") ?? "");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio inquiry: ${type}`,
          from_name: "Portfolio inquiry form",
          name: String(data.get("name")).trim(),
          email: String(data.get("email")).trim(),
          opportunity: type,
          message: String(data.get("message")).trim(),
          botcheck: data.get("botcheck") ? true : false,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (!res.ok || !json.success) throw new Error(`Web3Forms responded ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch (err) {
      console.warn("[inquiry]", err);
      setStatus("error");
    }
  };

  const fieldProps = (field: Field) => ({
    id: `inquiry-${field}`,
    name: field,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `inquiry-${field}-error` : undefined,
    onInput: () => errors[field] && setErrors((prev) => ({ ...prev, [field]: undefined })),
  });

  const errorText = (field: Field) =>
    errors[field] ? (
      <p id={`inquiry-${field}-error`} className="mt-2 text-sm text-olive-dark">
        {errors[field]}
      </p>
    ) : null;

  const border = (field: Field) => (errors[field] ? "border-olive-dark" : "border-hairline");

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      aria-label="Inquiry form"
      className="rounded-[3px] border border-hairline bg-card p-6 sm:p-9 shadow-[0_18px_44px_rgba(28,25,23,0.06)] space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inquiry-name" className={label}>
            Name
          </label>
          <input {...fieldProps("name")} type="text" autoComplete="name" className={`${input} ${border("name")}`} />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor="inquiry-email" className={label}>
            Email
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            className={`${input} ${border("email")}`}
          />
          {errorText("email")}
        </div>
      </div>

      <div>
        <label htmlFor="inquiry-type" className={label}>
          Opportunity type
        </label>
        <div className="relative">
          <select id="inquiry-type" name="type" defaultValue={OPPORTUNITY_TYPES[0]} className={`${input} border-hairline appearance-none pr-10`}>
            {OPPORTUNITY_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <span aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
            ▾
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="inquiry-message" className={label}>
          Message
        </label>
        <textarea {...fieldProps("message")} rows={6} className={`${input} ${border("message")} resize-y min-h-36`} />
        {errorText("message")}
      </div>

      {/* Honeypot for bots (Web3Forms botcheck): not shown, not focusable, not announced */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 min-h-11 rounded-full bg-olive hover:bg-olive-dark disabled:opacity-60 disabled:cursor-wait px-7 font-mono text-xs tracking-wider text-white shadow-[0_4px_16px_rgba(74,93,78,0.22)] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
        >
          {status === "sending" ? INQUIRY_COPY.sending : INQUIRY_COPY.submit}
        </button>
        <p role="status" aria-live="polite" className={`text-sm leading-relaxed ${status === "error" ? "text-olive-dark" : "text-body"}`}>
          {status === "sent" ? INQUIRY_COPY.sent : status === "error" ? INQUIRY_COPY.error : ""}
        </p>
      </div>
    </form>
  );
}
