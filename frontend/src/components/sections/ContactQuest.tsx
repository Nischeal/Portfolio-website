"use client";

import { useState } from "react";
import { SystemWindow } from "@/components/ui/SystemWindow";

export function ContactQuest() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    objective: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end preview state
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="font-mono text-xs text-cyan-400 tracking-widest mb-1">
            COMMUNICATION PROTOCOL // INQUIRY
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-wide">
            CONTACT QUEST
          </h2>
        </div>
        <span className="font-mono text-xs text-emerald-400 border border-emerald-500/20 px-3 py-1 bg-emerald-500/10">
          RECEPTOR: ONLINE
        </span>
      </div>

      <SystemWindow
        title="QUEST FORM // TRANSMISSION"
        subtitle="ESTIMATED RESPONSE: &lt; 24 HOURS"
        statusBadge="READY"
        glowColor="cyan"
      >
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full border border-cyan-400 bg-cyan-400/10 flex items-center justify-center mx-auto text-cyan-400 text-xl font-mono">
              ✓
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">
              QUEST TRANSMISSION RECEIVED
            </h3>
            <p className="font-mono text-xs text-slate-300 max-w-md mx-auto">
              Your message has been logged into the queue. I will review your requirements and respond shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="font-mono text-xs text-cyan-400 border border-cyan-400/30 px-4 py-2 hover:bg-cyan-500/10 transition-colors"
            >
              [ TRANSMIT ANOTHER MESSAGE ]
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs text-slate-400 block">
                  HUNTER / SENDER NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Recruiter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-2.5 font-mono text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-slate-400 block">
                  TRANSMISSION FREQUENCY (EMAIL) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-2.5 font-mono text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-slate-400 block">
                QUEST OBJECTIVE / MESSAGE *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe your engineering role, project challenge, or collaboration proposal..."
                value={formData.objective}
                onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/10 px-4 py-2.5 font-mono text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="font-mono text-[11px] text-slate-500">
                🔒 Direct transmission // Zero spam guarantee
              </span>
              <button
                type="submit"
                className="font-mono text-xs font-semibold bg-cyan-500/10 border border-cyan-400 text-cyan-300 px-6 py-3 hover:bg-cyan-500/20 transition-all shadow-[0_0_15px_rgba(34,211,238,0.25)]"
              >
                [ ACCEPT QUEST &amp; TRANSMIT ]
              </button>
            </div>
          </form>
        )}
      </SystemWindow>
    </section>
  );
}
