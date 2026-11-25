export interface ActiveClientDeployment {
  id: string;
  name: string;
  sector: string;
  scope: string;
  photo: string;
  logo: string;
}

export interface ConfidentialClientPartner {
  id: string;
  name: string;
  subtitle: string;
  sector: string;
  logo: string;
}

export const ACTIVE_DEPLOYMENTS: ActiveClientDeployment[] = [
  {
    id: "jmcfi",
    name: "Jose Maria College Foundation, Inc.",
    sector: "Education & Campus Security",
    scope: "Campus perimeter control, entrance monitoring, and Room-to-Room Safety Awareness Seminars.",
    photo: "/images/clients/deploy-jmcfi.jpg",
    logo: "/images/clients/logo-jmcfi.png",
  },
  {
    id: "greengold",
    name: "Green Gold Processing Plant",
    sector: "Industrial & Processing Plant",
    scope: "Full-team industrial perimeter defense, gate verification, and 24/7 plant asset protection.",
    photo: "/images/clients/deploy-greengold.jpg",
    logo: "/images/clients/logo-greengold.png",
  },
  {
    id: "7eleven",
    name: "7-Eleven",
    sector: "24/7 Convenience Retail",
    scope: "Round-the-clock storefront visibility, customer safety, and retail loss prevention.",
    photo: "/images/clients/deploy-7eleven.jpg",
    logo: "/images/clients/logo-7eleven.png",
  },
  {
    id: "waxis",
    name: "Waxi's",
    sector: "Food & Commercial Retail",
    scope: "Storefront security presence, guest assistance, and peak-hour commercial order.",
    photo: "/images/clients/deploy-waxis.jpg",
    logo: "/images/clients/logo-waxis.png",
  },
  {
    id: "alishas-mart",
    name: "Alisha's Mart",
    sector: "Supermarket & Retail",
    scope: "Customer ingress/egress supervision, shrinkage deterrence, and grand-event crowd support.",
    photo: "/images/clients/deploy-alishas.jpg",
    logo: "/images/clients/logo-alishas.png",
  },
  {
    id: "qi-xiang",
    name: "Qi Xiang Business Inn",
    sector: "Business Hotel & Hospitality",
    scope: "Courteous 24/7 guest security, evening lobby vigilance, and parking area protection.",
    photo: "/images/clients/deploy-qixiang.jpg",
    logo: "/images/clients/logo-qixiang.png",
  },
];

export const CONFIDENTIAL_PARTNERS: ConfidentialClientPartner[] = [
  {
    id: "hmbp",
    name: "HMBP (His Majesty Bottling Plant)",
    subtitle: "Bottling Plant — Mineral Water Provider",
    sector: "Beverage & Bottling Plant",
    logo: "/images/clients/logo-hmbp.png",
  },
  {
    id: "hdr-plastic",
    name: "HDR Plastic Mfg. Corp.",
    subtitle: "Retail Business — Plastic Products Distributor",
    sector: "Distribution & Retail",
    logo: "/images/clients/logo-hdr.png",
  },
  {
    id: "goodluck-plastic",
    name: "Goodluck Plastic Venture Outlet",
    subtitle: "Manufacturing — Plastic Products and Packaging",
    sector: "Industrial Manufacturing",
    logo: "/images/clients/logo-goodluck.png",
  },
];

export const CLIENT_PRIVACY_NOTE =
  "We are honored to serve respected businesses and institutions across Luzon, Visayas, and Mindanao. Due to privacy and operational security protocols, some of our clients choose not to disclose specific service details or site photos. We fully respect their preferences and present their official logos with gratitude.";
