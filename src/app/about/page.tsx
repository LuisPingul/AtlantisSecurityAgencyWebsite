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
  ShieldCheck,
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-tactical-grid opacity-30"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E5B63B]/40 bg-[#15113E] px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#F5D576]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#E5B63B]" />
                <span>Corporate Profile · Est. {COMPANY.established}</span>
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Anchored by Loyalty,{" "}
                <span className="text-gold-gradient">Powered by Duty.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {COMPANY.legalName} is a {COMPANY.ownership} private security corporation dedicated to elevating Philippine security standards through officer welfare, disciplined supervision, and complete regulatory compliance.
              </p>
            </div>

            <div className="flex justify-center lg:col-span-4 lg:justify-end">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52">
                <Image
                  src="/images/brand/atlantis-emblem.png"
                  alt="Atlantis Security Agency Inc. Official Seal"
                  fill
                  sizes="208px"
                  priority
                  className="object-contain drop-shadow-[0_0_32px_rgba(229,182,59,0.35)]"
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
            <div className="rounded-2xl border border-[#1B1654]/12 bg-[#F6F5F0] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16123D] text-[#E5B63B]">
                <Target className="h-5 w-5" />
              </div>
              <p className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#B8861A]">
                Our Mission
              </p>
              <h2 className="mt-1 text-xl font-extrabold text-[#11102B]">
                Proficiency, Efficiency &amp; Growth
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4968]">
                {COMPANY.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-[#1B1654]/12 bg-[#F6F5F0] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16123D] text-[#00C2F0]">
                <Eye className="h-5 w-5" />
              </div>
              <p className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#1B1654]">
                Our Vision
              </p>
              <h2 className="mt-1 text-xl font-extrabold text-[#11102B]">
                Globally Competitive Safety Standards
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4968]">
                {COMPANY.vision}
              </p>
            </div>

            {/* Promise & Leadership */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E5B63B]/40 bg-[#120F34] p-7 text-white">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5B63B]/15 text-[#F5D576]">
                  <Compass className="h-5 w-5" />
                </div>
                <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#00C2F0]">
                  Our Promise to Clients
                </p>
                <blockquote className="mt-2 text-lg font-extrabold leading-snug text-white">
                  &ldquo;{COMPANY.corePromise}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5B63B] font-bold text-[#070816]">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      {COMPANY.licenseeManager}
                    </p>
                    <p className="text-xs text-[#F5D576]">
                      {COMPANY.licenseeTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A-T-L-A-N-T-I-S Core Values Acronym Showcase (Slide 5) */}
      <section className="bg-[#F6F5F0] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Slide 5 · Cultural Foundation"
            title="The A-T-L-A-N-T-I-S"
            highlight="Core Values"
            description="Every letter of our name defines the character, discipline, and operational ethic expected of every officer wearing the Atlantis seal."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((item, idx) => (
              <div
                key={`${item.letter}-${idx}`}
                className="group relative overflow-hidden rounded-2xl border border-[#1B1654]/12 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#E5B63B] hover:shadow-md"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl font-extrabold text-[#16123D] transition-colors group-hover:text-[#B8861A]">
                    {item.letter}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#4A4968]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-extrabold text-[#11102B]">
                  {item.word}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4A4968]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Information & Complete Government Accreditation Ledger (Slide 6) */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="General Information & Regulatory Registry"
            title="Verified Corporate &"
            highlight="Statutory Credentials"
            description="Complete corporate and government registration data for B2B vendor accreditation, procurement due diligence, and compliance audits."
          />

          {/* Corporate Identity Summary Card */}
          <div className="mt-10 grid gap-6 rounded-2xl border border-[#1B1654]/15 bg-[#F6F5F0] p-6 sm:p-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#4A4968]">
                  Name of Agency
                </p>
                <p className="text-lg font-extrabold text-[#11102B]">
                  {COMPANY.legalName}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#4A4968]">
                    Date Established
                  </p>
                  <p className="text-sm font-bold text-[#11102B]">
                    {COMPANY.established}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#4A4968]">
                    Organization &amp; Ownership
                  </p>
                  <p className="text-sm font-bold text-[#11102B]">
                    Incorporation · {COMPANY.ownership}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#4A4968]">
                  Licensee / Manager
                </p>
                <p className="text-sm font-bold text-[#11102B]">
                  {COMPANY.licenseeManager}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#4A4968]">
                  Official Line of Business
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {COMPANY.lineOfBusiness.map((lob) => (
                    <span
                      key={lob}
                      className="rounded-lg border border-[#1B1654]/15 bg-white px-2.5 py-1 text-xs font-semibold text-[#16123D]"
                    >
                      {lob}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 border-t border-[#1B1654]/10 pt-6 lg:col-span-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {COMPANY.offices.map((office) => (
                <div
                  key={office.id}
                  className="rounded-xl border border-[#1B1654]/12 bg-white p-4"
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#16123D]">
                    <MapPin className="h-4 w-4 text-[#C6921E]" />
                    <span>
                      {office.type} ({office.city})
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#11102B]">
                    {office.address}
                  </p>
                  <p className="mt-0.5 text-xs text-[#4A4968]">{office.region}</p>
                </div>
              ))}

              <div className="rounded-xl border border-[#1B1654]/12 bg-white p-4">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#16123D]">
                  Official Contacts
                </p>
                <p className="mt-1 text-sm font-bold text-[#11102B]">
                  {COMPANY.contacts.phones.map((p) => p.display).join(" / ")}
                </p>
                <p className="mt-0.5 text-xs font-medium text-[#4A4968]">
                  {COMPANY.contacts.email}
                </p>
              </div>
            </div>
          </div>

          {/* 9 Registration Numbers Ledger */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.id}
                className="flex flex-col justify-between rounded-2xl border border-[#1B1654]/12 bg-white p-5 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1B1654]">
                      {cred.category}
                    </span>
                    {cred.isPlaceholder ? (
                      <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-800">
                        Placeholder
                      </span>
                    ) : (
                      <Award className="h-4 w-4 text-[#C6921E]" />
                    )}
                  </div>
                  <h3 className="mt-2 text-base font-extrabold text-[#11102B]">
                    {cred.label}
                  </h3>
                  <p className="mt-1 text-xs text-[#4A4968]">{cred.authority}</p>
                </div>

                <div className="mt-4 rounded-xl border border-[#1B1654]/15 bg-[#16123D] px-3.5 py-2.5">
                  <code className="block font-mono text-xs font-bold text-[#F5D576]">
                    {cred.value}
                  </code>
                </div>
              </div>
            ))}
          </div>

          {/* Barangay Advocacy Strip */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#E5B63B]/40 bg-[#120F34] p-7 text-white lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#00C2F0]">
                <HeartHandshake className="h-4 w-4" />
                <span>{COMMUNITY_ADVOCACY.title}</span>
              </div>
              <h3 className="mt-2 text-2xl font-extrabold text-white">
                Empowering Local Barangays Through Free Public Safety Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {COMMUNITY_ADVOCACY.description}
              </p>
            </div>
            <Link
              href="/contact#proposal"
              className="bg-gold-metallic inline-flex shrink-0 items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-extrabold text-[#070816]"
            >
              <span>Partner With Atlantis</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
