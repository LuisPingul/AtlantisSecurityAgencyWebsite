import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";

export const metadata: Metadata = {
  title: "Security Services Catalog",
  description:
    "Explore Atlantis Security Agency Inc.'s 10 integrated security services, including armed and unarmed licensed guards, mobile patrols, VIP protection, event security, CCTV coordination, and emergency response teams.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-imperial-mesh py-16 text-white lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-tactical-grid opacity-30"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5B63B]/40 bg-[#15113E] px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#F5D576]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#E5B63B]" />
              <span>PADPAO-Compliant Security Catalog</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Tailored Protection for{" "}
              <span className="text-gold-gradient">Every Facility &amp; Sector.</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              From armed industrial detachments, retail loss prevention, and campus safety to executive close protection and 24/7 CCTV command coordination, every deployment is engineered around your facility&apos;s operational rhythm.
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Full Interactive 10-Service Catalog */}
      <ServicesShowcase showAllLink={false} />

      {/* Bottom Consultation CTA */}
      <section className="bg-[#F6F5F0] pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#1B1654]/15 bg-white p-7 shadow-sm lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#16123D] text-[#E5B63B]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-[#11102B]">
                  Ready to Upgrade Your Facility&apos;s Security Posture?
                </h2>
                <p className="mt-1 text-sm text-[#4A4968]">
                  Schedule an on-site physical security risk assessment with our Davao or Kidapawan operations team.
                </p>
              </div>
            </div>
            <Link
              href="/contact#proposal"
              className="bg-gold-metallic inline-flex shrink-0 items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-extrabold text-[#070816]"
            >
              <span>Request Site Assessment</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
