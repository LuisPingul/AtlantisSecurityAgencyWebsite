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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
              PADPAO-Compliant Security Catalog
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Tailored Protection for Every Facility &amp; Sector.
            </h1>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-slate-300 sm:text-lg">
              From armed industrial detachments, retail loss prevention, and campus safety to executive close protection and 24/7 CCTV command coordination, every deployment is engineered around your facility&apos;s operational rhythm.
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Full Interactive 10-Service Catalog */}
      <ServicesShowcase showAllLink={false} />

      {/* Bottom Consultation CTA */}
      <section className="bg-[#F5F3EE] pb-20 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-slate-200 bg-white p-7 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#0C182E] text-[#E3BC5A]">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#0B1324]">
                  Ready to Upgrade Your Facility&apos;s Security Posture?
                </h2>
                <p className="mt-1 text-sm text-[#475569]">
                  Schedule an on-site physical security risk assessment with our Davao or Kidapawan operations team.
                </p>
              </div>
            </div>
            <Link
              href="/contact#proposal"
              className="bg-gold-metallic inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-[#081120]"
            >
              <span>Request Site Assessment</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
