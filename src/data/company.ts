export interface CredentialRecord {
  id: string;
  label: string;
  value: string;
  authority: string;
  category: "Licensing" | "Tax & Corporate" | "Statutory Welfare" | "Association & Safety";
  isPlaceholder?: boolean;
}

export interface OfficeLocation {
  id: string;
  type: "Main Office" | "Branch Office";
  city: string;
  region: string;
  address: string;
  mapsQuery: string;
}

export interface CoreValue {
  letter: string;
  word: string;
  description: string;
}

export const COMPANY = {
  legalName: "Atlantis Security Agency, Inc.",
  shortName: "Atlantis Security",
  tagline: "Anchored by Loyalty, Powered by Duty",
  heroHeadline: "YOUR SAFETY, OUR PRIORITY",
  heroSubheadline:
    "Reliable, PADPAO-compliant, and welfare-led security services protecting communities, businesses, campuses, industrial facilities, and high-profile events across the Philippines.",
  corePromise:
    "We protect your property by first taking care of the people entrusted to protect it.",
  excellenceFormula: [
    "Welfare",
    "Training",
    "Supervision",
    "Accountability",
  ] as const,
  established: "November 19, 2024",
  establishedYear: "2024",
  organizationType: "Domestic Corporation (Incorporation)",
  ownership: "100% Filipino-Owned",
  licenseeManager: "Mr. Milbert G. Balinggan",
  licenseeTitle: "Licensee & General Manager",
  mission:
    "Seek excellence in the delivery of security services in its highest form of proficiency and efficiency through the provision of avenues for growth and development in the areas of safety and security.",
  vision:
    "Committed to provide excellent and globally competitive security services. Our dedication is characterized by safety, progress, and the highest standards of security, making the community a safer place for everyone.",
  lineOfBusiness: [
    "Industrial Security Services",
    "Mall & Commercial Security",
    "VIP & Executive Protection",
    "Licensed Security Guards",
    "Complete Investigation",
    "Security Assessment & Background Survey",
    "Risk Assessment & Physical Security Audit",
  ],
  contacts: {
    phones: [
      { display: "0916 605 5174", tel: "+639166055174", label: "Primary Hotline" },
      { display: "0907 300 4875", tel: "+639073004875", label: "Operations Desk" },
    ],
    email: "qdynasty24@gmail.com",
    facebookUrl: "https://www.facebook.com/search/top?q=Atlantis%20Security%20Agency%20Inc.",
    messengerUrl: "https://m.me/",
  },
  offices: [
    {
      id: "kidapawan",
      type: "Main Office",
      city: "Kidapawan City",
      region: "Cotabato, Region XII (SOCCSKSARGEN)",
      address: "Door 9, SJ Space Rental, Purok 3, Balindog, Kidapawan City",
      mapsQuery: "Balindog, Kidapawan City, Cotabato, Philippines",
    },
    {
      id: "davao",
      type: "Branch Office",
      city: "Davao City",
      region: "Davao Region 8000, Region XI",
      address: "Blk. 18 Lot 1, Country Homes Avenue, Davao City, Davao Region 8000, PH",
      mapsQuery: "Country Homes Avenue, Davao City, Davao Region 8000, Philippines",
    },
  ] satisfies OfficeLocation[],
} as const;

export const CORE_VALUES: CoreValue[] = [
  {
    letter: "A",
    word: "Achievement",
    description:
      "Relentless pursuit of operational proficiency, incident-free posts, and measurable client peace of mind.",
  },
  {
    letter: "T",
    word: "Teamwork",
    description:
      "Unified coordination across field officers, inspectors, CCTV monitors, and client management teams.",
  },
  {
    letter: "L",
    word: "Loyalty",
    description:
      "Unwavering allegiance to the clients we safeguard and to the welfare of every guard on our roster.",
  },
  {
    letter: "A",
    word: "Affectionate",
    description:
      "Human-centered security led with empathy, approachability, and genuine concern for every person we protect.",
  },
  {
    letter: "N",
    word: "Noble",
    description:
      "Upholding honor, ethical labor standards, and civic advocacy—including our free Barangay Volunteer Initiative.",
  },
  {
    letter: "T",
    word: "Trustworthy",
    description:
      "Strict confidentiality protocols, thorough background vetting, and complete accountability on every tour of duty.",
  },
  {
    letter: "I",
    word: "Integrity",
    description:
      "Full compliance with PNP-SOSIA regulations, PADPAO fair rates, and Philippine labor laws without shortcuts.",
  },
  {
    letter: "S",
    word: "Service",
    description:
      "Courteous, alert, and proactive protection delivered with crisp appearance, decorum, and 24/7 readiness.",
  },
];

export const CREDENTIALS: CredentialRecord[] = [
  {
    id: "pnp-sosia",
    label: "License to Operate (PNP-SOSIA)",
    value: "PSA-WGS-M00770-2025",
    authority: "Philippine National Police — Supervisory Office for Security & Investigation Agencies",
    category: "Licensing",
  },
  {
    id: "padpao",
    label: "PADPAO Membership",
    value: "PADPAO Region XII Member (since 30 January 2026)",
    authority: "Philippine Association of Detective & Protective Agency Operators",
    category: "Association & Safety",
  },
  {
    id: "dole-osh",
    label: "DOLE OSH Registration",
    value: "Reg. No. R12-047 (Ref. 1431105621229)",
    authority: "Department of Labor and Employment — Occupational Safety & Health",
    category: "Association & Safety",
  },
  {
    id: "mayors-permit",
    label: "Mayor's Permit No.",
    value: "2026-1204704000-1002",
    authority: "Local Government Business Licensing (2026 Active)",
    category: "Licensing",
  },
  {
    id: "bir-tin",
    label: "BIR TIN / Registration",
    value: "663-820-945-00000",
    authority: "Bureau of Internal Revenue",
    category: "Tax & Corporate",
  },
  {
    id: "sec-reg",
    label: "SEC Registration No.",
    value: "Updating — Available Upon Request",
    authority: "Securities and Exchange Commission (Placeholder pending final certificate entry)",
    category: "Tax & Corporate",
    isPlaceholder: true,
  },
  {
    id: "sss",
    label: "SSS Employer No.",
    value: "80-0392606-0-000",
    authority: "Social Security System — Full Guard Statutory Remittance",
    category: "Statutory Welfare",
  },
  {
    id: "philhealth",
    label: "PhilHealth Registration",
    value: "017030002942",
    authority: "Philippine Health Insurance Corporation",
    category: "Statutory Welfare",
  },
  {
    id: "pagibig",
    label: "HDMF Pag-IBIG Registration",
    value: "211254570005",
    authority: "Home Development Mutual Fund",
    category: "Statutory Welfare",
  },
];
