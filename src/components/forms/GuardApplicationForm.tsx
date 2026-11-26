"use client";

import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Mail,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { MINIMUM_QUALIFICATIONS } from "@/data/careers";

export function GuardApplicationForm() {
  const [checkedIds, setCheckedIds] = useState<string[]>([
    "citizenship",
    "age",
    "moral",
    "pnp-license",
  ]);
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Davao City");
  const [licenseStatus, setLicenseStatus] = useState(
    "Active PNP-SOSIA License"
  );
  const [educationBg, setEducationBg] = useState("College Level / Graduate");
  const [experience, setExperience] = useState("");
  const [packet, setPacket] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const toggleRequirement = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAllRequirements = () => {
    setCheckedIds(MINIMUM_QUALIFICATIONS.map((q) => q.id));
  };

  const metCount = checkedIds.length;
  const totalCount = MINIMUM_QUALIFICATIONS.length;
  const isFullyQualified = metCount === totalCount;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(":invalid");
      firstInvalid?.focus();
      return;
    }

    const summary = [
      `SECURITY GUARD APPLICATION — ${COMPANY.legalName}`,
      `• Applicant Name: ${fullName}`,
      `• Age / Gender: ${age} yrs old (${gender})`,
      `• Mobile Number: ${phone}`,
      `• Current Residence: ${city}`,
      `• PNP-SOSIA License Status: ${licenseStatus}`,
      `• Educational / Service Background: ${educationBg}`,
      `• Pre-Screener Score: ${metCount}/${totalCount} Minimum Agency Requirements Checked`,
      experience.trim() ? `• Prior Security Experience: ${experience.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    setPacket(summary);
  };

  // shortcut: client-side mailto/SMS/Facebook HR packet handoff without applicant DB, upgrade when HR applicant portal backend is added
  const copyPacket = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API unavailable
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* Left: Interactive 12-Point Eligibility Pre-Screener */}
      <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8A6510]">
              Step 1 · Eligibility Self-Check
            </p>
            <h3 className="mt-1 text-xl font-bold text-[#0B1324]">
              12 Minimum Agency Requirements
            </h3>
          </div>
          <button
            type="button"
            onClick={selectAllRequirements}
            className="min-h-9 rounded-md border border-slate-300 bg-[#F5F3EE] px-3 py-1.5 text-xs font-semibold text-[#0B1324] hover:border-[#0C182E]"
          >
            Check All 12
          </button>
        </div>

        {/* Live Qualification Meter */}
        <div
          className={`mt-4 flex items-center justify-between rounded-md border p-4 ${
            isFullyQualified
              ? "border-emerald-700/30 bg-emerald-50 text-emerald-950"
              : "border-[#0C182E] bg-[#0C182E] text-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck
              className={`h-5 w-5 shrink-0 ${
                isFullyQualified ? "text-emerald-700" : "text-[#E3BC5A]"
              }`}
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-bold">
                {isFullyQualified
                  ? "Ready for Priority Recruitment Screening"
                  : `${metCount} of ${totalCount} Requirements Verified`}
              </p>
              <p
                className={`text-xs ${
                  isFullyQualified ? "text-emerald-800" : "text-slate-300"
                }`}
              >
                {isFullyQualified
                  ? "You meet all 12 baseline agency qualifications."
                  : "Check each requirement you currently satisfy below."}
              </p>
            </div>
          </div>
          <span className="font-mono text-lg font-bold tabular-nums">
            {Math.round((metCount / totalCount) * 100)}%
          </span>
        </div>

        <div className="scroll-panel-stable mt-5 max-h-[540px] divide-y divide-slate-200 rounded-md border border-slate-200">
          {MINIMUM_QUALIFICATIONS.map((item, idx) => {
            const checked = checkedIds.includes(item.id);
            return (
              <label
                key={item.id}
                className={`flex cursor-pointer items-start gap-3 p-3.5 transition-colors ${
                  checked ? "bg-[#F5F3EE]" : "bg-white hover:bg-[#F5F3EE]/50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleRequirement(item.id)}
                  className="mt-1 h-4 w-4 rounded border-slate-400 accent-[#0C182E]"
                />
                <div>
                  <p className="text-sm font-bold text-[#0B1324]">
                    <span className="mr-1.5 font-mono text-xs text-[#8A6510]">
                      {String.fromCharCode(97 + idx)}.
                    </span>
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#475569]">
                    {item.detail}
                  </p>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Right: Guard Application Form */}
      <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-6">
        <div className="border-b border-slate-200 pb-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8A6510]">
            Step 2 · Submit Guard Application
          </p>
          <h3 className="mt-1 text-xl font-bold text-[#0B1324]">
            Apply to Join the Atlantis Roster
          </h3>
          <p className="mt-1 text-xs text-[#475569]">
            Priority preference is extended to 2nd-Year College completers, College Graduates, and retired Military or Police personnel.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label
              htmlFor="app-name"
              className="block text-xs font-bold uppercase tracking-wider text-[#0B1324]"
            >
              Applicant Full Name *
            </label>
            <input
              id="app-name"
              type="text"
              required
              minLength={2}
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Juan M. Dela Cruz"
              className="atlantis-input mt-1 min-h-11 w-full rounded-md border border-slate-300 bg-[#F5F3EE]/60 px-3.5 py-2.5 text-base text-[#0B1324] sm:text-sm"
            />
            <div className="atlantis-field-error">
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Please enter your full legal name.</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label
                htmlFor="app-age"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1324]"
              >
                Age (21–55) *
              </label>
              <input
                id="app-age"
                type="number"
                required
                min={21}
                max={55}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="28"
                className="atlantis-input mt-1 min-h-11 w-full rounded-md border border-slate-300 bg-[#F5F3EE]/60 px-3.5 py-2.5 text-base text-[#0B1324] sm:text-sm"
              />
              <div className="atlantis-field-error">
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Age must be between 21 and 55.</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="app-gender"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1324]"
              >
                Sex / Stature
              </label>
              <select
                id="app-gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 min-h-11 w-full rounded-md border border-slate-300 bg-[#F5F3EE]/60 px-3.5 py-2.5 text-base font-medium text-[#0B1324] sm:text-sm"
              >
                <option value="Male (5ft 4in+, 60kg+)">Male (≥ 5&apos;4&quot;, ≥ 60kg)</option>
                <option value="Female (5ft 2in+, 50kg+)">Female (≥ 5&apos;2&quot;, ≥ 50kg)</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="app-city"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1324]"
              >
                City / Municipality *
              </label>
              <input
                id="app-city"
                type="text"
                required
                autoComplete="address-level2"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Davao City"
                className="atlantis-input mt-1 min-h-11 w-full rounded-md border border-slate-300 bg-[#F5F3EE]/60 px-3.5 py-2.5 text-base text-[#0B1324] sm:text-sm"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="app-phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1324]"
              >
                Mobile Contact Number *
              </label>
              <input
                id="app-phone"
                type="tel"
                required
                pattern="[0-9+\-\s()]{7,20}"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0916 605 5174"
                className="atlantis-input mt-1 min-h-11 w-full rounded-md border border-slate-300 bg-[#F5F3EE]/60 px-3.5 py-2.5 text-base text-[#0B1324] sm:text-sm"
              />
              <div className="atlantis-field-error">
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Enter a valid mobile number.</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="app-license"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1324]"
              >
                PNP-SOSIA License Status
              </label>
              <select
                id="app-license"
                value={licenseStatus}
                onChange={(e) => setLicenseStatus(e.target.value)}
                className="mt-1 min-h-11 w-full rounded-md border border-slate-300 bg-[#F5F3EE]/60 px-3.5 py-2.5 text-base font-medium text-[#0B1324] sm:text-sm"
              >
                <option value="Active PNP-SOSIA Security Guard License">
                  Active PNP-SOSIA Security Guard License
                </option>
                <option value="Active PNP-SOSIA Security Officer License">
                  Active PNP-SOSIA Security Officer License
                </option>
                <option value="Completed PLTC / Processing License">
                  Completed PLTC / Processing License
                </option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="app-edu"
              className="block text-xs font-bold uppercase tracking-wider text-[#0B1324]"
            >
              Education / Service Background
            </label>
            <select
              id="app-edu"
              value={educationBg}
              onChange={(e) => setEducationBg(e.target.value)}
              className="mt-1 min-h-11 w-full rounded-md border border-slate-300 bg-[#F5F3EE]/60 px-3.5 py-2.5 text-base font-medium text-[#0B1324] sm:text-sm"
            >
              <option value="College Graduate (Priority)">
                College Graduate (Priority)
              </option>
              <option value="Completed 2nd-Year College (Priority)">
                Completed 2nd-Year College (Priority)
              </option>
              <option value="Retired Military / PNP Personnel (Priority)">
                Retired Military / PNP Personnel (Priority)
              </option>
              <option value="High School / Senior High Graduate">
                High School / Senior High Graduate
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="app-exp"
              className="block text-xs font-bold uppercase tracking-wider text-[#0B1324]"
            >
              Prior Security Posts, Trainings &amp; Clearances On Hand
            </label>
            <textarea
              id="app-exp"
              rows={3}
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="List previous security deployments, years of service, and available clearances (NBI, Police, NP exam, SSS, PhilHealth, Pag-IBIG, TIN)..."
              className="mt-1 w-full rounded-md border border-slate-300 bg-[#F5F3EE]/60 px-3.5 py-2.5 text-base text-[#0B1324] sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-gold-metallic inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-[#081120] transition-colors"
          >
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            <span>Generate Official Application Packet</span>
          </button>
        </form>

        {packet ? (
          <div className="mt-6 rounded-lg border border-[#0C182E] bg-[#0C182E] p-5 text-white">
            <div className="flex items-center justify-between gap-2">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#E3BC5A]">
                Application Packet Ready
              </p>
              <button
                type="button"
                onClick={() => void copyPacket(packet)}
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
                    <span>Copy Application</span>
                  </>
                )}
              </button>
            </div>

            <pre className="mt-2.5 whitespace-pre-wrap rounded-md border border-white/10 bg-[#081120] p-3 font-mono text-xs leading-relaxed text-slate-300">
              {packet}
            </pre>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <a
                href={`mailto:${COMPANY.contacts.email}?subject=${encodeURIComponent(
                  `Security Guard Application — ${fullName}`
                )}&body=${encodeURIComponent(packet)}`}
                className="bg-gold-metallic inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-bold text-[#081120]"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Send via Email</span>
              </a>

              <a
                href={`sms:${COMPANY.contacts.phones[0].tel}?&body=${encodeURIComponent(
                  packet
                )}`}
                className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md border border-white/20 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white"
              >
                <MessageSquare className="h-3.5 w-3.5 text-[#E3BC5A]" aria-hidden="true" />
                <span>Send via SMS</span>
              </a>

              <a
                href={COMPANY.contacts.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => void copyPacket(packet)}
                className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md border border-white/15 bg-transparent px-3 py-2 text-xs font-semibold text-white"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#E3BC5A]" aria-hidden="true" />
                <span>Facebook HR</span>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
