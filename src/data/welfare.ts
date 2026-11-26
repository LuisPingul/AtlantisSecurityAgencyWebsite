import { BASE_PATH } from "@/data/company";

export interface WelfareStage {
  step: string;
  title: string;
  metric: string;
  description: string;
  clientOutcome: string;
}

export const WELFARE_STAGES: WelfareStage[] = [
  {
    step: "01",
    title: "Cared-for Guard",
    metric: "100% On-Time Pay & Statutory Benefits",
    description:
      "Every Atlantis officer receives competitive PADPAO-aligned compensation, timely salary release, SSS/PhilHealth/Pag-IBIG coverage, medical support, and complete uniforms.",
    clientOutcome: "Eliminates financial stress and guard turnover before deployment even begins.",
  },
  {
    step: "02",
    title: "Motivated Guard",
    metric: "Dignity, Respect & Recognition",
    description:
      "When guards are treated with dignity and rewarded through structured recognition and career development, pride in the uniform replaces bare-minimum compliance.",
    clientOutcome: "Higher morale, courteous guest interaction, and stronger loyalty to your brand.",
  },
  {
    step: "03",
    title: "Focused Guard",
    metric: "Peak Alertness & Low Absenteeism",
    description:
      "Well-rested, properly equipped, and continuously trained personnel stay mentally sharp during overnight shifts, high-traffic lobbies, and complex emergency scenarios.",
    clientOutcome: "Consistent post attendance, proactive threat spotting, and zero unattended posts.",
  },
  {
    step: "04",
    title: "Better Security",
    metric: "Measurable Risk Reduction",
    description:
      "Welfare-led leadership paired with active supervision creates a self-reinforcing performance multiplier that outperforms cut-rate agencies every single shift.",
    clientOutcome: "Reliable manpower, professional appearance, responsive supervision, and reduced risk.",
  },
];

export const ATLANTIS_DIFFERENCE = [
  "Well-compensated",
  "Properly trained",
  "Properly equipped",
  "Professionally managed",
  "Treated with dignity and respect",
] as const;

export const WELFARE_COMMITMENTS = [
  {
    title: "Competitive Compensation",
    description: "PADPAO-compliant wage packages structured fairly with zero illegal deductions.",
  },
  {
    title: "Timely Salary Release",
    description: "Dependable, on-schedule payroll so officers stay focused on your safety—not bills.",
  },
  {
    title: "Complete Statutory Benefits",
    description: "Full active registration and timely remittance for SSS, PhilHealth, and HDMF Pag-IBIG.",
  },
  {
    title: "Uniforms & Tactical Equipment",
    description: "Crisp agency-supplied uniforms, high-visibility vests, radios, and duty accessories.",
  },
  {
    title: "Training & Career Development",
    description: "Continuous upskilling, supervisory tracks, and room-to-room safety seminar leadership.",
  },
  {
    title: "Medical & Wellness Support",
    description: "Physical, mental, and wellness programs supporting long-term guard readiness.",
  },
  {
    title: "Recognition & Performance Incentives",
    description: "Formal commendations and incentives rewarding exemplary alertness and client praise.",
  },
] as const;

export const PERFORMANCE_MULTIPLIER_GAINS = [
  { label: "Better Morale", clientGain: "Reliable security manpower" },
  { label: "Greater Alertness", clientGain: "Reduced security risks" },
  { label: "Lower Absenteeism & Turnover", clientGain: "Better guard retention" },
  { label: "Stronger Loyalty", clientGain: "Professional appearance" },
  { label: "Better Client Service", clientGain: "Responsive supervision" },
] as const;

export const TRAINING_PILLARS = [
  {
    title: "Security Procedures",
    description: "Standard operating post orders, perimeter vigilance, and lawful enforcement protocols.",
  },
  {
    title: "Emergency Response",
    description: "Rapid crisis stabilization, threat containment, and coordinated emergency escalation.",
  },
  {
    title: "Customer Service & Decorum",
    description: "Courteous salutary greetings, respectful client interaction, and tactful rule enforcement.",
  },
  {
    title: "Access Control",
    description: "Visitor verification, ID checks, X-ray & walk-through metal detector screening discipline.",
  },
  {
    title: "Incident Reporting",
    description: "Accurate logbook documentation, chain-of-command reporting, and complete audit trails.",
  },
  {
    title: "Fire & Disaster Preparedness",
    description: "Evacuation marshaling, fire suppression readiness, and earthquake/typhoon response drills.",
  },
] as const;

export const SUPERVISION_PILLARS = [
  {
    title: "Routine & Unannounced Spot Inspections",
    description:
      "Dedicated Security Operation Officers and two (2) full-time field inspectors conduct scheduled and surprise inspections to uphold discipline.",
  },
  {
    title: "Clear Post Orders",
    description:
      "Every site receives customized written post orders aligned with client policies, access rules, and emergency escalations.",
  },
  {
    title: "Active Performance Monitoring",
    description:
      "Structured communication flow collects daily duty logs, attendance records, and inspection scores for management review.",
  },
  {
    title: "Direct Client Feedback Loops",
    description:
      "Proactive management check-ins ensure post standards evolve alongside your operational schedules.",
  },
  {
    title: "Swift Corrective Action",
    description:
      "Immediate coaching, retraining, or rapid roster replacement whenever standards require reinforcement.",
  },
] as const;

export const TECH_HUMAN_PILLARS = [
  {
    title: "CCTV Coordination",
    description: "Synchronized camera surveillance and real-time ground guard interception.",
  },
  {
    title: "Communication Systems",
    description: "Two-way radio nets and rapid command-center escalation channels.",
  },
  {
    title: "Incident Monitoring",
    description: "Structured digital and physical logbooks enabling complete incident traceability.",
  },
  {
    title: "Patrol Systems",
    description: "Disciplined roving schedules covering blind spots, perimeters, and entry gates.",
  },
] as const;

export const COMMUNITY_ADVOCACY = {
  title: "Barangay Volunteer-Based Initiative",
  badge: "Public Safety Advocacy",
  description:
    "A unique community-partnership model empowering trusted individuals from each barangay to participate in local security efforts during community events free of charge as part of Atlantis's public safety advocacy.",
  highlights: [
    "Free community event support in partnership with local barangays",
    "Empowers trusted neighborhood volunteers with structured safety guidance",
    "Strengthens grassroots trust between private security and the public",
  ],
};

export const OPERATIONS_GALLERY = [
  {
    src: `${BASE_PATH}/images/operations/briefing-formation.jpg`,
    title: "Pre-Deployment Formation & Post Briefing",
    caption: "Uniformed screening personnel receiving lane protocol instructions prior to multi-gate event deployment.",
    tag: "Field Readiness",
  },
  {
    src: `${BASE_PATH}/images/operations/campus-seminar-2.jpg`,
    title: "Institutional Security Awareness Seminar",
    caption: "Atlantis leadership conducting campus-wide security awareness briefings at Jose Maria College Foundation, Inc.",
    tag: "Campus Advocacy",
  },
  {
    src: `${BASE_PATH}/images/operations/campus-seminar-1.jpg`,
    title: "Room-to-Room Safety Briefing",
    caption: "Direct classroom-level student and faculty safety orientations fostering proactive hazard awareness.",
    tag: "Room-to-Room Seminar",
  },
  {
    src: `${BASE_PATH}/images/operations/cctv-command.jpg`,
    title: "24/7 Surveillance & CCTV Coordination",
    caption: "Multi-screen live monitoring backing up field officers—technology supporting trained human security.",
    tag: "Tech + Human",
  },
  {
    src: `${BASE_PATH}/images/operations/metal-detector-lane.jpg`,
    title: "Multi-Lane Metal Detector & X-Ray Operations",
    caption: "High-throughput screening lanes with walk-through metal detectors and baggage X-ray scanners.",
    tag: "Access Control",
  },
  {
    src: `${BASE_PATH}/images/operations/operations-briefing.jpg`,
    title: "Large-Scale Venue Operations Alignment",
    caption: "Coordinated crowd-management briefing with venue stakeholders and marshaling personnel.",
    tag: "Event Command",
  },
] as const;
