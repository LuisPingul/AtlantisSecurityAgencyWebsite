import type { Metadata } from "next";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { InquiryHandoffForm } from "@/components/forms/InquiryHandoffForm";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";

export const metadata: Metadata = {
  title: "Contact Kidapawan & Davao Command Offices",
  description:
    "Request a PADPAO-compliant security proposal or free physical security risk audit from Atlantis Security Agency Inc. in Kidapawan City and Davao City.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-imperial-mesh py-16 text-white lg:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
              24/7 Operations &amp; Client Dispatch
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Connect With Our Kidapawan &amp; Davao Command Desks.
            </h1>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-slate-300 sm:text-lg">
              Request a customized PADPAO-compliant security proposal, schedule a complimentary on-site physical risk assessment, or speak directly with our management team.
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      <section className="bg-[#F5F3EE] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Left Column: Dual Office Cards & Direct Hotlines */}
            <div className="space-y-6 lg:col-span-5">
              {/* Direct Contact Card */}
              <div className="rounded-lg border border-[#0C182E] bg-[#0C182E] p-6 text-white">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
                  Immediate Telephone &amp; Email Dispatch
                </p>
                <h2 className="mt-1.5 text-xl font-bold text-white">
                  Direct Operations Hotlines
                </h2>

                <div className="mt-5 space-y-2.5">
                  {COMPANY.contacts.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="flex min-h-12 items-center justify-between rounded-md border border-white/12 bg-white/[0.04] px-4 py-3 transition-colors hover:border-[#C89B2B]"
                    >
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-[#C89B2B]" aria-hidden="true" />
                        <div>
                          <span className="block font-mono text-sm font-bold text-white">
                            {phone.display}
                          </span>
                          <span className="block text-xs text-slate-300">
                            {phone.label}
                          </span>
                        </div>
                      </div>
                      <span className="rounded-sm border border-white/15 bg-white/[0.06] px-2 py-0.5 font-mono text-[11px] font-medium text-[#E3BC5A]">
                        Call / SMS
                      </span>
                    </a>
                  ))}

                  <a
                    href={`mailto:${COMPANY.contacts.email}`}
                    className="flex min-h-12 items-center justify-between gap-2 rounded-md border border-white/12 bg-white/[0.04] px-4 py-3 transition-colors hover:border-white/35"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <Mail className="h-4 w-4 shrink-0 text-[#C89B2B]" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="block truncate text-sm font-bold text-white">
                          {COMPANY.contacts.email}
                        </span>
                        <span className="block text-xs text-slate-300">
                          Official Agency Email
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-sm border border-white/15 bg-white/[0.06] px-2 py-0.5 font-mono text-[11px] font-medium text-slate-200">
                      Email
                    </span>
                  </a>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-white/12 pt-4 text-xs text-slate-300">
                  <Clock className="h-4 w-4 shrink-0 text-[#C89B2B]" aria-hidden="true" />
                  <span>
                    Office Hours: Mon–Sat 8:00 AM – 5:00 PM · Field Inspection &amp; Dispatch: 24/7
                  </span>
                </div>
              </div>

              {/* Dual Offices */}
              {COMPANY.offices.map((office) => (
                <div
                  key={office.id}
                  className="rounded-lg border border-slate-200 bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#8A6510]">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{office.type}</span>
                    </span>
                    <span className="font-mono text-xs font-medium text-[#475569]">
                      {office.city}
                    </span>
                  </div>

                  <h3 className="mt-2.5 text-lg font-bold text-[#0B1324]">
                    {office.city} Command Office
                  </h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-[#0B1324]">
                    {office.address}
                  </p>
                  <p className="mt-0.5 text-xs text-[#475569]">{office.region}</p>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      office.mapsQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0C182E] underline-offset-4 hover:text-[#8A6510] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>

            {/* Right Column: Validated Proposal & Inquiry Handoff Form */}
            <div className="lg:col-span-7">
              <InquiryHandoffForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
