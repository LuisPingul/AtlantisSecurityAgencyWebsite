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
      {/* Left: Interactive 12-Point Eligibility Pre-Screener (Slide 17) */}
      <div className="rounded-2xl border border-[#1B1654]/15 bg-white p-6 shadow-sm sm:p-8 lg:col-span-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1B1654]/10 pb-4">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#1B1654]">
              Step 1 · Interactive Eligibility Self-Check
            </p>
            <h3 className="mt-1 text-xl font-extrabold text-[#11102B]">
              12 Minimum Agency Requirements
            </h3>
          </div>
          <button
            type="button"
            onClick={selectAllRequirements}
            className="rounded-lg border border-[#1B1654]/20 bg-[#F6F5F0] px-3 py-1.5 text-xs font-bold text-[#16123D] hover:border-[#E5B63B]"
          >
            Check All 12
          </button>
        </div>

        {/* Live Qualification Meter */}
        <div
          className={`mt-4 flex items-center justify-between rounded-xl border p-4 ${
            isFullyQualified
              ? "border-emerald-600/30 bg-emerald-50 text-emerald-950"
              : "border-[#E5B63B]/45 bg-[#16123D] text-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck
              className={`h-6 w-6 shrink-0 ${
                isFullyQualified ? "text-emerald-600" : "text-[#E5B63B]"
              }`}
            />
            <div>
              <p className="text-sm font-extrabold">
                {isFullyQualified
                  ? "Ready for Priority Recruitment Screening!"
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
          <span className="font-mono text-lg font-extrabold">
            {Math.round((metCount / totalCount) * 100)}%
          </span>
        </div>

        <div className="mt-5 max-h-[540px] space-y-2.5 overflow-y-auto pr-1">
          {MINIMUM_QUALIFICATIONS.map((item, idx) => {
            const checked = checkedIds.includes(item.id);
            return (
              <label
                key={item.id}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-colors ${
                  checked
                    ? "border-[#16123D] bg-[#F6F5F0]"
                    : "border-[#1B1654]/10 bg-white hover:border-[#1B1654]/30"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleRequirement(item.id)}
                  className="mt-1 h-4 w-4 rounded border-[#1B1654]/30 accent-[#16123D]"
                />
                <div>
                  <p className="text-sm font-bold text-[#11102B]">
                    <span className="mr-1.5 font-mono text-xs text-[#B8861A]">
                      {String.fromCharCode(97 + idx)}.
                    </span>
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#4A4968]">
                    {item.detail}
                  </p>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Right: Guard Application Form */}
      <div className="rounded-2xl border border-[#1B1654]/15 bg-white p-6 shadow-sm sm:p-8 lg:col-span-6">
        <div className="border-b border-[#1B1654]/10 pb-4">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#1B1654]">
            Step 2 · Submit Guard Application
          </p>
          <h3 className="mt-1 text-xl font-extrabold text-[#11102B]">
            Apply to Join the Atlantis Roster
          </h3>
          <p className="mt-1 text-xs text-[#4A4968]">
            Priority preference is extended to 2nd-Year College completers, College Graduates, and retired Military or Police personnel.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label
              htmlFor="app-name"
              className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
            >
              Applicant Full Name *
            </label>
            <input
              id="app-name"
              type="text"
              required
              minLength={2}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Juan M. Dela Cruz"
              className="atlantis-input mt-1 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm text-[#11102B]"
            />
            <div className="atlantis-field-error">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>Please enter your full legal name.</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label
                htmlFor="app-age"
                className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
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
                className="atlantis-input mt-1 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm text-[#11102B]"
              />
              <div className="atlantis-field-error">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>Age must be between 21 and 55.</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="app-gender"
                className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
              >
                Sex / Stature
              </label>
              <select
                id="app-gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm font-medium text-[#11102B]"
              >
                <option value="Male (5ft 4in+, 60kg+)">Male (≥ 5&apos;4&quot;, ≥ 60kg)</option>
                <option value="Female (5ft 2in+, 50kg+)">Female (≥ 5&apos;2&quot;, ≥ 50kg)</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="app-city"
                className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
              >
                City / Municipality *
              </label>
              <input
                id="app-city"
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Davao City"
                className="atlantis-input mt-1 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm text-[#11102B]"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="app-phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
              >
                Mobile Contact Number *
              </label>
              <input
                id="app-phone"
                type="tel"
                required
                pattern="[0-9+\-\s()]{7,20}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0916 605 5174"
                className="atlantis-input mt-1 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm text-[#11102B]"
              />
              <div className="atlantis-field-error">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>Enter a valid mobile number.</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="app-license"
                className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
              >
                PNP-SOSIA License Status
              </label>
              <select
                id="app-license"
                value={licenseStatus}
                onChange={(e) => setLicenseStatus(e.target.value)}
                className="mt-1 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm font-medium text-[#11102B]"
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
              className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
            >
              Education / Service Background
            </label>
            <select
              id="app-edu"
              value={educationBg}
              onChange={(e) => setEducationBg(e.target.value)}
              className="mt-1 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm font-medium text-[#11102B]"
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
              className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
            >
              Prior Security Posts, Trainings &amp; Clearances On Hand
            </label>
            <textarea
              id="app-exp"
              rows={3}
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="List previous security deployments, years of service, and available clearances (NBI, Police, NP exam, SSS, PhilHealth, Pag-IBIG, TIN)..."
              className="mt-1 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm text-[#11102B]"
            />
          </div>

          <button
            type="submit"
            className="bg-gold-metallic inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-extrabold text-[#070816] shadow-md transition-transform hover:-translate-y-0.5"
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>Generate Official Application Packet</span>
          </button>
        </form>

        {packet ? (
          <div className="mt-6 rounded-2xl border border-[#E5B63B] bg-[#120F34] p-5 text-white">
            <div className="flex items-center justify-between gap-2">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#00C2F0]">
                Application Packet Ready
              </p>
              <button
                type="button"
                onClick={() => void copyPacket(packet)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#F5D576]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Application</span>
                  </>
                )}
              </button>
            </div>

            <pre className="mt-2.5 whitespace-pre-wrap rounded-xl border border-white/10 bg-[#070816]/90 p-3 font-mono text-xs leading-relaxed text-slate-300">
              {packet}
            </pre>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <a
                href={`mailto:${COMPANY.contacts.email}?subject=${encodeURIComponent(
                  `Security Guard Application — ${fullName}`
                )}&body=${encodeURIComponent(packet)}`}
                className="bg-gold-metallic inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-extrabold text-[#070816]"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Send via Email</span>
              </a>

              <a
                href={`sms:${COMPANY.contacts.phones[0].tel}?&body=${encodeURIComponent(
                  packet
                )}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#00C2F0]/45 bg-[#00C2F0]/15 px-3 py-2.5 text-xs font-bold text-white"
              >
                <MessageSquare className="h-3.5 w-3.5 text-[#00C2F0]" />
                <span>Send via SMS</span>
              </a>

              <a
                href={COMPANY.contacts.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => void copyPacket(packet)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-xs font-bold text-white"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#F5D576]" />
                <span>Facebook HR</span>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
