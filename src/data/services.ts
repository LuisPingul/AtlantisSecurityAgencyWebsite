export type ServiceCategory =
  | "All"
  | "Commercial & Retail"
  | "Industrial & Campus"
  | "VIP & Events"
  | "Tech & Rapid Response";

export interface SecurityService {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: Exclude<ServiceCategory, "All">;
  summary: string;
  deliverables: string[];
  idealFor: string;
  iconName:
    | "ShieldCheck"
    | "Car"
    | "UserCheck"
    | "Users"
    | "Home"
    | "Cctv"
    | "PackageCheck"
    | "Siren"
    | "FileSearch"
    | "Cpu";
  featured?: boolean;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  "All",
  "Commercial & Retail",
  "Industrial & Campus",
  "VIP & Events",
  "Tech & Rapid Response",
];

export const SECURITY_SERVICES: SecurityService[] = [
  {
    id: "armed-unarmed",
    number: "01",
    title: "Armed & Unarmed Security Guards",
    shortTitle: "Armed & Unarmed Guards",
    category: "Industrial & Campus",
    summary:
      "PNP-SOSIA licensed, neuro-psychiatrically screened security officers protecting commercial establishments, campuses, banks, and high-risk industrial perimeters 24/7.",
    deliverables: [
      "Strict access control, visitor logging, and baggage screening",
      "PADPAO-compliant 8-hour or 12-hour rotational shift coverage",
      "Full uniform, duty belt, radio comms, and post orders",
    ],
    idealFor: "Commercial buildings, campuses, malls, manufacturing plants, and warehouses",
    iconName: "ShieldCheck",
    featured: true,
  },
  {
    id: "mobile-patrols",
    number: "02",
    title: "Mobile Patrols & Perimeter Sweeps",
    shortTitle: "Mobile Patrols",
    category: "Industrial & Campus",
    summary:
      "High-visibility roving patrol units providing randomized and scheduled perimeter coverage across sprawling industrial estates, parking complexes, and residential communities.",
    deliverables: [
      "Timed checkpoint verification and incident logging",
      "Rapid physical deterrence for wide-perimeter estates",
      "Night-shift perimeter sweeps and gate lock checks",
    ],
    idealFor: "Industrial parks, subdivisions, expansive parking lots, and logistics yards",
    iconName: "Car",
  },
  {
    id: "vip-protection",
    number: "03",
    title: "VIP & Executive Protection",
    shortTitle: "VIP Protection",
    category: "VIP & Events",
    summary:
      "Discreet, specially trained close-protection teams safeguarding corporate executives, dignitaries, visiting delegations, and high-profile families during travel and public engagements.",
    deliverables: [
      "Advance route reconnaissance and venue risk profiling",
      "Close-protection escort with disciplined public decorum",
      "Contingency extraction and emergency medical coordination",
    ],
    idealFor: "Corporate principals, visiting executives, and public figures",
    iconName: "UserCheck",
    featured: true,
  },
  {
    id: "event-security",
    number: "04",
    title: "Event Security & Crowd Control",
    shortTitle: "Event Security",
    category: "VIP & Events",
    summary:
      "Structured crowd management, multi-lane metal detector screening, VIP lane orchestration, and rapid incident containment for concerts, conventions, and institutional gatherings.",
    deliverables: [
      "Multi-lane entry screening with walk-through metal detectors",
      "Ingress/egress flow design and backstage access control",
      "Emergency response staging and barangay/LGU coordination",
    ],
    idealFor: "Conferences, concerts, civic festivals, and large campus assemblies",
    iconName: "Users",
  },
  {
    id: "residential-security",
    number: "05",
    title: "Residential & Gated Community Security",
    shortTitle: "Residential Security",
    category: "Commercial & Retail",
    summary:
      "Warm yet vigilant gatekeeping and roving patrols for subdivisions, condominiums, apartment complexes, and private residences—combining courtesy with strict visitor verification.",
    deliverables: [
      "Vehicle sticker, delivery, and guest verification protocols",
      "24/7 perimeter roving and homeowner assistance",
      "Tactful, respectful enforcement of HOA house rules",
    ],
    idealFor: "Gated subdivisions, residential towers, and private compounds",
    iconName: "Home",
  },
  {
    id: "surveillance-monitoring",
    number: "06",
    title: "Surveillance, CCTV Coordination & Live Monitoring",
    shortTitle: "CCTV & Monitoring",
    category: "Tech & Rapid Response",
    summary:
      "Real-time command center monitoring combining camera arrays, alarm systems, and radio-dispatched ground officers—because technology amplifies, never replaces, trained human judgment.",
    deliverables: [
      "Live CCTV command monitoring and blind-spot auditing",
      "Immediate radio dispatch to ground guards upon anomaly detection",
      "Free CCTV setup options available for qualified client contracts",
    ],
    idealFor: "Multi-site retail chains, hotels, schools, and 24/7 facilities",
    iconName: "Cctv",
    featured: true,
  },
  {
    id: "loss-prevention",
    number: "07",
    title: "Retail & Warehouse Loss Prevention",
    shortTitle: "Loss Prevention",
    category: "Commercial & Retail",
    summary:
      "Proactive deterrence against shoplifting, internal shrinkage, cargo pilferage, and inventory fraud across retail outlets, convenience stores, supermarkets, and distribution hubs.",
    deliverables: [
      "Point-of-sale and receiving bay accountability inspections",
      "Gate pass, delivery manifest, and bag inspection protocols",
      "Shrinkage trend reporting directly to branch managers",
    ],
    idealFor: "24/7 convenience stores, supermarkets, restaurants, and distribution depots",
    iconName: "PackageCheck",
  },
  {
    id: "emergency-response",
    number: "08",
    title: "Emergency Response Team (ERT)",
    shortTitle: "Emergency Response (ERT)",
    category: "Tech & Rapid Response",
    summary:
      "Dedicated Quick Response and Emergency Response Teams trained in crisis containment, fire and disaster preparedness, medical first-aid stabilization, and evacuation leadership.",
    deliverables: [
      "Rapid deployment during security breaches or civil disruptions",
      "Fire, earthquake, and mass-evacuation marshaling",
      "Direct coordination with PNP, BFP, and local emergency units",
    ],
    idealFor: "Large venues, high-density campuses, industrial plants, and estates",
    iconName: "Siren",
  },
  {
    id: "investigation-audit",
    number: "09",
    title: "Investigation, Background Survey & Risk Assessment",
    shortTitle: "Risk Audit & Investigation",
    category: "Industrial & Campus",
    summary:
      "Comprehensive physical security audits, vulnerability assessments, background verification surveys, and confidential internal investigations led by seasoned security specialists.",
    deliverables: [
      "End-to-end physical perimeter and access vulnerability audit",
      "Pre-employment and partner background investigation surveys",
      "Actionable security posture and post-order blueprints",
    ],
    idealFor: "Organizations upgrading site defenses or investigating incidents",
    iconName: "FileSearch",
  },
  {
    id: "cybersecurity-uniforms",
    number: "10",
    title: "Cybersecurity Support & Complete Uniform Provisioning",
    shortTitle: "Cybersecurity & Logistics",
    category: "Tech & Rapid Response",
    summary:
      "Protecting sensitive business data alongside complete in-house uniform, signage, and tactical gear provisioning so every deployed roster guard presents a unified, professional standard.",
    deliverables: [
      "Cyber-hygiene and digital threat protection guidance for businesses",
      "Agency-supplied crisp uniforms, tactical vests, and identification gear",
      "Site security signage and guard paraphernalia included",
    ],
    idealFor: "Corporate offices and multi-branch commercial partners",
    iconName: "Cpu",
  },
];

export const CUSTOM_SOLUTIONS_VALUE_ADDS = [
  {
    title: "PADPAO-Compliant Fair Rates",
    description:
      "Strict adherence to PADPAO-prescribed wage structures—guaranteeing transparent pricing with zero hidden labor liabilities.",
  },
  {
    title: "Free CCTV Setup & Long-Term Discounts",
    description:
      "Custom enterprise contracts can include complimentary CCTV setup, multi-year rate incentives, and dedicated site signage.",
  },
  {
    title: "Complete Guard Essentials Included",
    description:
      "We equip every officer with crisp uniforms, high-visibility vests, communication radios, and duty paraphernalia at no hassle to clients.",
  },
  {
    title: "Ethical Philippine Labor Compliance",
    description:
      "Full statutory remittance of SSS, PhilHealth, Pag-IBIG, and DOLE OSH compliance protects your company from joint-liability risk.",
  },
] as const;

