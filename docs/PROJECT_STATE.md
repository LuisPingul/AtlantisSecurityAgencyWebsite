# PROJECT STATE: Atlantis Security Agency Inc.

---

## 1. Current Overall Goal
Establish a premier, enterprise-grade digital web platform for **Atlantis Security Agency Inc.**, projecting trust, regulatory authority, and operational excellence across the Philippines. The website showcases comprehensive security solutions (VIP, Canine/K9, Armored, Maritime, Industrial, Event, Tech), highlights guard welfare standards (100% on-time DOLE-compliant payroll, insurance, modern equipment), serves enterprise clients with interactive proposal scoping, and funnels qualified security personnel applications and client inquiries.

---

## 2. Tech Stack Overview
- **Framework**: Next.js 15.3.0 (React 19.1.0, App Router)
- **Language**: TypeScript 5.8.0
- **Styling**: Tailwind CSS v4.1.0 (via `@tailwindcss/postcss`)
- **Animations & Icons**: Framer Motion 12.6.0, Lucide React 0.487.0
- **Package Manager**: npm 11.17.0 (Node.js runtime v24.19.0)
- **Design Tokens**: Maritime Dress-Uniform Navy (`#081120`, `#0C182E`, `#122342`), Warm Editorial Stone (`#F5F3EE`), High-Contrast Ink (`#0B1324`), Muted Slate (`#475569`), and Restrained Heraldic Brass (`#C89B2B`, `#E3BC5A`, `#8A6510`), governed by `design-system/atlantis-security-agency/MASTER.md`.

---

## 3. Architecture Overview & Key Folders

```
AtlantisSecurityAgency/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml           # Automated Next.js static export to GitHub Pages
├── AGENTS.md                          # Mandatory agent instructions and protocols
├── design-system/
│   └── atlantis-security-agency/
│       └── MASTER.md                  # Canonical UI/UX Pro Max design system rules
├── docs/                              # Persistent project tracking documentation
│   ├── PROJECT_STATE.md               # Current architecture, features, and status
│   ├── DECISIONS.md                   # Architectural Decision Records (ADRs)
│   └── TASK_LOG.md                    # Chronological record of completed work
├── graphify-out/                      # Persistent codebase & asset knowledge graph
│   ├── GRAPH_REPORT.md                # Community hubs, god nodes, and audit report
│   ├── graph.json                     # GraphRAG-ready knowledge graph data
│   └── graph.html                     # Standalone interactive graph viewer
├── public/
│   └── images/
│       ├── brand/                     # Official insignia, emblems, and logos
│       ├── hero/                      # High-resolution hero imagery
│       ├── operations/                # Operational and division showcase assets
│       └── clients/                   # Client badges and accreditation visuals
├── src/
│   ├── app/                           # Next.js App Router pages and layout
│   │   ├── layout.tsx                 # Root layout with metadata, fonts, SiteShell
│   │   ├── page.tsx                   # Homepage (flagship landing experience)
│   │   ├── about/page.tsx             # Corporate background, mission, leadership, badges
│   │   ├── services/page.tsx          # 10 core security service specializations
│   │   ├── welfare-standards/page.tsx # DOLE compliance, guard welfare, living wages
│   │   ├── careers/page.tsx           # Guard recruitment & interactive pre-screener
│   │   ├── contact/page.tsx           # Contact info, office map info, inquiry handoff
│   │   └── globals.css                # Global Tailwind v4 styles and theme classes
│   ├── components/
│   │   ├── layout/
│   │   │   └── SiteShell.tsx          # Sticky navigation, corporate footer, contact bar
│   │   ├── home/
│   │   │   ├── HeroSection.tsx        # High-impact hero with credentials ribbon
│   │   │   ├── CredentialsRibbon.tsx  # Regulators (PNP-SOSIA, PADPAO, DOLE, SEC)
│   │   │   ├── WelfareMultiplier.tsx  # Guard welfare & operational readiness counter
│   │   │   ├── ServicesShowcase.tsx   # 10-division security services interactive grid
│   │   │   ├── TechAndSupervisionSection.tsx # GPS guard patrol, 24/7 command operations
│   │   │   ├── ClientShowcase.tsx     # Industries served & client proof points
│   │   │   └── ProposalScopeBuilder.tsx # Interactive RFP/quote scope builder
│   │   ├── forms/
│   │   │   ├── InquiryHandoffForm.tsx # Client inquiry handoff (Email/Messenger/Call)
│   │   │   └── GuardApplicationForm.tsx # Guard recruitment screening form
│   │   └── ui/
│   │       ├── ComplianceModal.tsx    # Vendor accreditation & permit document modal
│   │       ├── GreekKeyDivider.tsx    # Branded gold Greek-key section divider
│   │       └── SectionHeader.tsx      # Consistent section titles with badge accents
│   └── data/
│       ├── company.ts                 # Verified corporate info, phones, email, permits
│       ├── services.ts                # 10 full service definitions, features, tags
│       ├── welfare.ts                 # DOLE benefits, welfare metrics, living wage policy
│       ├── clients.ts                 # Target industries, testimonials, client sectors
│       └── careers.ts                 # Guard qualifications, hiring steps, FAQs
```

---

## 4. Completed Features
- [x] **Branding & Visual Identity**: Integrated high-resolution emblem, navy/gold color palette, custom Greek-key motif dividers, responsive luxury navigation with corporate contact bar.
- [x] **Homepage (`/`)**:
  - Hero section with live stat counters and primary CTAs.
  - Regulatory Accreditation Ribbon (PNP-SOSIA, PADPAO, DOLE, SEC).
  - Welfare Multiplier section demonstrating why well-compensated guards outperform industry turnover norms.
  - Interactive 10-Service Showcase with detailed capability drill-downs.
  - Command, Supervision & Patrol Technology section.
  - Client & Industry Showcase.
  - Interactive Proposal Scope Builder calculating custom operational scopes.
- [x] **About Page (`/about`)**: Company background, history, core values, leadership philosophy, and compliance badges.
- [x] **Services Page (`/services`)**: Comprehensive breakdown of all 10 specialized services (VIP Protection, Armed Escort, K-9 Detection, CCTV/Access Control, Industrial Guarding, Event Security, Retail Loss Prevention, Armored Transport, Maritime Port Security, Crisis Response).
- [x] **Welfare Standards Page (`/welfare-standards`)**: Dedicated showcase on DOLE compliance, SSS/PhilHealth/Pag-IBIG remittance, fair wages, overtime, and guard morale.
- [x] **Careers & Pre-Screener (`/careers`)**: Job descriptions, hiring process, and interactive application pre-screener for security personnel.
- [x] **Contact & Inquiries (`/contact`)**: Verified office address, phone numbers, verified corporate email (`qdynasty24@gmail.com`), and lightweight inquiry handoff form.
- [x] **Vendor Accreditation Modal**: Reusable modal for viewing accreditation status and permits.
- [x] **Removed Obsolete Content**: Removed the 40 FT ISO Container Security Checkpoint section as directed.
- [x] **Editorial Anti-AI-Slop UI/UX & Ponytail Refinement**: Replaced purple/neon-cyan meshes, leaked slide numbers, and nested bubble cards with Maritime Dress-Uniform Navy & Warm Stone architectural ledgers, CSS `subgrid`, balanced typography, 44px touch targets, and `shortcut:` debt markers (`MASTER.md`).
- [x] **Persistent Knowledge Graph (`graphify`)**: Generated 257-node / 475-edge knowledge graph across code, docs, and visual assets in `graphify-out/`.
- [x] **GitHub Pages Static Export & CI/CD**: Configured `output: "export"`, `trailingSlash: true`, `NEXT_PUBLIC_BASE_PATH` asset prefixing, static `/contact` query hydration, and `.github/workflows/deploy-pages.yml` for board presentation on GitHub Pages.
- [x] **Clean Verification**: TypeScript check (`npx tsc --noEmit`) and ESLint (`npm run lint`) both pass with zero errors.

---

## 5. In-Progress Features / Next Goals
- [ ] Connect production backend/email delivery service (e.g. Resend, SendGrid, or direct mailer API) to form submissions when moving from MVP handoff to fully automated CRM.
- [ ] Incorporate exact official SEC Registration Number once issued/provided by client (currently marked with placeholder).

---

## 6. Known Issues & Notes
- **SEC Registration Number**: The SEC registration number is currently using a confirmed placeholder `[SEC Registration No. Pending / On File]` per user approval. Replace once client delivers final certificate.
- **Published Email**: Strictly use `qdynasty24@gmail.com` as approved by client.

---

## 7. STRICT "DO NOT REDO" SECTION (Protected Work)
> **DO NOT modify, rewrite, or rebuild any of the following without explicit user instruction:**
1. **Existing Routes & Core Structure**: Do not refactor `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/services/page.tsx`, `src/app/welfare-standards/page.tsx`, `src/app/careers/page.tsx`, or `src/app/contact/page.tsx`.
2. **Component Architecture**: Do not delete or rename components in `src/components/layout/`, `src/components/home/`, `src/components/forms/`, or `src/components/ui/`.
3. **Data Contracts**: Do not wipe or alter the core interfaces in `src/data/` (`company.ts`, `services.ts`, `welfare.ts`, `clients.ts`, `careers.ts`).
4. **Deleted Features**: Do NOT re-introduce the "40 FT ISO Container Security Checkpoint" section. It was explicitly requested to be removed.
5. **Tailwind v4 Configuration**: Do not alter `postcss.config.mjs` or downgrade/replace the `@tailwindcss/postcss` setup.
