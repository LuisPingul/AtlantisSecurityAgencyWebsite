"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { BASE_PATH, COMPANY } from "@/data/company";
import { useComplianceModal } from "@/components/layout/SiteShell";

export function HeroSection() {
  const { openComplianceModal } = useComplianceModal();

  return (
    <section className="relative overflow-hidden bg-imperial-mesh text-white">
      {/* Subtle Architectural Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15"
      >
        <Image
          src={`${BASE_PATH}/images/hero/night-architecture.jpg`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081120] via-[#081120]/92 to-[#0C182E]/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
              PNP-SOSIA Licensed · PADPAO Region XII · Est. {COMPANY.establishedYear}
            </p>

            <h1 className="mt-4 max-w-[16ch] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Your safety, our priority.
            </h1>

            <p className="mt-3 font-display text-base italic tracking-wide text-[#E3BC5A] sm:text-lg">
              &ldquo;{COMPANY.tagline}&rdquo;
            </p>

            <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-slate-300 sm:text-lg">
              {COMPANY.heroSubheadline}
            </p>

            {/* Primary & Secondary CTAs (Single primary action, clear subordinate secondary) */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact#proposal"
                className="bg-gold-metallic inline-flex min-h-12 items-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-[#081120] transition-colors sm:text-base"
              >
                <span>Request Free Site Assessment</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <a
                href="#services"
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.08] sm:text-base"
              >
                <span>Explore 10 Security Services</span>
              </a>
            </div>

            {/* Direct Dispatch Line */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300">
              <a
                href={`tel:${COMPANY.contacts.phones[0].tel}`}
                className="inline-flex items-center gap-1.5 font-mono font-semibold text-white transition-colors hover:text-[#E3BC5A]"
              >
                <PhoneCall className="h-3.5 w-3.5 text-[#C89B2B]" aria-hidden="true" />
                <span>Direct Command Desk: {COMPANY.contacts.phones[0].display}</span>
              </a>
              <span className="hidden text-white/25 sm:inline" aria-hidden="true">
                |
              </span>
              <span className="text-slate-400">
                100% Filipino-Owned Domestic Corporation
              </span>
            </div>

            {/* Executive Trust Metrics — Tabular Hairline Strip */}
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/12 pt-6 sm:grid-cols-4">
              <div>
                <dt className="text-xs text-slate-400">Ownership</dt>
                <dd className="mt-1 font-mono text-lg font-bold tabular-nums text-white">
                  100% PH
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-400">Service Lines</dt>
                <dd className="mt-1 font-mono text-lg font-bold tabular-nums text-white">
                  10 Divisions
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-400">Post Supervision</dt>
                <dd className="mt-1 font-mono text-lg font-bold tabular-nums text-white">
                  24/7 Inspected
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-400">Coverage</dt>
                <dd className="mt-1 font-mono text-lg font-bold text-[#E3BC5A]">
                  Nationwide
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Framed Officers Showcase (LCP Candidate Image) */}
          <div className="relative lg:col-span-5">
            <figure className="overflow-hidden rounded-lg border border-white/15 bg-[#0C182E] shadow-2xl shadow-black/40">
              {/* Authentic Uniformed Atlantis Officers Photo — LCP Priority */}
              <div className="relative aspect-[4/3.5] w-full overflow-hidden bg-[#081120]">
                <Image
                  src={`${BASE_PATH}/images/hero/officers-team.jpg`}
                  alt="Four uniformed Atlantis Security Agency Inc. licensed security officers standing at multi-lane walk-through metal detector checkpoints"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  priority
                  fetchPriority="high"
                  className="object-cover object-top"
                />
              </div>

              {/* Documentary Caption & Core Promise */}
              <figcaption className="border-t border-white/10 bg-[#0C182E] p-5">
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-[#E3BC5A]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#C89B2B]" aria-hidden="true" />
                    <span>Licensed Field Detachment</span>
                  </span>
                  <span>Multi-Lane Checkpoint</span>
                </div>

                <blockquote className="mt-2.5 text-sm font-medium leading-relaxed text-white">
                  &ldquo;{COMPANY.corePromise}&rdquo;
                </blockquote>

                <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 text-xs text-slate-300">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#C89B2B]" aria-hidden="true" />
                    <span>PADPAO-Compliant Rates</span>
                  </span>
                  <button
                    type="button"
                    onClick={openComplianceModal}
                    className="inline-flex items-center gap-1 font-semibold text-[#E3BC5A] underline-offset-4 hover:underline"
                  >
                    <Award className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Verify Licenses</span>
                  </button>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
