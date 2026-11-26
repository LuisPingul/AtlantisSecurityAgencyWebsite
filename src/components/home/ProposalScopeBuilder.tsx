"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Copy,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { COMPANY } from "@/data/company";

const SECTORS = [
  "Commercial / Retail Store",
  "Industrial / Manufacturing Plant",
  "School / University Campus",
  "Hotel / Hospitality Venue",
  "Residential / Gated Community",
  "VIP / Special Event",
] as const;

const DEPLOYMENT_MODULES = [
  "Armed / Unarmed Licensed Guards",
  "24/7 Rotational Shift Coverage",
  "VIP & Event Security",
  "Free CCTV Setup & Monitoring",
  "Mobile Roving Patrol",
  "Physical Security Risk Audit",
] as const;

const REGIONS = [
  "Davao City / Region XI",
  "Kidapawan City / Region XII",
  "Other Mindanao Location",
  "Visayas / Luzon Deployment",
] as const;

export function ProposalScopeBuilder() {
  const [sector, setSector] = useState<string>(SECTORS[0]);
  const [selectedModules, setSelectedModules] = useState<string[]>([
    DEPLOYMENT_MODULES[0],
    DEPLOYMENT_MODULES[1],
  ]);
  const [region, setRegion] = useState<string>(REGIONS[0]);
  const [guardEstimate, setGuardEstimate] = useState<string>("4–8 Guards");
  const [copied, setCopied] = useState(false);

  const toggleModule = (mod: string) => {
    setSelectedModules((prev) =>
      prev.includes(mod) ? prev.filter((item) => item !== mod) : [...prev, mod]
    );
  };

  const summaryText = [
    `SECURITY PROPOSAL INQUIRY — ${COMPANY.legalName}`,
    `• Facility / Sector: ${sector}`,
    `• Deployment Location: ${region}`,
    `• Estimated Manpower: ${guardEstimate}`,
    `• Requested Services: ${
      selectedModules.length > 0 ? selectedModules.join(", ") : "General Security Consultation"
    }`,
    `• Rate Standard: PADPAO-Compliant Proposal Request`,
  ].join("\n");

  // shortcut: client-side mailto/SMS handoff without server persistence, upgrade when transactional email/CRM API is configured
  const mailtoUrl = `mailto:${COMPANY.contacts.email}?subject=${encodeURIComponent(
    `Security Proposal Request — ${sector} (${region})`
  )}&body=${encodeURIComponent(summaryText)}`;

  const smsUrl = `sms:${COMPANY.contacts.phones[0].tel}?&body=${encodeURIComponent(
    summaryText
  )}`;

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API unavailable
    }
  };

  return (
    <section className="relative overflow-hidden bg-imperial-mesh py-20 text-white lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Left Narrative */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
              <ShieldCheck className="h-4 w-4 text-[#C89B2B]" aria-hidden="true" />
              <span>Deployment Scope Builder</span>
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let Atlantis Protect What Matters Most to You.
            </h2>
            <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-slate-300">
              Configure your facility profile in seconds to generate a structured PADPAO-compliant proposal request—then send it directly to our Kidapawan or Davao operations desk via Email, SMS, or full proposal form.
            </p>

            <div className="mt-8 space-y-2.5 rounded-lg border border-white/12 bg-white/[0.03] p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#E3BC5A]">
                Direct Operations Hotlines
              </p>
              {COMPANY.contacts.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="flex min-h-11 items-center justify-between rounded-md border border-white/10 bg-[#081120] px-4 py-3 text-sm transition-colors hover:border-[#C89B2B]"
                >
                  <span className="inline-flex items-center gap-2 font-mono font-semibold text-white">
                    <Phone className="h-4 w-4 text-[#C89B2B]" aria-hidden="true" />
                    <span>{phone.display}</span>
                  </span>
                  <span className="text-xs text-slate-400">{phone.label}</span>
                </a>
              ))}
              <a
                href={`mailto:${COMPANY.contacts.email}`}
                className="flex min-h-11 items-center justify-between rounded-md border border-white/10 bg-[#081120] px-4 py-3 text-sm transition-colors hover:border-white/35"
              >
                <span className="inline-flex items-center gap-2 font-semibold text-white">
                  <Mail className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  <span>{COMPANY.contacts.email}</span>
                </span>
                <span className="text-xs text-slate-400">Official Email</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Configurator */}
          <div className="rounded-lg border border-white/15 bg-[#0C182E] p-6 shadow-xl sm:p-8 lg:col-span-7">
            {/* Step 1: Sector */}
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#E3BC5A]">
                1. Select Facility or Sector
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {SECTORS.map((item) => {
                  const active = sector === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSector(item)}
                      className={`min-h-11 rounded-md border px-3.5 py-2.5 text-left text-xs font-semibold transition-colors ${
                        active
                          ? "border-[#C89B2B] bg-[#C89B2B]/15 text-white"
                          : "border-white/12 bg-white/[0.03] text-slate-300 hover:border-white/30"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Modules */}
            <div className="mt-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#E3BC5A]">
                2. Required Security Solutions (Select all that apply)
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {DEPLOYMENT_MODULES.map((mod) => {
                  const active = selectedModules.includes(mod);
                  return (
                    <button
                      key={mod}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleModule(mod)}
                      className={`flex min-h-11 items-center justify-between gap-2 rounded-md border px-3.5 py-2.5 text-left text-xs font-semibold transition-colors ${
                        active
                          ? "border-[#C89B2B] bg-white/10 text-white"
                          : "border-white/12 bg-white/[0.03] text-slate-300 hover:border-white/30"
                      }`}
                    >
                      <span>{mod}</span>
                      {active ? (
                        <Check className="h-3.5 w-3.5 shrink-0 text-[#E3BC5A]" aria-hidden="true" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Region & Manpower */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="scope-region"
                  className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#E3BC5A]"
                >
                  3. Deployment Region
                </label>
                <select
                  id="scope-region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="mt-2 min-h-11 w-full rounded-md border border-white/15 bg-[#081120] px-3.5 py-2.5 text-xs font-semibold text-white"
                >
                  {REGIONS.map((reg) => (
                    <option key={reg} value={reg}>
                      {reg}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="scope-guards"
                  className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#E3BC5A]"
                >
                  4. Estimated Post Size
                </label>
                <select
                  id="scope-guards"
                  value={guardEstimate}
                  onChange={(e) => setGuardEstimate(e.target.value)}
                  className="mt-2 min-h-11 w-full rounded-md border border-white/15 bg-[#081120] px-3.5 py-2.5 text-xs font-semibold text-white"
                >
                  {[
                    "1–3 Guards",
                    "4–8 Guards",
                    "9–20 Guards",
                    "20+ Guards / Multi-Site",
                    "Need Site Assessment First",
                  ].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Generated Handoff Actions */}
            <div className="mt-6 rounded-md border border-white/10 bg-[#081120] p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  Ready-to-Send Scope Summary
                </span>
                <button
                  type="button"
                  onClick={() => void copySummary()}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#E3BC5A] hover:underline"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="mt-2 whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-slate-300">
                {summaryText}
              </pre>
            </div>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
              <a
                href={mailtoUrl}
                className="bg-gold-metallic inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md px-4 py-3 text-xs font-bold text-[#081120]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Send via Email</span>
              </a>

              <a
                href={smsUrl}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-white/20 bg-white/[0.06] px-4 py-3 text-xs font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.1]"
              >
                <MessageSquare className="h-4 w-4 text-[#E3BC5A]" aria-hidden="true" />
                <span>Send via SMS</span>
              </a>

              <Link
                href={`/contact?sector=${encodeURIComponent(sector)}&region=${encodeURIComponent(region)}#proposal`}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-white/15 bg-transparent px-4 py-3 text-xs font-semibold text-slate-200 transition-colors hover:border-[#C89B2B] hover:text-white"
              >
                <span>Full Form</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
