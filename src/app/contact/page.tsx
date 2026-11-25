import type { Metadata } from "next";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { InquiryHandoffForm } from "@/components/forms/InquiryHandoffForm";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";

export const metadata: Metadata = {
  title: "Contact Kidapawan & Davao Command Offices",
  description:
    "Request a PADPAO-compliant security proposal or free physical security risk audit from Atlantis Security Agency Inc. in Kidapawan City and Davao City.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    service?: string;
    sector?: string;
    region?: string;
  }>;
}) {
  const params = await searchParams;

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
              <ShieldCheck className="h-3.5 w-3.5 text-[#E5B63B]" />
              <span>24/7 Operations &amp; Client Dispatch</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Connect With Our{" "}
              <span className="text-gold-gradient">Kidapawan &amp; Davao Command Desks.</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Request a customized PADPAO-compliant security proposal, schedule a complimentary on-site physical risk assessment, or speak directly with our management team.
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      <section className="bg-[#F6F5F0] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Left Column: Dual Office Cards & Direct Hotlines */}
            <div className="space-y-6 lg:col-span-5">
              {/* Direct Contact Card */}
              <div className="rounded-2xl border border-[#E5B63B]/40 bg-[#120F34] p-6 text-white shadow-lg">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#00C2F0]">
                  Immediate Telephone &amp; Email Dispatch
                </p>
                <h2 className="mt-1.5 text-xl font-extrabold text-white">
                  Direct Operations Hotlines
                </h2>

                <div className="mt-5 space-y-3">
                  {COMPANY.contacts.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 transition-colors hover:border-[#E5B63B]"
                    >
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-[#E5B63B]" />
                        <div>
                          <span className="block text-base font-extrabold text-white">
                            {phone.display}
                          </span>
                          <span className="block text-xs text-slate-300">
                            {phone.label}
                          </span>
                        </div>
                      </div>
                      <span className="rounded-md bg-[#E5B63B]/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-[#F5D576]">
                        Call / SMS
                      </span>
                    </a>
                  ))}

                  <a
                    href={`mailto:${COMPANY.contacts.email}`}
                    className="flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 transition-colors hover:border-[#00C2F0]"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#00C2F0]" />
                      <div>
                        <span className="block text-sm font-bold text-white">
                          {COMPANY.contacts.email}
                        </span>
                        <span className="block text-xs text-slate-300">
                          Official Agency Email
                        </span>
                      </div>
                    </div>
                    <span className="rounded-md bg-[#00C2F0]/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-[#00C2F0]">
                      Email
                    </span>
                  </a>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-slate-300">
                  <Clock className="h-4 w-4 shrink-0 text-[#E5B63B]" />
                  <span>
                    Office Hours: Mon–Sat 8:00 AM – 5:00 PM · Field Inspection &amp; Dispatch: 24/7
                  </span>
                </div>
              </div>

              {/* Dual Offices */}
              {COMPANY.offices.map((office) => (
                <div
                  key={office.id}
                  className="rounded-2xl border border-[#1B1654]/15 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#16123D] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#F5D576]">
                      <MapPin className="h-3.5 w-3.5 text-[#E5B63B]" />
                      <span>{office.type}</span>
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#4A4968]">
                      {office.city}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-extrabold text-[#11102B]">
                    {office.city} Command Office
                  </h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-[#11102B]">
                    {office.address}
                  </p>
                  <p className="mt-0.5 text-xs text-[#4A4968]">{office.region}</p>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      office.mapsQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#16123D] underline-offset-2 hover:text-[#B8861A] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>

            {/* Right Column: Validated Proposal & Inquiry Handoff Form */}
            <div className="lg:col-span-7">
              <InquiryHandoffForm
                defaultService={params.service || ""}
                defaultSector={params.sector || ""}
                defaultRegion={params.region || ""}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
