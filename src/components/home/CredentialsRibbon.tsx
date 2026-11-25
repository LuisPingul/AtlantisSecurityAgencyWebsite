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
    label: "Statutory Compliant",
    code: "SSS · PhilHealth · Pag-IBIG · BIR",
    icon: CheckCircle2,
  },
];

export function CredentialsRibbon() {
  const { openComplianceModal } = useComplianceModal();

  return (
    <section
      aria-label="Regulatory compliance highlights"
      className="border-y border-[#1B1654]/12 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
          <div className="grid w-full flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_BADGES.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 rounded-xl border border-[#1B1654]/10 bg-[#F6F5F0] px-4 py-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#16123D] text-[#E5B63B]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#11102B]">
                      {badge.label}
                    </p>
                    <p className="truncate font-mono text-[11px] font-medium text-[#4A4968]">
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
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#16123D] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F5D576] shadow-sm transition-colors hover:bg-[#231C68]"
          >
            <ShieldCheck className="h-4 w-4 text-[#E5B63B]" />
            <span>Inspect Full Registry</span>
          </button>
        </div>
      </div>
    </section>
  );
}
