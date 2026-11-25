# Architectural & Engineering Decision Records (ADR)

This file tracks architectural, engineering, and design decisions made for the Atlantis Security Agency Inc. project.

---

## Blank Decision Log Template

When recording a new decision, copy the block below and append it under the **Recorded Decisions** section:

```markdown
### [ADR-YYYYMMDD-XX] Short Title of Decision

- **Date**: YYYY-MM-DD
- **Status**: Proposed | Accepted | Superseded | Deprecated
- **Decision**: Clearly state what was decided.
- **Reason**: Explain the context, motivation, and problem being solved.
- **Alternatives Considered**: Outline options that were evaluated and why they were not chosen.
- **Impact**: Note the consequences, tradeoffs, and systems affected by this decision.
```

---

## Recorded Decisions

### [ADR-20261124-01] Tech Stack Selection: Next.js 15 App Router + Tailwind CSS v4 + TypeScript

- **Date**: 2026-11-24
- **Status**: Accepted
- **Decision**: Build the corporate portal using Next.js 15 (React 19, App Router), TypeScript 5, and Tailwind CSS v4 with `@tailwindcss/postcss`.
- **Reason**: Delivers fast server-side rendering for corporate SEO, seamless metadata management, type-safe data modeling for services/welfare standards, and cutting-edge responsive styling without build complexity.
- **Alternatives Considered**:
  - *Vite + React SPA*: Lacks native search-engine pre-rendering and dynamic OpenGraph/metadata routing needed for corporate credibility.
  - *Astro*: Less dynamic for interactive proposal calculators and multi-step pre-screening forms.
- **Impact**: Single unified codebase for static content, interactive client components, and future server action/API endpoints.

---

### [ADR-20261124-02] Verified Contact Channels & Single Official Email Policy

- **Date**: 2026-11-24
- **Status**: Accepted
- **Decision**: Publish strictly verified contact phone numbers and restrict the official contact email exclusively to `qdynasty24@gmail.com` across all footers, contact pages, and metadata.
- **Reason**: Direct user instruction to maintain a single verified operational inbox and avoid client confusion or unmonitored mailboxes.
- **Alternatives Considered**: Generic placeholder emails like `info@atlantissecurity.ph` or `inquiries@atlantissecurity.com`.
- **Impact**: Guarantees all client communication reaches the active operator. Form submissions directly route to this verified email channel.

---

### [ADR-20261124-03] SEC Registration Number Representation

- **Date**: 2026-11-24
- **Status**: Accepted
- **Decision**: Display a professional placeholder `[SEC Registration No. Pending / On File]` on the website credentials and compliance badges until the client provides the official SEC registration certificate number.
- **Reason**: Client is in the process of finalizing documentation; displaying a clear pending badge maintains honesty while demonstrating full awareness of regulatory compliance.
- **Alternatives Considered**: Omitting SEC mention completely or inventing a mock number.
- **Impact**: Complies with user directive, protects legal accuracy, and enables seamless replacement once the certificate is uploaded.

---

### [ADR-20261125-01] Removal of 40 FT ISO Container Security Checkpoint Section

- **Date**: 2026-11-25
- **Status**: Accepted
- **Decision**: Remove the "Signature Infrastructure Innovation: 40 FT ISO Container Security Checkpoint" section from the homepage and services data.
- **Reason**: Explicitly requested by user to align service offerings strictly with core guarding, mobile escort, K-9, and tech supervision capabilities.
- **Alternatives Considered**: Moving it to a secondary page or archiving under innovation.
- **Impact**: Cleaner, tighter focus on high-demand security services without infrastructure distractions.

---

### [ADR-20261125-02] Lightweight Form Handoff Architecture for MVP

- **Date**: 2026-11-25
- **Status**: Accepted
- **Decision**: Use a lightweight direct mailto/Messenger/SMS/WhatsApp handoff for the inquiry and guard pre-screener forms during the MVP phase.
- **Reason**: Eliminates dependency on third-party transactional email providers before domain DNS is configured, while allowing instantaneous lead delivery to the agency manager.
- **Alternatives Considered**: Full serverless backend with database and transactional email service.
- **Impact**: Zero external API failure points or cost during MVP evaluation; forms can be progressively enhanced with server actions later.
