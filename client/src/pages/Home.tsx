/*
 * Taluma rent a car
 * Home page: Hero → Trust → How → Locations → Services → Blog → FAQ → CTA → Footer
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import FleetSection from "@/components/FleetSection";
import LocationsSection from "@/components/LocationsSection";
import BlogPreview from "@/components/BlogPreview";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <FleetSection />
        <TrustSection />
        <HowItWorks />
        <LocationsSection />
        <BlogPreview />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
