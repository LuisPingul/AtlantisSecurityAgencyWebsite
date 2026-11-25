import type { Metadata } from "next";
import { ShieldCheck, UserCheck } from "lucide-react";
import { SCREENING_PIPELINE } from "@/data/careers";
import { GuardApplicationForm } from "@/components/forms/GuardApplicationForm";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Security Guard Careers & Eligibility Pre-Screener",
  description:
    "Apply to join Atlantis Security Agency Inc. Check your eligibility against our 12 PNP-SOSIA and agency requirements and review our 6-stage recruitment and neuro-psychiatric screening process.",
};

export default function CareersPage() {
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
              <UserCheck className="h-3.5 w-3.5 text-[#E5B63B]" />
              <span>Join Our Licensed Roster · Kidapawan &amp; Davao</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Build a Career Where You Are{" "}
              <span className="text-gold-gradient">Treated With Dignity &amp; Respect.</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Atlantis Security Agency, Inc. offers competitive PADPAO-aligned compensation, timely salary release, complete statutory benefits (SSS, PhilHealth, Pag-IBIG), agency-supplied uniforms, and continuous career advancement.
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* 6-Step Recruitment & Screening Process (Slide 17) */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Slide 17 · Vetting & Competency Standard"
            title="6-Stage Recruitment &"
            highlight="Screening Process"
            description="Every security officer and guard undergoes strict multi-stage vetting in accordance with PNP-SOSIA and Philippine security laws before deployment."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SCREENING_PIPELINE.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-[#1B1654]/12 bg-[#F6F5F0] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-[#16123D] px-3 py-1 font-mono text-xs font-bold text-[#F5D576]">
                    STAGE {item.step}
                  </span>
                  <ShieldCheck className="h-5 w-5 text-[#C6921E]" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[#11102B]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4A4968]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 12-Point Eligibility Pre-Screener + Online Application Form */}
      <section className="bg-[#F6F5F0] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Online Applicant Portal"
            title="Check Your Eligibility &"
            highlight="Submit Your Application"
            description="Verify your qualifications against our 12 agency requirements and send your formatted application directly to our HR & Operations team."
          />

          <div className="mt-10">
            <GuardApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
