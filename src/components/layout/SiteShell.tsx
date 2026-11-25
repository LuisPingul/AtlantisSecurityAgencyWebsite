"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
  ArrowUpRight,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { ComplianceModal } from "@/components/ui/ComplianceModal";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";

interface ModalContextValue {
  openComplianceModal: () => void;
}

const ModalContext = createContext<ModalContextValue>({
  openComplianceModal: () => {},
});

export function useComplianceModal() {
  return useContext(ModalContext);
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About & Credentials" },
  { href: "/services", label: "Services" },
  { href: "/welfare-standards", label: "Welfare & Standards" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <ModalContext.Provider
      value={{ openComplianceModal: () => setComplianceOpen(true) }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#E5B63B] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#070816]"
      >
        Skip to main content
      </a>

      {/* Persistent Top Utility Bar */}
      <div className="border-b border-white/10 bg-[#070816] text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="inline-flex items-center gap-2 font-medium text-white">
              <span className="signal-dot" aria-hidden="true" />
              <span>24/7 Operations · Davao &amp; Kidapawan</span>
            </span>
            <button
              type="button"
              onClick={() => setComplianceOpen(true)}
              className="hidden items-center gap-1.5 font-mono text-[11px] text-[#F5D576] transition-colors hover:text-white sm:inline-flex"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[#E5B63B]" />
              <span>PNP-SOSIA: PSA-WGS-M00770-2025</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`tel:${COMPANY.contacts.phones[0].tel}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-[#F5D576]"
            >
              <Phone className="h-3.5 w-3.5 text-[#E5B63B]" />
              <span>{COMPANY.contacts.phones[0].display}</span>
            </a>
            <a
              href={`tel:${COMPANY.contacts.phones[1].tel}`}
              className="hidden items-center gap-1.5 font-medium text-slate-300 transition-colors hover:text-[#F5D576] md:inline-flex"
            >
              <span>/ {COMPANY.contacts.phones[1].display}</span>
            </a>
            <a
              href={`mailto:${COMPANY.contacts.email}`}
              className="hidden items-center gap-1.5 text-slate-300 transition-colors hover:text-[#F5D576] lg:inline-flex"
            >
              <Mail className="h-3.5 w-3.5 text-[#00C2F0]" />
              <span>{COMPANY.contacts.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Command Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#E5B63B]/25 bg-[#09081F]/92 shadow-lg shadow-black/30 backdrop-blur-md"
            : "border-b border-white/10 bg-[#0D0B2B]/90 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 sm:h-12 sm:w-12">
              <Image
                src="/images/brand/atlantis-emblem.png"
                alt="Atlantis Security Agency Inc. Official Seal"
                fill
                sizes="48px"
                className="object-contain drop-shadow-[0_2px_10px_rgba(229,182,59,0.35)] transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="block font-display text-base font-bold tracking-[0.14em] text-gold-gradient sm:text-lg">
                ATLANTIS
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                Security Agency Inc.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_LINKS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-[#E5B63B]/15 text-[#F5D576]"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact#proposal"
              className="bg-gold-metallic inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-bold text-[#070816] shadow-md shadow-[#E5B63B]/20 transition-transform hover:-translate-y-0.5"
            >
              <span>Request Site Audit</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2.5 text-white transition-colors hover:border-[#E5B63B]/50 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen ? (
          <div
            id="mobile-nav-drawer"
            className="border-t border-white/10 bg-[#0A0822] px-4 pb-6 pt-4 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                      active
                        ? "bg-[#E5B63B]/15 text-[#F5D576]"
                        : "text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 flex flex-col gap-2.5 border-t border-white/10 pt-4">
              <Link
                href="/contact#proposal"
                className="bg-gold-metallic flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold text-[#070816]"
              >
                <span>Request Free Site Assessment</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setComplianceOpen(true);
                }}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono font-medium text-[#F5D576]"
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Verify Licenses &amp; Accreditation</span>
              </button>
            </div>
          </div>
        ) : null}
      </header>

      <main id="main-content">{children}</main>

      {/* Authoritative Dark-Indigo Footer */}
      <footer className="bg-[#070816] text-slate-300">
        <GreekKeyDivider />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3.5">
                <div className="relative h-14 w-14 shrink-0">
                  <Image
                    src="/images/brand/atlantis-emblem.png"
                    alt="Atlantis Security Agency Inc. Official Emblem"
                    fill
                    sizes="56px"
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-display text-lg font-bold tracking-[0.14em] text-gold-gradient">
                    ATLANTIS
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                    Security Agency Inc.
                  </p>
                </div>
              </div>

              <p className="mt-4 font-display text-sm italic text-[#F5D576]">
                &ldquo;{COMPANY.tagline}&rdquo;
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {COMPANY.corePromise}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setComplianceOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5B63B]/35 bg-[#E5B63B]/10 px-3 py-1.5 font-mono text-[11px] font-medium text-[#F5D576] transition-colors hover:bg-[#E5B63B]/20"
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>PNP-SOSIA: PSA-WGS-M00770-2025</span>
                </button>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#F5D576]">
                Agency
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-300 transition-colors hover:text-[#F5D576]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices Column */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#F5D576]">
                Command Offices
              </h3>
              <div className="mt-4 space-y-4 text-sm">
                {COMPANY.offices.map((office) => (
                  <div key={office.id} className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E5B63B]" />
                    <div>
                      <p className="font-semibold text-white">
                        {office.type} — {office.city}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                        {office.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Dispatch Column */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#F5D576]">
                Direct Inquiries
              </h3>
              <div className="mt-4 space-y-3 text-sm">
                {COMPANY.contacts.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 transition-colors hover:border-[#E5B63B]/40 hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-[#E5B63B]" />
                    <div>
                      <span className="block font-semibold text-white">
                        {phone.display}
                      </span>
                      <span className="block text-[11px] text-slate-400">
                        {phone.label}
                      </span>
                    </div>
                  </a>
                ))}

                <a
                  href={`mailto:${COMPANY.contacts.email}`}
                  className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 transition-colors hover:border-[#00C2F0]/40 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#00C2F0]" />
                  <span className="truncate font-medium text-white">
                    {COMPANY.contacts.email}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {COMPANY.legalName} All rights reserved.{" "}
              <span className="text-slate-500">
                100% Filipino-Owned · Est. {COMPANY.establishedYear}
              </span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#E5B63B]/80">
              People · Safety · Integrity · Trust
            </p>
          </div>
        </div>
      </footer>

      <ComplianceModal
        open={complianceOpen}
        onClose={() => setComplianceOpen(false)}
      />
    </ModalContext.Provider>
  );
}
