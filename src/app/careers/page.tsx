import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
              Join Our Licensed Roster · Kidapawan &amp; Davao
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Build a Career Where You Are Treated With Dignity &amp; Respect.
            </h1>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-slate-300 sm:text-lg">
              Atlantis Security Agency, Inc. offers competitive PADPAO-aligned compensation, timely salary release, complete statutory benefits (SSS, PhilHealth, Pag-IBIG), agency-supplied uniforms, and continuous career advancement.
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* 6-Step Recruitment & Screening Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Vetting & Competency Standard"
            title="6-Stage Recruitment &"
            highlight="Screening Process"
            description="Every security officer and guard undergoes strict multi-stage vetting in accordance with PNP-SOSIA and Philippine security laws before deployment."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {SCREENING_PIPELINE.map((item) => (
              <div
                key={item.step}
                className="bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tabular-nums text-[#8A6510]">
                    STAGE {item.step}
                  </span>
                  <ShieldCheck className="h-4 w-4 text-[#0C182E]" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-base font-bold text-[#0B1324]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 12-Point Eligibility Pre-Screener + Online Application Form */}
      <section className="bg-[#F5F3EE] py-20">
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
