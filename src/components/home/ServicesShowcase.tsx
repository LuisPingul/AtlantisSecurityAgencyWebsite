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
            eyebrow="Comprehensive Protection"
            title="10 Integrated"
            highlight="Security Solutions"
            description="Tailored manpower, surveillance, executive escort, and rapid-response deployments scaled cleanly to your facility's risk profile."
          />

          {showAllLink ? (
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-[#16123D] px-5 py-3 text-sm font-bold text-[#F5D576] transition-colors hover:bg-[#231C68] lg:self-end"
            >
              <span>Full Service Specifications</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter security services by sector"
          className="mt-10 flex flex-wrap gap-2"
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
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm sm:normal-case sm:tracking-normal ${
                  active
                    ? "border-[#16123D] bg-[#16123D] text-[#F5D576] shadow-sm"
                    : "border-[#1B1654]/15 bg-[#F6F5F0] text-[#11102B] hover:border-[#E5B63B]"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[11px] ${
                    active
                      ? "bg-white/15 text-white"
                      : "bg-white text-[#4A4968]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Services Bento Grid */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <article
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#1B1654]/12 bg-[#F6F5F0]/65 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E5B63B] hover:bg-white hover:shadow-lg hover:shadow-[#16123D]/8"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16123D] text-[#E5B63B] transition-colors group-hover:bg-[#221B6A]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-right">
                      <span className="block font-mono text-xs font-bold text-[#B8861A]">
                        {service.number}
                      </span>
                      <span className="block text-[11px] font-medium text-[#4A4968]">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold leading-snug text-[#11102B]">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#4A4968]">
                    {service.summary}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-[#1B1654]/10 pt-4">
                    {service.deliverables.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#11102B]"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B8861A]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex items-center justify-between gap-2 border-t border-[#1B1654]/10 pt-4">
                  <span className="truncate text-[11px] font-medium text-[#4A4968]">
                    Ideal: {service.idealFor.split(",")[0]}
                  </span>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.shortTitle)}#proposal`}
                    className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-[#16123D] transition-colors group-hover:text-[#B8861A]"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Custom Solutions Value-Add Strip */}
        <div className="mt-12 rounded-2xl border border-[#E5B63B]/40 bg-[#120F34] p-6 text-white sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#00C2F0]">
                Custom Enterprise Solutions
              </p>
              <h3 className="mt-1 text-xl font-extrabold text-white">
                Transparent PADPAO Pricing with Turnkey Client Value-Adds
              </h3>
            </div>
            <Link
              href="/contact#proposal"
              className="bg-gold-metallic inline-flex shrink-0 items-center gap-1.5 self-start rounded-xl px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#070816]"
            >
              <span>Request Custom Quote</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CUSTOM_SOLUTIONS_VALUE_ADDS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-sm font-bold text-[#F5D576]">{item.title}</p>
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
