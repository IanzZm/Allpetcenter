import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about/about-section";
import { FaqSection } from "@/components/sections/faq/faq-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { LocationSection } from "@/components/sections/location/location-section";
import { ReviewsSection } from "@/components/sections/reviews/reviews-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { TeamSection } from "@/components/sections/team/team-section";
import { TrustSection } from "@/components/sections/trust/trust-section";
import { VideoSection } from "@/components/sections/video/video-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TrustSection />
      <ReviewsSection />
      <VideoSection />
      <FaqSection />
      <LocationSection />
      <SiteFooter />
    </main>
  );
}
