import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MessageSquareCode,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { WelfareMultiplier } from "@/components/home/WelfareMultiplier";
import { TechAndSupervisionSection } from "@/components/home/TechAndSupervisionSection";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  OPERATIONS_GALLERY,
  PERFORMANCE_MULTIPLIER_GAINS,
} from "@/data/welfare";

export const metadata: Metadata = {
  title: "Guard Welfare, Training & Field Supervision",
  description:
    "Explore why Atlantis Security Agency Inc.'s welfare-led philosophy, 6-pillar training, room-to-room safety seminars, and 2 full-time field inspectors deliver superior client protection.",
};

export default function WelfareStandardsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-imperial-mesh py-16 text-white lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-tactical-grid opacity-30"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5B63B]/40 bg-[#15113E] px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#F5D576]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#E5B63B]" />
              <span>Welfare + Training + Supervision + Accountability</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Welfare-Led Security{" "}
              <span className="text-gold-gradient">Improves the Measures That Matter.</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              We protect your property by first taking care of the people entrusted to protect it—pairing fair PADPAO compensation with rigorous training and unannounced spot inspections.
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Interactive Welfare Multiplier + 7 Commitments */}
      <WelfareMultiplier />

      {/* What Our Clients Gain (Slides 9 & 22) & Code of Conduct (Slide 18) */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left: The Performance Multiplier Matrix */}
            <div className="rounded-2xl border border-[#1B1654]/12 bg-[#F6F5F0] p-6 sm:p-8 lg:col-span-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#1B1654]">
                <Sparkles className="h-4 w-4 text-[#C6921E]" />
                <span>Slides 9 &amp; 22 · The Performance Multiplier</span>
              </div>
              <h2 className="mt-2 text-2xl font-extrabold text-[#11102B]">
                How Guard Welfare Translates Into Client Gains
              </h2>
              <p className="mt-2 text-sm text-[#4A4968]">
                Every investment in officer morale directly improves measurable operational outcomes at your facility:
              </p>

              <div className="mt-6 space-y-3">
                {PERFORMANCE_MULTIPLIER_GAINS.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-3 rounded-xl border border-[#1B1654]/10 bg-white px-4 py-3.5 shadow-2xs"
                  >
                    <span className="text-sm font-bold text-[#11102B]">
                      {row.label}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#C6921E]" />
                    <span className="rounded-lg bg-[#16123D] px-3 py-1 text-xs font-bold text-[#F5D576]">
                      {row.clientGain}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Slide 18 Rules, Good Manners & Communication Flow */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E5B63B]/40 bg-[#120F34] p-6 text-white sm:p-8 lg:col-span-6">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#00C2F0]">
                  <ClipboardCheck className="h-4 w-4" />
                  <span>Slide 18 · Rules, Decorum &amp; Record-Keeping</span>
                </div>
                <h2 className="mt-2 text-2xl font-extrabold text-white">
                  Good Manners, Tactful Enforcement &amp; Complete Reporting
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  Our Rules and Regulations mandate exemplary professional conduct on every tour of duty:
                </p>

                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E5B63B]" />
                    <span>
                      <strong>Courtesy &amp; Salutary Greetings:</strong> Acting with decorum, good manners, and respect toward all clients, employees, and guests.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E5B63B]" />
                    <span>
                      <strong>Crisp Personal Appearance:</strong> Agency-supplied uniforms, white gloves, ID lanyards, and tactical vests inspected daily.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E5B63B]" />
                    <span>
                      <strong>Tactful Rule Implementation:</strong> Firm yet diplomatic enforcement of both client and agency security policies.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MessageSquareCode className="mt-0.5 h-4 w-4 shrink-0 text-[#00C2F0]" />
                    <span>
                      <strong>Structured Flow of Communication:</strong> Systematic collection and reporting of post logs to maintain complete official records and incident reports.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-xs text-slate-300">
                Enforced daily by our Security Operation Officers and two (2) full-time field inspectors through routine and unannounced spot inspections.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology + Human Security & Supervision */}
      <TechAndSupervisionSection />

      {/* Authentic Operations & Room-to-Room Seminar Gallery (Slides 15–16) */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Slides 15 & 16 · Field Documentation"
            title="Room-to-Room Briefings &"
            highlight="Active Operations Gallery"
            description="Authentic field snapshots from Atlantis campus safety seminars, pre-deployment briefings, multi-lane entry checkpoints, and surveillance command posts."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OPERATIONS_GALLERY.map((item) => (
              <figure
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#1B1654]/12 bg-[#F6F5F0]"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#09081F]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-[#09081F]/85 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#F5D576] backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <figcaption className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-base font-extrabold text-[#11102B]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#4A4968]">
                      {item.caption}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#1B1654]/15 bg-[#F6F5F0] p-6">
            <div>
              <h3 className="text-lg font-extrabold text-[#11102B]">
                Want Atlantis to Conduct a Security Briefing or Audit at Your Institution?
              </h3>
              <p className="text-sm text-[#4A4968]">
                Connect with our operations leadership in Kidapawan City or Davao City.
              </p>
            </div>
            <Link
              href="/contact#proposal"
              className="bg-gold-metallic inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-extrabold text-[#070816]"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
