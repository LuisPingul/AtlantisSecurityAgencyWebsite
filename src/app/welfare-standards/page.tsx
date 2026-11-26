import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MessageSquareCode,
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
              Welfare · Training · Supervision · Accountability
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Welfare-Led Security Improves the Measures That Matter.
            </h1>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-slate-300 sm:text-lg">
              We protect your property by first taking care of the people entrusted to protect it—pairing fair PADPAO compensation with rigorous training and unannounced spot inspections.
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Interactive Welfare Multiplier + 7 Commitments */}
      <WelfareMultiplier />

      {/* What Our Clients Gain & Code of Conduct */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left: The Performance Multiplier Matrix */}
            <div className="rounded-lg border border-slate-200 bg-[#F5F3EE] p-6 sm:p-8 lg:col-span-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6510]">
                Operational Impact
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#0B1324]">
                How Guard Welfare Translates Into Client Gains
              </h2>
              <p className="mt-2 text-sm text-[#475569]">
                Every investment in officer morale directly improves measurable operational outcomes at your facility:
              </p>

              <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-md border border-slate-200 bg-white">
                {PERFORMANCE_MULTIPLIER_GAINS.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-3 px-4 py-3.5"
                  >
                    <span className="text-sm font-semibold text-[#0B1324]">
                      {row.label}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#8A6510]" aria-hidden="true" />
                    <span className="rounded-sm bg-[#0C182E] px-2.5 py-1 text-xs font-semibold text-white">
                      {row.clientGain}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Standing Orders, Good Manners & Communication Flow */}
            <div className="flex flex-col justify-between rounded-lg border border-[#0C182E] bg-[#0C182E] p-6 text-white sm:p-8 lg:col-span-6">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
                  <ClipboardCheck className="h-4 w-4 text-[#C89B2B]" aria-hidden="true" />
                  <span>Standing Orders &amp; Decorum</span>
                </div>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  Good Manners, Tactful Enforcement &amp; Complete Reporting
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  Our Rules and Regulations mandate exemplary professional conduct on every tour of duty:
                </p>

                <ul className="mt-5 space-y-3.5 text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C89B2B]" aria-hidden="true" />
                    <span>
                      <strong>Courtesy &amp; Salutary Greetings:</strong> Acting with decorum, good manners, and respect toward all clients, employees, and guests.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C89B2B]" aria-hidden="true" />
                    <span>
                      <strong>Crisp Personal Appearance:</strong> Agency-supplied uniforms, white gloves, ID lanyards, and tactical vests inspected daily.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C89B2B]" aria-hidden="true" />
                    <span>
                      <strong>Tactful Rule Implementation:</strong> Firm yet diplomatic enforcement of both client and agency security policies.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MessageSquareCode className="mt-0.5 h-4 w-4 shrink-0 text-[#E3BC5A]" aria-hidden="true" />
                    <span>
                      <strong>Structured Flow of Communication:</strong> Systematic collection and reporting of post logs to maintain complete official records and incident reports.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 border-t border-white/12 pt-4 text-xs text-slate-300">
                Enforced daily by our Security Operation Officers and two (2) full-time field inspectors through routine and unannounced spot inspections.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology + Human Security & Supervision */}
      <TechAndSupervisionSection />

      {/* Authentic Operations & Room-to-Room Seminar Gallery */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Field Documentation"
            title="Room-to-Room Briefings &"
            highlight="Active Operations Gallery"
            description="Authentic field snapshots from Atlantis campus safety seminars, pre-deployment briefings, multi-lane entry checkpoints, and surveillance command posts."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OPERATIONS_GALLERY.map((item) => (
              <figure
                key={item.title}
                className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#081120]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-sm border border-white/20 bg-[#081120]/85 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
                    {item.tag}
                  </span>
                </div>
                <figcaption className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-base font-bold text-[#0B1324]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#475569]">
                      {item.caption}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-200 bg-[#F5F3EE] p-6">
            <div>
              <h3 className="text-lg font-bold text-[#0B1324]">
                Want Atlantis to Conduct a Security Briefing or Audit at Your Institution?
              </h3>
              <p className="text-sm text-[#475569]">
                Connect with our operations leadership in Kidapawan City or Davao City.
              </p>
            </div>
            <Link
              href="/contact#proposal"
              className="bg-gold-metallic inline-flex min-h-11 items-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-[#081120]"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
