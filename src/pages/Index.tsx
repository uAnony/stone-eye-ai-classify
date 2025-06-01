
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSection } from "@/components/PricingSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-stone-50">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PricingSection />
      <BenefitsSection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
