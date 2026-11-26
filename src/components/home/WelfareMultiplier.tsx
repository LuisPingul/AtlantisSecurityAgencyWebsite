"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Shield,
  Users2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { COMPANY } from "@/data/company";
import {
  ATLANTIS_DIFFERENCE,
  COMMUNITY_ADVOCACY,
  WELFARE_COMMITMENTS,
  WELFARE_STAGES,
} from "@/data/welfare";

export function WelfareMultiplier() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = WELFARE_STAGES[activeIndex];

  return (
    <section className="bg-[#F5F3EE] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="The Atlantis Difference"
            title="Why Guard Welfare Is"
            highlight="Your Strongest Defense"
            description="Low-cost agencies cut corners on guard pay, causing fatigue, absenteeism, and high turnover. Atlantis invests in its officers first—creating a measurable performance multiplier at every client post."
          />
          <Link
            href="/welfare-standards"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1324] transition-colors hover:border-[#0C182E] hover:bg-[#0C182E] hover:text-white lg:self-end"
          >
            <span>Explore Welfare &amp; Training Standards</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Interactive 4-Stage Progression: From Welfare to Performance */}
        <div className="mt-12 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-6 py-4 sm:px-8">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6510]">
                From Welfare to Performance
              </p>
              <p className="mt-0.5 text-sm text-[#475569]">
                Select each stage to trace how officer care directly strengthens site security.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] font-medium text-[#0B1324]">
              {COMPANY.excellenceFormula.map((term, i) => (
                <span key={term} className="inline-flex items-center gap-1.5">
                  <span className="rounded-sm border border-slate-200 bg-[#F5F3EE] px-2 py-0.5">
                    {term}
                  </span>
                  {i < COMPANY.excellenceFormula.length - 1 ? (
                    <span className="text-[#8A6510]">+</span>
                  ) : (
                    <span className="font-semibold text-[#8A6510]">= Excellence</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Stage Selector Ledger */}
          <div
            role="tablist"
            aria-label="Welfare to Performance progression stages"
            className="grid grid-cols-1 divide-y divide-slate-200 border-b border-slate-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x"
          >
            {WELFARE_STAGES.map((stage, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={stage.step}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex flex-col items-start p-5 text-left transition-colors ${
                    isActive
                      ? "bg-[#0C182E] text-white"
                      : "bg-white text-[#0B1324] hover:bg-[#F5F3EE]"
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-semibold tabular-nums ${
                      isActive ? "text-[#E3BC5A]" : "text-[#8A6510]"
                    }`}
                  >
                    STAGE {stage.step}
                  </span>
                  <p className="mt-1.5 text-base font-bold">{stage.title}</p>
                  <p
                    className={`mt-1 text-xs ${
                      isActive ? "text-slate-300" : "text-[#475569]"
                    }`}
                  >
                    {stage.metric}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Panel */}
          <div
            role="tabpanel"
            className="grid gap-6 bg-[#F5F3EE]/60 p-6 sm:p-8 lg:grid-cols-12"
          >
            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8A6510]">
                Stage {current.step} — {current.title}
              </p>
              <p className="mt-2.5 max-w-[60ch] text-base leading-relaxed text-[#0B1324]">
                {current.description}
              </p>
            </div>
            <div className="flex flex-col justify-center rounded-md border border-slate-200 bg-white p-5 lg:col-span-5">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A6510]">
                Direct Client Advantage
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-[#0B1324]">
                {current.clientOutcome}
              </p>
            </div>
          </div>
        </div>

        {/* 7 Guard Welfare Commitments + Barangay Volunteer Advocacy */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Left: 7 Welfare Commitments */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
            <div className="flex items-start gap-3 border-b border-slate-200 pb-5">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[#8A6510]" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-bold text-[#0B1324]">
                  Our 7 Guard Welfare Commitments
                </h3>
                <p className="mt-0.5 text-xs text-[#475569]">
                  Every officer on our roster is {ATLANTIS_DIFFERENCE.join(", ").toLowerCase()}.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {WELFARE_COMMITMENTS.map((item) => (
                <div key={item.title} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6510]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#0B1324]">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#475569]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Barangay Volunteer-Based Initiative */}
          <div className="flex flex-col justify-between rounded-lg border border-[#0C182E] bg-[#0C182E] p-6 text-white sm:p-8 lg:col-span-5">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
                <HeartHandshake className="h-4 w-4 text-[#C89B2B]" aria-hidden="true" />
                <span>{COMMUNITY_ADVOCACY.badge}</span>
              </div>

              <h3 className="mt-3 text-2xl font-bold leading-snug text-white">
                {COMMUNITY_ADVOCACY.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {COMMUNITY_ADVOCACY.description}
              </p>

              <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                {COMMUNITY_ADVOCACY.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Users2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C89B2B]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/10 pt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#E3BC5A]">
                Community-Rooted Protection
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                Organizing a barangay fiesta, civic assembly, or public safety drive? Coordinate with our Davao or Kidapawan desk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
