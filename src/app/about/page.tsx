import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Compass,
  Eye,
  HeartHandshake,
  MapPin,
  Target,
  UserCheck,
} from "lucide-react";
import { COMPANY, CORE_VALUES, CREDENTIALS } from "@/data/company";
import { COMMUNITY_ADVOCACY } from "@/data/welfare";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";

export const metadata: Metadata = {
  title: "About & B2B Credentials",
  description:
    "Discover Atlantis Security Agency Inc.'s mission, vision, A-T-L-A-N-T-I-S core values, leadership under Mr. Milbert G. Balinggan, and full PNP-SOSIA, PADPAO, and DOLE OSH accreditation ledger.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-imperial-mesh py-16 text-white lg:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
                Corporate Profile · Est. {COMPANY.established}
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Anchored by Loyalty, Powered by Duty.
              </h1>
              <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-slate-300 sm:text-lg">
                {COMPANY.legalName} is a {COMPANY.ownership} private security corporation dedicated to elevating Philippine security standards through officer welfare, disciplined supervision, and complete regulatory compliance.
              </p>
            </div>

            <div className="flex justify-center lg:col-span-4 lg:justify-end">
              <div className="relative h-40 w-40 sm:h-48 sm:w-48">
                <Image
                  src="/images/brand/atlantis-emblem.png"
                  alt="Atlantis Security Agency Inc. Official Seal"
                  fill
                  sizes="192px"
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Mission, Vision & Core Promise */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Mission */}
            <div className="rounded-lg border border-slate-200 bg-[#F5F3EE] p-7">
              <Target className="h-5 w-5 text-[#8A6510]" aria-hidden="true" />
              <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6510]">
                Our Mission
              </p>
              <h2 className="mt-1 text-xl font-bold text-[#0B1324]">
                Proficiency, Efficiency &amp; Growth
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                {COMPANY.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-lg border border-slate-200 bg-[#F5F3EE] p-7">
              <Eye className="h-5 w-5 text-[#0C182E]" aria-hidden="true" />
              <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6510]">
                Our Vision
              </p>
              <h2 className="mt-1 text-xl font-bold text-[#0B1324]">
                Globally Competitive Safety Standards
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                {COMPANY.vision}
              </p>
            </div>

            {/* Promise & Leadership */}
            <div className="flex flex-col justify-between rounded-lg border border-[#0C182E] bg-[#0C182E] p-7 text-white">
              <div>
                <Compass className="h-5 w-5 text-[#E3BC5A]" aria-hidden="true" />
                <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
                  Our Promise to Clients
                </p>
                <blockquote className="mt-2 text-lg font-bold leading-snug text-white">
                  &ldquo;{COMPANY.corePromise}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 border-t border-white/12 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#C89B2B] text-[#081120]">
                    <UserCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      {COMPANY.licenseeManager}
                    </p>
                    <p className="text-xs text-[#E3BC5A]">
                      {COMPANY.licenseeTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A-T-L-A-N-T-I-S Core Values Acronym Showcase */}
      <section className="bg-[#F5F3EE] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Corporate Ethos"
            title="The A-T-L-A-N-T-I-S"
            highlight="Core Values"
            description="Every letter of our name defines the character, discipline, and operational ethic expected of every officer wearing the Atlantis seal."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((item, idx) => (
              <div
                key={`${item.letter}-${idx}`}
                className="bg-white p-6 transition-colors hover:bg-[#F5F3EE]/50"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl font-bold text-[#0C182E]">
                    {item.letter}
                  </span>
                  <span className="font-mono text-[11px] font-semibold tabular-nums text-[#8A6510]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-[#0B1324]">
                  {item.word}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#475569]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Information & Complete Government Accreditation Ledger */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Regulatory Registry"
            title="Verified Corporate &"
            highlight="Statutory Credentials"
            description="Complete corporate and government registration data for B2B vendor accreditation, procurement due diligence, and compliance audits."
          />

          {/* Corporate Identity Summary Card */}
          <div className="mt-10 grid gap-6 rounded-lg border border-slate-200 bg-[#F5F3EE] p-6 sm:p-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#475569]">
                  Name of Agency
                </p>
                <p className="text-lg font-bold text-[#0B1324]">
                  {COMPANY.legalName}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#475569]">
                    Date Established
                  </p>
                  <p className="text-sm font-bold text-[#0B1324]">
                    {COMPANY.established}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#475569]">
                    Organization &amp; Ownership
                  </p>
                  <p className="text-sm font-bold text-[#0B1324]">
                    Incorporation · {COMPANY.ownership}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#475569]">
                  Licensee / Manager
                </p>
                <p className="text-sm font-bold text-[#0B1324]">
                  {COMPANY.licenseeManager}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#475569]">
                  Official Line of Business
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {COMPANY.lineOfBusiness.map((lob) => (
                    <span
                      key={lob}
                      className="rounded-sm border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-[#0B1324]"
                    >
                      {lob}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 border-t border-slate-200 pt-6 lg:col-span-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {COMPANY.offices.map((office) => (
                <div
                  key={office.id}
                  className="rounded-md border border-slate-200 bg-white p-4"
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#8A6510]">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span>
                      {office.type} ({office.city})
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#0B1324]">
                    {office.address}
                  </p>
                  <p className="mt-0.5 text-xs text-[#475569]">{office.region}</p>
                </div>
              ))}

              <div className="rounded-md border border-slate-200 bg-white p-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8A6510]">
                  Official Contacts
                </p>
                <p className="mt-1 font-mono text-sm font-bold text-[#0B1324]">
                  {COMPANY.contacts.phones.map((p) => p.display).join(" / ")}
                </p>
                <p className="mt-0.5 text-xs font-medium text-[#475569]">
                  {COMPANY.contacts.email}
                </p>
              </div>
            </div>
          </div>

          {/* 9 Registration Numbers Hairline Ledger */}
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.id}
                className="flex flex-col justify-between bg-white p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#8A6510]">
                      {cred.category}
                    </span>
                    {cred.isPlaceholder ? (
                      <span className="rounded-sm bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                        Pending Filing
                      </span>
                    ) : (
                      <Award className="h-4 w-4 text-[#8A6510]" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="mt-2 text-base font-bold text-[#0B1324]">
                    {cred.label}
                  </h3>
                  <p className="mt-1 text-xs text-[#475569]">{cred.authority}</p>
                </div>

                <div className="mt-4 rounded-sm border border-slate-200 bg-[#F5F3EE] px-3 py-2">
                  <code className="block font-mono text-xs font-bold text-[#0B1324]">
                    {cred.value}
                  </code>
                </div>
              </div>
            ))}
          </div>

          {/* Barangay Advocacy Strip */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-lg border border-[#0C182E] bg-[#0C182E] p-7 text-white lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#E3BC5A]">
                <HeartHandshake className="h-4 w-4 text-[#C89B2B]" aria-hidden="true" />
                <span>{COMMUNITY_ADVOCACY.title}</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Empowering Local Barangays Through Free Public Safety Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {COMMUNITY_ADVOCACY.description}
              </p>
            </div>
            <Link
              href="/contact#proposal"
              className="bg-gold-metallic inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-[#081120]"
            >
              <span>Partner With Atlantis</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
