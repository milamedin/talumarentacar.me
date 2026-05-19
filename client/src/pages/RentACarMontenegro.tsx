/*
 * Design: Montenegrin Trust & Warmth
 * General "Rent a Car Montenegro" SEO page
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationsSection from "@/components/LocationsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FleetTeaser from "@/components/FleetTeaser";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "/images/locations/taluma-hero-1200.webp";

export default function RentACarMontenegro() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = "Rent a Car Montenegro | Best Prices from Local Agencies | talumarentacar.me";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Rent a car in Montenegro with Taluma — fleet of 60+ vehicles, prices from €24.99 to €149.99/day. Podgorica, Budva, Tivat, Kotor. No deposit, no hidden fees."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Rent a Car Montenegro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-forest-dark/50" />
        </div>

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "me" ? "Nazad na početnu" : "Back to home"}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium">Montenegro</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
              {language === "me"
                ? "Rent a Car Crna Gora - Iznajmljivanje Vozila"
                : "Rent a Car Montenegro - Car Rental"}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              {language === "me"
                ? "Taluma rent a car — lokalna agencija iz Podgorice sa flotom od 60+ vozila. Preuzimanje na aerodromima Podgorica i Tivat, ili dostava na adresu po vašem izboru. Cijene od 20€ dnevno sa punim osiguranjem."
                : "Taluma rent a car — local agency based in Podgorica with a fleet of 60+ vehicles. Pick up at Podgorica and Tivat airports, or delivery to any address in Montenegro. Prices from €20/day with full insurance."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="font-display font-bold text-2xl text-forest">
              {language === "me"
                ? "Zašto iznajmiti auto u Crnoj Gori?"
                : "Why rent a car in Montenegro?"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === "me"
                ? "Crna Gora je zemlja nevjerovatne raznolikosti - od plaža Jadranskog mora do planina Durmitora, od UNESCO zaštićenog Kotora do modernog Porto Montenegra. Sa iznajmljenim autom, možete istražiti sve ove ljepote u svom tempu, bez zavisnosti od javnog prevoza koji je ograničen."
                : "Montenegro is a country of incredible diversity - from Adriatic beaches to Durmitor mountains, from UNESCO-protected Kotor to modern Porto Montenegro. With a rental car, you can explore all these beauties at your own pace, without depending on limited public transport."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {language === "me"
                ? "Taluma rent a car je lokalna agencija sa sjedištem u Podgorici. Nudimo flotu od 60+ vozila — od ekonomske klase do SUV-a i luksuznih modela — sa punim osiguranjem, neograničenom kilometražom i 24/7 podrškom. Pošaljite upit i odgovaramo u roku od 5–10 minuta."
                : "Taluma rent a car is a local agency based in Podgorica. We offer a fleet of 60+ vehicles — from economy class to SUVs and luxury models — with full insurance, unlimited mileage and 24/7 support. Send an inquiry and we reply within 5–10 minutes."}
            </p>
            <div className="mt-10">
              <FleetTeaser seed="rent-a-car-montenegro" />
            </div>
          </div>
        </div>
      </section>

      <LocationsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
