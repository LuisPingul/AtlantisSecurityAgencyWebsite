"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { useComplianceModal } from "@/components/layout/SiteShell";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { openComplianceModal } = useComplianceModal();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section className="relative overflow-hidden bg-imperial-mesh text-white">
      {/* Subtle Architectural Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
      >
        <Image
          src="/images/hero/night-architecture.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070816] via-[#0A0822]/90 to-[#0B0928]/70" />
      </div>

      {/* Subtle Tactical Grid Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-tactical-grid opacity-35"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Narrative Column */}
          <motion.div {...fadeUp} className="lg:col-span-7">
            <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-[#E5B63B]/35 bg-[#15113E]/85 px-4 py-1.5 backdrop-blur-sm">
              <span className="signal-dot" aria-hidden="true" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5D576]">
                PNP-SOSIA Licensed · PADPAO Region XII · Est. {COMPANY.establishedYear}
              </span>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                <Image
                  src="/images/brand/atlantis-emblem.png"
                  alt="Atlantis Security Agency Inc. Official Crest"
                  fill
                  sizes="80px"
                  className="object-contain drop-shadow-[0_0_24px_rgba(229,182,59,0.4)]"
                  priority
                />
              </div>
              <div>
                <p className="font-display text-lg font-bold tracking-[0.18em] text-gold-gradient sm:text-xl">
                  ATLANTIS SECURITY AGENCY INC.
                </p>
                <p className="mt-0.5 font-display text-sm italic text-slate-300">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]">
              YOUR{" "}
              <span className="text-gold-gradient">SAFETY</span>,
              <br />
              OUR{" "}
              <span className="text-gold-gradient">PRIORITY.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {COMPANY.heroSubheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact#proposal"
                className="bg-gold-metallic inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-extrabold text-[#070816] shadow-lg shadow-[#E5B63B]/25 transition-transform hover:-translate-y-0.5 sm:text-base"
              >
                <span>Request Free Site Assessment</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-[#00C2F0]/45 bg-[#00C2F0]/10 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:border-[#00C2F0] hover:bg-[#00C2F0]/20 sm:text-base"
              >
                <ShieldCheck className="h-4 w-4 text-[#00C2F0]" />
                <span>Explore 10 Security Services</span>
              </a>

              <a
                href={`tel:${COMPANY.contacts.phones[0].tel}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-[#E5B63B]/50 hover:text-white"
              >
                <PhoneCall className="h-4 w-4 text-[#E5B63B]" />
                <span>{COMPANY.contacts.phones[0].display}</span>
              </a>
            </div>

            {/* Executive Trust Metrics */}
            <div className="mt-9 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:grid-cols-4">
              <div>
                <p className="font-mono text-lg font-bold text-[#F5D576]">100%</p>
                <p className="text-xs text-slate-400">Filipino-Owned Corp.</p>
              </div>
              <div>
                <p className="font-mono text-lg font-bold text-[#F5D576]">10</p>
                <p className="text-xs text-slate-400">Integrated Service Lines</p>
              </div>
              <div>
                <p className="font-mono text-lg font-bold text-[#00C2F0]">24/7</p>
                <p className="text-xs text-slate-400">Inspected Post Coverage</p>
              </div>
              <div>
                <p className="font-mono text-lg font-bold text-white">PH-Wide</p>
                <p className="text-xs text-slate-400">Davao · Kidapawan · Nationwide</p>
              </div>
            </div>
          </motion.div>

          {/* Right Framed Officers Showcase (LCP Candidate Image) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#E5B63B]/40 bg-[#120F33] shadow-2xl shadow-black/60">
              {/* Top Command Strip */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#0B0922]/90 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#E5B63B]" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-200">
                    Active Licensed Roster
                  </span>
                </div>
                <span className="rounded-full border border-emerald-400/35 bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                  VETTED &amp; DEPLOYED
                </span>
              </div>

              {/* Authentic Uniformed Atlantis Officers Photo — LCP Priority */}
              <div className="relative aspect-[4/3.6] w-full overflow-hidden">
                <Image
                  src="/images/hero/officers-team.jpg"
                  alt="Four uniformed Atlantis Security Agency Inc. licensed security officers standing at multi-lane walk-through metal detector checkpoints"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  priority
                  fetchPriority="high"
                  className="object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#09081F] via-[#09081F]/60 to-transparent"
                />
              </div>

              {/* Bottom Promise Footer inside Frame */}
              <div className="relative -mt-10 px-5 pb-5">
                <div className="rounded-xl border border-white/15 bg-[#0C0A26]/92 p-4 backdrop-blur-md">
                  <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#00C2F0]">
                    Our Promise to Clients
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-white">
                    &ldquo;{COMPANY.corePromise}&rdquo;
                  </p>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-2.5 text-[11px] text-slate-300">
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#E5B63B]" />
                      <span>PADPAO Fair Rates</span>
                    </span>
                    <button
                      type="button"
                      onClick={openComplianceModal}
                      className="inline-flex items-center gap-1 font-semibold text-[#F5D576] underline-offset-2 hover:underline"
                    >
                      <Award className="h-3.5 w-3.5" />
                      <span>Verify Licenses</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
