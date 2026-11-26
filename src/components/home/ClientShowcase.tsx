import Image from "next/image";
import { Building2, Lock, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ACTIVE_DEPLOYMENTS,
  CLIENT_PRIVACY_NOTE,
  CONFIDENTIAL_PARTNERS,
} from "@/data/clients";

export function ClientShowcase() {
  return (
    <section id="clients" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Proven Across Luzon, Visayas & Mindanao"
          title="Trusted by"
          highlight="Industry Leaders"
          description="From educational campuses and 24/7 convenience chains to industrial processing plants and hospitality venues, leading organizations rely on Atlantis for disciplined daily protection."
        />

        {/* Tier 1: Active Deployment Photo Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVE_DEPLOYMENTS.map((client) => (
            <article
              key={client.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-colors hover:border-[#0C182E]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#081120]">
                <Image
                  src={client.photo}
                  alt={`Atlantis security deployment at ${client.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081120]/75 via-transparent to-transparent" />

                {/* Sector Tag */}
                <span className="absolute left-3 top-3 rounded-sm border border-white/20 bg-[#081120]/85 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
                  {client.sector}
                </span>

                {/* Logo Tile */}
                <div className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-white p-1.5 shadow-sm">
                  <Image
                    src={client.logo}
                    alt={`${client.name} official logo`}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="text-base font-bold text-[#0B1324]">
                    {client.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                    {client.scope}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 border-t border-slate-200 pt-3 font-mono text-[11px] font-medium text-[#0C182E]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#8A6510]" aria-hidden="true" />
                  <span>Verified Atlantis Deployment</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tier 2: Confidentiality-Protocol Partners */}
        <div className="mt-12 rounded-lg border border-[#0C182E] bg-[#0C182E] p-6 text-white sm:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
                <Lock className="h-3.5 w-3.5 text-[#C89B2B]" aria-hidden="true" />
                <span>Operational Privacy Protocol</span>
              </div>
              <h3 className="mt-2.5 text-xl font-bold text-white sm:text-2xl">
                Additional Industrial &amp; Commercial Partners
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {CLIENT_PRIVACY_NOTE}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
              {CONFIDENTIAL_PARTNERS.map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col items-center rounded-md border border-white/12 bg-white/[0.04] p-4 text-center"
                >
                  <div className="relative flex h-20 w-24 items-center justify-center overflow-hidden rounded-md bg-white p-2">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      sizes="96px"
                      loading="lazy"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <p className="mt-3 text-xs font-bold text-white">
                    {partner.name}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-slate-300">
                    {partner.subtitle}
                  </p>
                  <span className="mt-2.5 inline-flex items-center gap-1 font-mono text-[10px] text-[#E3BC5A]">
                    <Building2 className="h-3 w-3" aria-hidden="true" />
                    <span>{partner.sector}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
