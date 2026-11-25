import { HeroSection } from "@/components/home/HeroSection";
import { CredentialsRibbon } from "@/components/home/CredentialsRibbon";
import { WelfareMultiplier } from "@/components/home/WelfareMultiplier";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { TechAndSupervisionSection } from "@/components/home/TechAndSupervisionSection";
import { ClientShowcase } from "@/components/home/ClientShowcase";
import { ProposalScopeBuilder } from "@/components/home/ProposalScopeBuilder";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GreekKeyDivider />
      <CredentialsRibbon />
      <WelfareMultiplier />
      <ServicesShowcase showAllLink />
      <GreekKeyDivider />
      <TechAndSupervisionSection />
      <ClientShowcase />
      <GreekKeyDivider />
      <ProposalScopeBuilder />
    </>
  );
}
