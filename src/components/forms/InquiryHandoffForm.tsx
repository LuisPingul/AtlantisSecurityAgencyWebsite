"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  AlertCircle,
  Check,
  Copy,
  ExternalLink,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { SECURITY_SERVICES } from "@/data/services";

type InquiryTab =
  | "Request Security Proposal"
  | "Schedule Free Risk Audit"
  | "General Inquiry";

export function InquiryHandoffForm({
  defaultService = "",
  defaultSector = "",
  defaultRegion = "",
}: {
  defaultService?: string;
  defaultSector?: string;
  defaultRegion?: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const announcerRef = useRef<HTMLDivElement>(null);

  const [tab, setTab] = useState<InquiryTab>("Request Security Proposal");
  const [organization, setOrganization] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState(
    defaultRegion || "Davao City / Region XI"
  );
  const [service, setService] = useState(
    defaultService || SECURITY_SERVICES[0].shortTitle
  );
  const [guardCount, setGuardCount] = useState("4–8 Guards");
  const [notes, setNotes] = useState(
    defaultSector ? `Facility Type: ${defaultSector}` : ""
  );
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync :user-invalid with aria-invalid and dynamic aria-describedby per modern-web-guidance
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const linkError = (el: HTMLElement, shown: boolean) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const ids = (el.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter((id) => id && id !== errorId);
      if (shown) ids.push(errorId);
      if (ids.length > 0) el.setAttribute("aria-describedby", ids.join(" "));
      else el.removeAttribute("aria-describedby");
    };

    const syncField = (target: EventTarget | null, announce = false) => {
      if (
        !(target instanceof HTMLInputElement) &&
        !(target instanceof HTMLSelectElement) &&
        !(target instanceof HTMLTextAreaElement)
      ) {
        return;
      }

      let isUserInvalid = false;
      try {
        isUserInvalid = target.matches(":user-invalid");
      } catch {
        isUserInvalid = !target.validity.valid;
      }

      if (isUserInvalid) {
        target.setAttribute("aria-invalid", "true");
        linkError(target, true);
        if (announce && announcerRef.current && target.dataset.error) {
          const errNode = document.getElementById(target.dataset.error);
          if (errNode) {
            announcerRef.current.textContent = errNode.textContent || "";
          }
        }
      } else {
        target.setAttribute("aria-invalid", "false");
        linkError(target, false);
      }
    };

    form
      .querySelectorAll("input, select, textarea")
      .forEach((el) => el.setAttribute("aria-invalid", "false"));

    const onBlur = (e: Event) => syncField(e.target, true);
    const onInput = (e: Event) => syncField(e.target, false);
    const onInvalid = (e: Event) => syncField(e.target, false);

    form.addEventListener("blur", onBlur, true);
    form.addEventListener("input", onInput);
    form.addEventListener("change", onBlur, true);
    form.addEventListener("invalid", onInvalid, true);

    return () => {
      form.removeEventListener("blur", onBlur, true);
      form.removeEventListener("input", onInput);
      form.removeEventListener("change", onBlur, true);
      form.removeEventListener("invalid", onInvalid, true);
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(":invalid");
      firstInvalid?.focus();
      return;
    }

    const summary = [
      `${tab.toUpperCase()} — ${COMPANY.legalName}`,
      `• Organization / Facility: ${organization}`,
      `• Contact Person: ${contactPerson}`,
      `• Mobile / Phone: ${phone}`,
      `• Email Address: ${email}`,
      `• Site Location: ${location}`,
      `• Primary Service Needed: ${service}`,
      `• Estimated Manpower: ${guardCount}`,
      notes.trim() ? `• Site Details & Notes: ${notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    setSubmittedSummary(summary);
  };

  const copySummary = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API unavailable
    }
  };

  return (
    <div
      id="proposal"
      className="rounded-2xl border border-[#1B1654]/15 bg-white p-6 shadow-md sm:p-8"
    >
      <div
        ref={announcerRef}
        aria-live="polite"
        className="visually-hidden"
      />

      {/* Inquiry Mode Tabs */}
      <div
        role="tablist"
        aria-label="Select inquiry type"
        className="flex flex-wrap gap-2 border-b border-[#1B1654]/10 pb-5"
      >
        {(
          [
            "Request Security Proposal",
            "Schedule Free Risk Audit",
            "General Inquiry",
          ] as InquiryTab[]
        ).map((item) => {
          const active = tab === item;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(item)}
              className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                active
                  ? "bg-[#16123D] text-[#F5D576] shadow-sm"
                  : "bg-[#F6F5F0] text-[#11102B] hover:bg-[#1B1654]/10"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-6 space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Organization */}
          <div>
            <label
              htmlFor="inq-org"
              className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
            >
              Company / Institution Name *
            </label>
            <span
              id="inq-org-hint"
              className="mt-0.5 block text-xs text-[#4A4968]"
            >
              Business, school, plant, subdivision, or event name
            </span>
            <input
              id="inq-org"
              name="organization"
              type="text"
              required
              minLength={2}
              autoComplete="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              aria-describedby="inq-org-hint"
              data-error="inq-org-error"
              placeholder="e.g., Green Gold Processing Plant"
              className="atlantis-input mt-1.5 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm text-[#11102B]"
            />
            <div id="inq-org-error" className="atlantis-field-error">
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Please enter your company, property, or organization name.</span>
            </div>
          </div>

          {/* Contact Person */}
          <div>
            <label
              htmlFor="inq-person"
              className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
            >
              Contact Person &amp; Role *
            </label>
            <span
              id="inq-person-hint"
              className="mt-0.5 block text-xs text-[#4A4968]"
            >
              Full name of authorized representative
            </span>
            <input
              id="inq-person"
              name="contactPerson"
              type="text"
              required
              minLength={2}
              autoComplete="name"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              aria-describedby="inq-person-hint"
              data-error="inq-person-error"
              placeholder="e.g., Juan Dela Cruz — Operations Manager"
              className="atlantis-input mt-1.5 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm text-[#11102B]"
            />
            <div id="inq-person-error" className="atlantis-field-error">
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Please enter your full name.</span>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Email */}
          <div>
            <label
              htmlFor="inq-email"
              className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
            >
              Official Email Address *
            </label>
            <span
              id="inq-email-hint"
              className="mt-0.5 block text-xs text-[#4A4968]"
            >
              Format: name@company.com
            </span>
            <input
              id="inq-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="inq-email-hint"
              data-error="inq-email-error"
              placeholder="you@company.com"
              className="atlantis-input mt-1.5 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm text-[#11102B]"
            />
            <div id="inq-email-error" className="atlantis-field-error">
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Enter a valid email address in the format you@company.com.</span>
            </div>
          </div>

          {/* Mobile / Phone */}
          <div>
            <label
              htmlFor="inq-phone"
              className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
            >
              Mobile or Landline Number *
            </label>
            <span
              id="inq-phone-hint"
              className="mt-0.5 block text-xs text-[#4A4968]"
            >
              Format: 09XX XXX XXXX or +63 9XX XXX XXXX
            </span>
            <input
              id="inq-phone"
              name="phone"
              type="tel"
              required
              pattern="[0-9+\-\s()]{7,20}"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-describedby="inq-phone-hint"
              data-error="inq-phone-error"
              placeholder="0916 605 5174"
              className="atlantis-input mt-1.5 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm text-[#11102B]"
            />
            <div id="inq-phone-error" className="atlantis-field-error">
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Please enter a valid contact phone number (at least 7 digits).</span>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {/* Primary Service */}
          <div>
            <label
              htmlFor="inq-service"
              className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
            >
              Primary Service
            </label>
            <select
              id="inq-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm font-medium text-[#11102B]"
            >
              {SECURITY_SERVICES.map((s) => (
                <option key={s.id} value={s.shortTitle}>
                  {s.shortTitle}
                </option>
              ))}
            </select>
          </div>

          {/* Site Location */}
          <div>
            <label
              htmlFor="inq-location"
              className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
            >
              Deployment City / Region *
            </label>
            <input
              id="inq-location"
              name="location"
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              data-error="inq-location-error"
              placeholder="Davao City / Kidapawan City"
              className="atlantis-input mt-1.5 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm text-[#11102B]"
            />
            <div id="inq-location-error" className="atlantis-field-error">
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Please indicate the site city or province.</span>
            </div>
          </div>

          {/* Estimated Manpower */}
          <div>
            <label
              htmlFor="inq-guards"
              className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
            >
              Estimated Manpower
            </label>
            <select
              id="inq-guards"
              value={guardCount}
              onChange={(e) => setGuardCount(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm font-medium text-[#11102B]"
            >
              <option value="1–3 Guards">1–3 Guards</option>
              <option value="4–8 Guards">4–8 Guards</option>
              <option value="9–20 Guards">9–20 Guards</option>
              <option value="20+ Guards / Multi-Site">20+ Guards / Multi-Site</option>
              <option value="Need Site Audit First">Need Site Audit First</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label
            htmlFor="inq-notes"
            className="block text-xs font-bold uppercase tracking-wider text-[#11102B]"
          >
            Site Requirements, Shift Schedule, or Special Instructions
          </label>
          <textarea
            id="inq-notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Share target start date, 12h/24h coverage, free CCTV setup inquiry, or specific perimeter concerns..."
            className="mt-1.5 w-full rounded-xl border border-[#1B1654]/20 bg-[#F6F5F0]/60 px-3.5 py-2.5 text-sm text-[#11102B]"
          />
        </div>

        <button
          type="submit"
          className="bg-gold-metallic inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-extrabold text-[#070816] shadow-md transition-transform hover:-translate-y-0.5 sm:w-auto"
        >
          <Send className="h-4 w-4" />
          <span>Prepare Official Dispatch Packet</span>
        </button>
      </form>

      {/* Instant Multi-Channel Handoff Panel after validation */}
      {submittedSummary ? (
        <div
          role="region"
          aria-label="Prepared inquiry dispatch options"
          className="mt-6 rounded-2xl border border-[#E5B63B] bg-[#120F34] p-5 text-white"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#00C2F0]">
                Inquiry Validated &amp; Ready to Send
              </p>
              <p className="text-sm font-bold text-white">
                Choose your preferred instant channel to dispatch to Atlantis Management:
              </p>
            </div>
            <button
              type="button"
              onClick={() => void copySummary(submittedSummary)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#F5D576]"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Summary Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Summary</span>
                </>
              )}
            </button>
          </div>

          <pre className="mt-3 whitespace-pre-wrap rounded-xl border border-white/10 bg-[#070816]/90 p-3.5 font-mono text-xs leading-relaxed text-slate-300">
            {submittedSummary}
          </pre>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
            <a
              href={`mailto:${COMPANY.contacts.email}?subject=${encodeURIComponent(
                `${tab} — ${organization}`
              )}&body=${encodeURIComponent(submittedSummary)}`}
              className="bg-gold-metallic inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-extrabold text-[#070816]"
            >
              <Mail className="h-4 w-4" />
              <span>1. Send via Email ({COMPANY.contacts.email})</span>
            </a>

            <a
              href={`sms:${COMPANY.contacts.phones[0].tel}?&body=${encodeURIComponent(
                submittedSummary
              )}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#00C2F0]/45 bg-[#00C2F0]/15 px-4 py-3 text-xs font-bold text-white hover:bg-[#00C2F0]/25"
            >
              <MessageSquare className="h-4 w-4 text-[#00C2F0]" />
              <span>2. Send via SMS ({COMPANY.contacts.phones[0].display})</span>
            </a>

            <a
              href={COMPANY.contacts.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => void copySummary(submittedSummary)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold text-white hover:border-[#E5B63B]"
            >
              <ExternalLink className="h-4 w-4 text-[#F5D576]" />
              <span>3. Copy &amp; Open Facebook Page</span>
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
