"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Shield,
  Sparkles,
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
    <section className="bg-[#F6F5F0] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="The Atlantis Difference"
            title="Why Guard Welfare Is"
            highlight="Your Strongest Defense"
            description="Low-cost agencies cut corners on guard pay, causing fatigue, absenteeism, and high turnover. Atlantis invests in its officers first—creating a proven performance multiplier at every client post."
          />
          <Link
            href="/welfare-standards"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-[#1B1654]/20 bg-white px-5 py-3 text-sm font-bold text-[#11102B] shadow-sm transition-colors hover:border-[#E5B63B] hover:bg-[#16123D] hover:text-white lg:self-end"
          >
            <span>Explore Welfare &amp; Training Standards</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Interactive 4-Stage Progression: From Welfare to Performance */}
        <div className="mt-12 rounded-2xl border border-[#1B1654]/12 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1B1654]/10 pb-5">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1B1654]">
                From Welfare to Performance
              </p>
              <p className="mt-1 text-sm text-[#4A4968]">
                Select each stage to trace how officer care directly strengthens site security.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] font-semibold text-[#16123D]">
              {COMPANY.excellenceFormula.map((term, i) => (
                <span key={term} className="inline-flex items-center gap-1.5">
                  <span className="rounded-md bg-[#F6F5F0] px-2 py-1">{term}</span>
                  {i < COMPANY.excellenceFormula.length - 1 ? (
                    <span className="text-[#C6921E]">+</span>
                  ) : (
                    <span className="text-[#C6921E]">= Excellence</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Stage Selector Pills */}
          <div
            role="tablist"
            aria-label="Welfare to Performance progression stages"
            className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
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
                  className={`group flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
                    isActive
                      ? "border-[#E5B63B] bg-[#16123D] text-white shadow-md shadow-[#16123D]/20"
                      : "border-[#1B1654]/12 bg-[#F6F5F0]/70 text-[#11102B] hover:border-[#1B1654]/35 hover:bg-white"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isActive ? "text-[#F5D576]" : "text-[#B8861A]"
                      }`}
                    >
                      STAGE {stage.step}
                    </span>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isActive ? "bg-[#00C2F0]" : "bg-[#1B1654]/20"
                      }`}
                    />
                  </div>
                  <p className="mt-2 text-base font-extrabold">{stage.title}</p>
                  <p
                    className={`mt-1 text-xs ${
                      isActive ? "text-slate-300" : "text-[#4A4968]"
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
            className="mt-6 grid gap-6 rounded-xl border border-[#1B1654]/10 bg-[#F6F5F0] p-6 lg:grid-cols-12"
          >
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#1B1654]">
                <Sparkles className="h-4 w-4 text-[#C6921E]" />
                <span>
                  Stage {current.step} — {current.title}
                </span>
              </div>
              <p className="mt-3 text-base leading-relaxed text-[#11102B]">
                {current.description}
              </p>
            </div>
            <div className="flex flex-col justify-center rounded-xl border border-[#E5B63B]/40 bg-[#16123D] p-5 text-white lg:col-span-5">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00C2F0]">
                Direct Client Advantage
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-white">
                {current.clientOutcome}
              </p>
            </div>
          </div>
        </div>

        {/* 7 Guard Welfare Commitments + Barangay Volunteer Advocacy */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Left: 7 Welfare Commitments */}
          <div className="rounded-2xl border border-[#1B1654]/12 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#16123D] text-[#E5B63B]">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#11102B]">
                  Our 7 Guard Welfare Commitments
                </h3>
                <p className="text-xs text-[#4A4968]">
                  Every officer on our roster is {ATLANTIS_DIFFERENCE.join(", ").toLowerCase()}.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {WELFARE_COMMITMENTS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 rounded-xl border border-[#1B1654]/8 bg-[#F6F5F0]/75 p-3.5"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1B1654]" />
                  <div>
                    <p className="text-sm font-bold text-[#11102B]">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#4A4968]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Barangay Volunteer-Based Initiative */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E5B63B]/35 bg-[#120F34] p-6 text-white shadow-lg sm:p-8 lg:col-span-5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00C2F0]/40 bg-[#00C2F0]/15 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#00C2F0]">
                <HeartHandshake className="h-3.5 w-3.5" />
                <span>{COMMUNITY_ADVOCACY.badge}</span>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white">
                {COMMUNITY_ADVOCACY.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {COMMUNITY_ADVOCACY.description}
              </p>

              <ul className="mt-5 space-y-3">
                {COMMUNITY_ADVOCACY.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Users2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E5B63B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-[#F5D576]">
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
