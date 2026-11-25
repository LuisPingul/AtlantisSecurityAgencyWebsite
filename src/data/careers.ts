export interface ScreeningStep {
  step: string;
  title: string;
  description: string;
}

export interface MinimumQualification {
  id: string;
  label: string;
  detail: string;
  required: boolean;
}

export const SCREENING_PIPELINE: ScreeningStep[] = [
  {
    step: "01",
    title: "Structured Interview",
    description: "Initial character, communication, and service-attitude assessment with agency recruiters.",
  },
  {
    step: "02",
    title: "Oral & Written Examination",
    description: "Evaluation of comprehension, incident-report writing, and basic security protocol mastery.",
  },
  {
    step: "03",
    title: "Supervisory Competency Test",
    description: "Dedicated assessment for Security Officer and Detachment Commander candidates.",
  },
  {
    step: "04",
    title: "Physical & Mental Examination",
    description: "Comprehensive medical screening confirming endurance and operational fitness for duty.",
  },
  {
    step: "05",
    title: "Actual Neuro-Psychiatric (NP) Exam",
    description: "Mandatory accredited psychological and neuro-psychiatric clearance prior to licensing/posting.",
  },
  {
    step: "06",
    title: "Competency Trainings & Lectures",
    description: "Structured security lectures covering post discipline, customer decorum, and emergency response.",
  },
];

export const MINIMUM_QUALIFICATIONS: MinimumQualification[] = [
  {
    id: "citizenship",
    label: "Filipino Citizen",
    detail: "Must be a natural-born or naturalized citizen of the Republic of the Philippines.",
    required: true,
  },
  {
    id: "education",
    label: "High School Graduate (College / Military / Police Preferred)",
    detail:
      "Minimum High School diploma; priority given to 2nd-Year College level, College Graduates, and retired Military or Police personnel.",
    required: true,
  },
  {
    id: "age",
    label: "Age 21 to 55 Years Old",
    detail: "Must be at least 21 years old and not more than 55 years of age upon application.",
    required: true,
  },
  {
    id: "height",
    label: "Minimum Height: 5'4\" (Male) / 5'2\" (Female)",
    detail: "Meets PNP-SOSIA and agency physical stature standards.",
    required: true,
  },
  {
    id: "weight",
    label: "Minimum Weight: 60 kg (Male) / 50 kg (Female)",
    detail: "Proportionate physical build suitable for active tour-of-duty requirements.",
    required: true,
  },
  {
    id: "moral",
    label: "Good Moral Character",
    detail: "Clean background record with strong personal integrity and discipline.",
    required: true,
  },
  {
    id: "pnp-license",
    label: "Active PNP-SOSIA Security License",
    detail: "Valid Security Guard or Security Officer license issued by PNP-SOSIA.",
    required: true,
  },
  {
    id: "clearances",
    label: "Complete Clearances & PSA Birth Certificate",
    detail: "Police Clearance, NBI Clearance, Court Clearance, Barangay Clearance, and PSA Birth Certificate.",
    required: true,
  },
  {
    id: "gov-ids",
    label: "Statutory Government Numbers",
    detail: "Active SSS, PhilHealth, Pag-IBIG (HDMF), and BIR TIN numbers for statutory remittance.",
    required: true,
  },
  {
    id: "fitness",
    label: "Physically, Mentally, Emotionally & Psychologically Fit",
    detail: "Verified fit-to-work and passed neuro-psychiatric & drug-test clearances.",
    required: true,
  },
  {
    id: "training-certs",
    label: "Pre-License Training / Retraining Certificates",
    detail: "Accredited Pre-Licensing Training Course (PLTC) or Refresher/Retraining certificates.",
    required: true,
  },
  {
    id: "reports",
    label: "Opening & Closing Report",
    detail: "Complete Opening and Closing Report documentation from accredited training center.",
    required: true,
  },
];
