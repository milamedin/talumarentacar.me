/*
 * Taluma rent a car
 * Home page: Hero → Fleet → Trust → How → Locations → Blog → FAQ → CTA → Footer
 * BlogPreview is lazy-loaded so the 95KB blogPosts module stays out of the
 * initial bundle (still shows when user scrolls down).
 */
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import FleetSection from "@/components/FleetSection";
import LocationsSection from "@/components/LocationsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const BlogPreview = lazy(() => import("@/components/BlogPreview"));

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
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <BlogPreview />
        </Suspense>
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
