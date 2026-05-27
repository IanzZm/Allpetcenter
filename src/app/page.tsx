import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LocationSection } from "@/components/sections/location-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TeamSection } from "@/components/sections/team-section";
import { TrustSection } from "@/components/sections/trust-section";
import { VideoSection } from "@/components/sections/video-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TrustSection />
      <VideoSection />
      <FaqSection />
      <LocationSection />
      <SiteFooter />
    </main>
  );
}
