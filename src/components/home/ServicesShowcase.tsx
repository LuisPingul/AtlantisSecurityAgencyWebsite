"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Car,
  Cctv,
  Check,
  Cpu,
  FileSearch,
  Home,
  PackageCheck,
  ShieldCheck,
  Siren,
  UserCheck,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  CUSTOM_SOLUTIONS_VALUE_ADDS,
  SECURITY_SERVICES,
  SERVICE_CATEGORIES,
  type SecurityService,
  type ServiceCategory,
} from "@/data/services";

const ICON_MAP = {
  ShieldCheck,
  Car,
  UserCheck,
  Users,
  Home,
  Cctv,
  PackageCheck,
  Siren,
  FileSearch,
  Cpu,
} as const;

export function ServicesShowcase({ showAllLink = true }: { showAllLink?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>("All");

  const visibleServices: SecurityService[] =
    selectedCategory === "All"
      ? SECURITY_SERVICES
      : SECURITY_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Service Catalog"
            title="10 Integrated"
            highlight="Security Solutions"
            description="Tailored manpower, surveillance, executive escort, and rapid-response deployments scaled cleanly to your facility's risk profile."
          />

          {showAllLink ? (
            <Link
              href="/services"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-md bg-[#0C182E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#122342] lg:self-end"
            >
              <span>Full Service Specifications</span>
              <ArrowUpRight className="h-4 w-4 text-[#E3BC5A]" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter security services by sector"
          className="tag-row-balanced mt-10 gap-2"
        >
          {SERVICE_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            const count =
              category === "All"
                ? SECURITY_SERVICES.length
                : SECURITY_SERVICES.filter((s) => s.category === category).length;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex min-h-10 items-center gap-2 rounded-md border px-3.5 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                  active
                    ? "border-[#0C182E] bg-[#0C182E] text-white"
                    : "border-slate-300 bg-[#F5F3EE] text-[#0B1324] hover:border-[#0C182E]"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`rounded-sm px-1.5 py-0.5 font-mono text-[11px] tabular-nums ${
                    active
                      ? "bg-white/15 text-[#E3BC5A]"
                      : "bg-white text-[#475569]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Architectural Subgrid Catalog */}
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <article
                key={service.id}
                className="service-subgrid-card group bg-white p-6 transition-colors hover:bg-[#F5F3EE]/60"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-[#F5F3EE] text-[#0C182E]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="text-right">
                      <span className="block font-mono text-xs font-bold tabular-nums text-[#8A6510]">
                        {service.number}
                      </span>
                      <span className="block text-[11px] font-medium text-[#475569]">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-snug text-[#0B1324]">
                    {service.title}
                  </h3>
                </div>

                <div>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                    {service.summary}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-slate-200/80 pt-4">
                    {service.deliverables.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#0B1324]"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8A6510]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-200/80 pt-4">
                  <span className="min-w-0 truncate text-[11px] font-medium text-[#475569]">
                    Sector: {service.idealFor.split(",")[0]}
                  </span>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.shortTitle)}#proposal`}
                    className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-[#0C182E] transition-colors group-hover:text-[#8A6510]"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Custom Solutions Value-Add Ledger */}
        <div className="mt-12 rounded-lg border border-[#0C182E] bg-[#0C182E] p-6 text-white sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-white/12 pb-5 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
                Enterprise Contract Standards
              </p>
              <h3 className="mt-1 text-xl font-bold text-white">
                Transparent PADPAO Pricing with Turnkey Client Value-Adds
              </h3>
            </div>
            <Link
              href="/contact#proposal"
              className="bg-gold-metallic inline-flex min-h-11 shrink-0 items-center gap-1.5 self-start rounded-md px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#081120] md:self-auto"
            >
              <span>Request Custom Quote</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CUSTOM_SOLUTIONS_VALUE_ADDS.map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-[#C89B2B]/60 pl-4"
              >
                <p className="text-sm font-bold text-white">{item.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
