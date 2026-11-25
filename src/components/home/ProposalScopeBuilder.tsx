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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-tactical-grid opacity-30"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Left Narrative */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F5D576]">
              <ShieldCheck className="h-4 w-4 text-[#E5B63B]" />
              <span>Interactive Deployment Scope Builder</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Let Atlantis Protect{" "}
              <span className="text-gold-gradient">What Matters Most to You.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Configure your facility profile in seconds to generate a structured PADPAO-compliant proposal request—then send it directly to our Kidapawan or Davao operations desk via Email, SMS, or full proposal form.
            </p>

            <div className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#00C2F0]">
                Direct Operations Hotlines
              </p>
              {COMPANY.contacts.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-[#070816]/75 px-4 py-3 text-sm transition-colors hover:border-[#E5B63B]"
                >
                  <span className="inline-flex items-center gap-2 font-bold text-white">
                    <Phone className="h-4 w-4 text-[#E5B63B]" />
                    <span>{phone.display}</span>
                  </span>
                  <span className="text-xs text-slate-400">{phone.label}</span>
                </a>
              ))}
              <a
                href={`mailto:${COMPANY.contacts.email}`}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-[#070816]/75 px-4 py-3 text-sm transition-colors hover:border-[#00C2F0]"
              >
                <span className="inline-flex items-center gap-2 font-semibold text-white">
                  <Mail className="h-4 w-4 text-[#00C2F0]" />
                  <span>{COMPANY.contacts.email}</span>
                </span>
                <span className="text-xs text-slate-400">Official Email</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Configurator */}
          <div className="rounded-2xl border border-[#E5B63B]/40 bg-[#110E31] p-6 shadow-2xl sm:p-8 lg:col-span-7">
            {/* Step 1: Sector */}
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F5D576]">
                1. Select Facility or Sector
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {SECTORS.map((item) => {
                  const active = sector === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSector(item)}
                      className={`rounded-xl border px-3.5 py-2.5 text-left text-xs font-bold transition-all ${
                        active
                          ? "border-[#E5B63B] bg-[#E5B63B]/15 text-white"
                          : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/30"
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
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F5D576]">
                2. Required Security Solutions (Select all that apply)
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {DEPLOYMENT_MODULES.map((mod) => {
                  const active = selectedModules.includes(mod);
                  return (
                    <button
                      key={mod}
                      type="button"
                      onClick={() => toggleModule(mod)}
                      className={`flex items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-left text-xs font-semibold transition-all ${
                        active
                          ? "border-[#00C2F0] bg-[#00C2F0]/15 text-white"
                          : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/30"
                      }`}
                    >
                      <span>{mod}</span>
                      {active ? (
                        <Check className="h-3.5 w-3.5 shrink-0 text-[#00C2F0]" />
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
                  className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#F5D576]"
                >
                  3. Deployment Region
                </label>
                <select
                  id="scope-region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#070816] px-3.5 py-2.5 text-xs font-semibold text-white"
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
                  className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#F5D576]"
                >
                  4. Estimated Post Size
                </label>
                <select
                  id="scope-guards"
                  value={guardEstimate}
                  onChange={(e) => setGuardEstimate(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#070816] px-3.5 py-2.5 text-xs font-semibold text-white"
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
            <div className="mt-6 rounded-xl border border-white/10 bg-[#070816]/90 p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#00C2F0]">
                  Ready-to-Send Scope Summary
                </span>
                <button
                  type="button"
                  onClick={() => void copySummary()}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#F5D576] hover:underline"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
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
                className="bg-gold-metallic inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-xs font-extrabold text-[#070816]"
              >
                <Mail className="h-4 w-4" />
                <span>Send via Email</span>
              </a>

              <a
                href={smsUrl}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#00C2F0]/45 bg-[#00C2F0]/15 px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-[#00C2F0]/25"
              >
                <MessageSquare className="h-4 w-4 text-[#00C2F0]" />
                <span>Send via SMS</span>
              </a>

              <Link
                href={`/contact?sector=${encodeURIComponent(sector)}&region=${encodeURIComponent(region)}#proposal`}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-xs font-bold text-white transition-colors hover:border-[#E5B63B]"
              >
                <span>Full Form</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
