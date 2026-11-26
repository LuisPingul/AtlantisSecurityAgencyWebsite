import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { COMPANY } from "@/data/company";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atlantissecurity.ph"),
  title: {
    default: "Atlantis Security Agency Inc. | Anchored by Loyalty, Powered by Duty",
    template: "%s | Atlantis Security Agency Inc.",
  },
  description:
    "PNP-SOSIA licensed and PADPAO Region XII compliant Philippine security agency delivering welfare-led guards, VIP protection, CCTV coordination, ERT, and physical security audits across Davao, Kidapawan, and nationwide.",
  keywords: [
    "Atlantis Security Agency Inc",
    "Security Agency Davao City",
    "Security Agency Kidapawan City",
    "PNP-SOSIA Licensed Security Guards Philippines",
    "PADPAO Compliant Security Agency",
    "VIP Protection Mindanao",
    "Industrial Security Services Philippines",
  ],
  icons: {
    icon: "/images/brand/atlantis-icon.png",
    apple: "/images/brand/atlantis-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: COMPANY.legalName,
    title: "Atlantis Security Agency Inc. — Your Safety, Our Priority",
    description: COMPANY.heroSubheadline,
    images: [
      {
        url: "/images/brand/atlantis-emblem.png",
        width: 768,
        height: 768,
        alt: "Atlantis Security Agency Inc. Official Seal",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: COMPANY.legalName,
  slogan: COMPANY.tagline,
  foundingDate: "2024-11-19",
  email: COMPANY.contacts.email,
  telephone: COMPANY.contacts.phones[0].tel,
  areaServed: ["Davao Region", "SOCCSKSARGEN", "Kidapawan City", "Davao City", "Philippines"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Door 9, SJ Space Rental, Purok 3, Balindog",
      addressLocality: "Kidapawan City",
      addressRegion: "Cotabato",
      addressCountry: "PH",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Blk. 18 Lot 1, Country Homes Avenue",
      addressLocality: "Davao City",
      addressRegion: "Davao Region",
      postalCode: "8000",
      addressCountry: "PH",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-dvh bg-[#081120] text-[#0B1324] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
