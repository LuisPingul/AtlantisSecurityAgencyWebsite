"use client";

import { Award, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";
import { useComplianceModal } from "@/components/layout/SiteShell";

const QUICK_BADGES = [
  {
    label: "PNP-SOSIA LTO",
    code: "PSA-WGS-M00770-2025",
    icon: ShieldCheck,
  },
  {
    label: "PADPAO Member",
    code: "Region XII · Est. Jan 2026",
    icon: Award,
  },
  {
    label: "DOLE OSH Reg.",
    code: "Reg. No. R12-047",
    icon: FileCheck2,
  },
  {
    label: "Statutory Remittance",
    code: "SSS · PhilHealth · Pag-IBIG · BIR",
    icon: CheckCircle2,
  },
];

export function CredentialsRibbon() {
  const { openComplianceModal } = useComplianceModal();

  return (
    <section
      aria-label="Regulatory compliance highlights"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-stretch justify-between gap-5 lg:flex-row lg:items-center">
          <div className="grid flex-1 grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {QUICK_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className={`flex items-start gap-3 py-3 sm:py-1 ${
                    idx > 0 ? "lg:pl-5" : ""
                  } ${idx < QUICK_BADGES.length - 1 ? "lg:pr-5" : ""}`}
                >
                  <Icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6510]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0B1324]">
                      {badge.label}
                    </p>
                    <p className="mt-0.5 truncate font-mono text-[11px] font-medium text-[#475569]">
                      {badge.code}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={openComplianceModal}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-[#0C182E] bg-[#0C182E] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#122342]"
          >
            <ShieldCheck className="h-4 w-4 text-[#E3BC5A]" aria-hidden="true" />
            <span>Inspect Full Registry</span>
          </button>
        </div>
      </div>
    </section>
  );
}
