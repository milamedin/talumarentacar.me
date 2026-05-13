/*
 * Taluma rent a car — SEO sub-pages for car rental keyword variations
 * (luxury, cheap, long-term). Each has its own inquiry form.
 */
import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FleetTeaser from "@/components/FleetTeaser";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, MapPin, Clock, Shield, Star, Send } from "lucide-react";
import { motion } from "framer-motion";

interface FormField {
  id: string;
  labelMe: string;
  labelEn: string;
  type: "select" | "date" | "number" | "text" | "time";
  options?: { value: string; labelMe: string; labelEn: string }[];
  placeholder?: string;
  min?: number;
  max?: number;
}

interface RentalService {
  slug: string;
  icon: "car" | "luxury";
  h1Me: string;
  h1En: string;
  metaTitle: string;
  metaDesc: string;
  heroImage: string;
  descMe: string;
  descEn: string;
  priceFrom: number;
  priceTo: number;
  locations: string[];
  features: { me: string; en: string }[];
  faqMe: { q: string; a: string }[];
  faqEn: { q: string; a: string }[];
  formFields: FormField[];
}

const OTHER_LOCATION = "__other__";
const commonLocationOptions = (locations: string[]) => [
  ...locations.map((loc) => ({ value: loc, labelMe: loc, labelEn: loc })),
  { value: OTHER_LOCATION, labelMe: "Drugo (upišite)", labelEn: "Other (type in)" },
];

const rentalServices: RentalService[] = [
  {
    slug: "luxury-car-rental-montenegro",
    icon: "luxury",
    h1Me: "Luksuzna Vozila za Iznajmljivanje u Crnoj Gori",
    h1En: "Luxury Car Rental in Montenegro",
    metaTitle: "Luxury Car Rental Montenegro | Mercedes, BMW, Porsche | talumarentacar.me",
    metaDesc: "Iznajmite luksuzno vozilo u Crnoj Gori - Mercedes, BMW, Porsche, Range Rover. Porto Montenegro, Budva, Podgorica.",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=600&fit=crop",
    descMe: "Za posebne prilike ili jednostavno uživanje u vožnji, nudimo luksuzna vozila vrhunskih brendova. Mercedes S-Class, BMW 7 Series, Porsche Cayenne, Range Rover - izaberite vozilo koje odgovara vašem stilu. Dostava na aerodrom ili hotel.",
    descEn: "For special occasions or simply enjoying the drive, we offer luxury vehicles from top brands. Mercedes S-Class, BMW 7 Series, Porsche Cayenne, Range Rover - choose the vehicle that matches your style. Delivery to airport or hotel.",
    priceFrom: 100,
    priceTo: 500,
    locations: ["Tivat (Porto Montenegro)", "Budva", "Podgorica", "Kotor"],
    features: [
      { me: "Mercedes, BMW, Porsche, Range Rover", en: "Mercedes, BMW, Porsche, Range Rover" },
      { me: "Dostava na aerodrom/hotel", en: "Airport/hotel delivery" },
      { me: "Puno osiguranje", en: "Full insurance" },
      { me: "24/7 podrška", en: "24/7 support" },
    ],
    faqMe: [
      { q: "Koji je minimalni period iznajmljivanja?", a: "Minimalni period je obično 2-3 dana za luksuzna vozila, ali zavisi od agencije." },
      { q: "Da li je depozit potreban?", a: "Da, za luksuzna vozila obično je potreban depozit koji se blokira na kreditnoj kartici." },
    ],
    faqEn: [
      { q: "What is the minimum rental period?", a: "The minimum period is usually 2-3 days for luxury vehicles, but depends on the agency." },
      { q: "Is a deposit required?", a: "Yes, for luxury vehicles a deposit is usually required, blocked on a credit card." },
    ],
    formFields: [
      { id: "carBrand", labelMe: "Željeni brend", labelEn: "Preferred brand", type: "select", options: [
        { value: "mercedes", labelMe: "Mercedes-Benz", labelEn: "Mercedes-Benz" },
        { value: "bmw", labelMe: "BMW", labelEn: "BMW" },
        { value: "porsche", labelMe: "Porsche", labelEn: "Porsche" },
        { value: "range-rover", labelMe: "Range Rover", labelEn: "Range Rover" },
        { value: "audi", labelMe: "Audi", labelEn: "Audi" },
        { value: "other", labelMe: "Drugo (navedite u poruci)", labelEn: "Other (specify in message)" },
      ]},
      { id: "location", labelMe: "Lokacija preuzimanja", labelEn: "Pickup location", type: "select", options: commonLocationOptions(["Tivat (Porto Montenegro)", "Budva", "Podgorica", "Kotor"]) },
      { id: "dateFrom", labelMe: "Datum od", labelEn: "Date from", type: "date" },
      { id: "dateTo", labelMe: "Datum do", labelEn: "Date to", type: "date" },
      { id: "occasion", labelMe: "Povod (opciono)", labelEn: "Occasion (optional)", type: "select", options: [
        { value: "vacation", labelMe: "Odmor", labelEn: "Vacation" },
        { value: "wedding", labelMe: "Svadba", labelEn: "Wedding" },
        { value: "business", labelMe: "Poslovni put", labelEn: "Business trip" },
        { value: "other", labelMe: "Drugo", labelEn: "Other" },
      ]},
    ],
  },
  {
    slug: "cheap-car-rental-montenegro",
    icon: "car",
    h1Me: "Jeftini Rent a Car u Crnoj Gori",
    h1En: "Cheap Car Rental in Montenegro",
    metaTitle: "Cheap Car Rental Montenegro | Jeftini Rent a Car | talumarentacar.me",
    metaDesc: "Najjeftiniji rent a car u Crnoj Gori. Pripremamo cijene iz Taluma flote sa 60+ vozila. Ekonomija vozila, puno osiguranje, bez skrivenih troškova.",
    heroImage: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&h=600&fit=crop",
    descMe: "Tražite najjeftiniji rent a car u Crnoj Gori? Na pravom ste mjestu. Iz Taluma flote od 60+ vozila biramo ekonomska vozila po najnižoj cijeni — puno osiguranje, neograničena kilometraža, bez skrivenih troškova. Pošaljite upit i dobićete ponudu za 5–10 minuta.",
    descEn: "Looking for the cheapest car rental in Montenegro? You're in the right place. From the Taluma fleet of 60+ vehicles we pick the most affordable economy options — full insurance, unlimited mileage, no hidden fees. Send an inquiry and get an offer within 5–10 minutes.",
    priceFrom: 40,
    priceTo: 75,
    locations: ["Podgorica", "Tivat", "Budva", "Bar", "Nikšić"],
    features: [
      { me: "Direktna cijena iz Taluma flote sa 60+ vozila", en: "Direct prices from Taluma fleet" },
      { me: "Ekonomija vozila od 40€/dan", en: "Economy vehicles from €40/day" },
      { me: "Bez skrivenih troškova", en: "No hidden fees" },
      { me: "Puno osiguranje uključeno", en: "Full insurance included" },
    ],
    faqMe: [
      { q: "Koji je najjeftiniji auto za iznajmljivanje?", a: "Najjeftinija opcija su ekonomija vozila poput Fiat Panda ili Dacia Sandero, sa cijenama od 40€/dan u sezoni. Što ranije rezervišete, cijene mogu biti niže!" },
      { q: "Da li ima skrivenih troškova?", a: "Ne, Taluma nudi transparentne cijene. Osiguranje i PDV su uključeni." },
    ],
    faqEn: [
      { q: "What is the cheapest car to rent?", a: "The cheapest option is economy vehicles like Fiat Panda or Dacia Sandero, with prices from €40/day in season. The earlier you book, the lower the price can be!" },
      { q: "Are there hidden fees?", a: "No, Taluma offers transparent pricing. Insurance and VAT are included." },
    ],
    formFields: [
      { id: "location", labelMe: "Lokacija preuzimanja", labelEn: "Pickup location", type: "select", options: commonLocationOptions(["Podgorica", "Tivat", "Budva", "Bar", "Nikšić"]) },
      { id: "carType", labelMe: "Tip vozila", labelEn: "Car type", type: "select", options: [
        { value: "mini", labelMe: "Mini (Fiat Panda, VW Up)", labelEn: "Mini (Fiat Panda, VW Up)" },
        { value: "economy", labelMe: "Ekonomija (Dacia Sandero, Clio)", labelEn: "Economy (Dacia Sandero, Clio)" },
        { value: "compact", labelMe: "Kompakt (VW Golf, Toyota Corolla)", labelEn: "Compact (VW Golf, Toyota Corolla)" },
        { value: "any", labelMe: "Svejedno, najjeftiniji", labelEn: "Any, cheapest available" },
      ]},
      { id: "dateFrom", labelMe: "Datum od", labelEn: "Date from", type: "date" },
      { id: "dateTo", labelMe: "Datum do", labelEn: "Date to", type: "date" },
      { id: "transmission", labelMe: "Mjenjač", labelEn: "Transmission", type: "select", options: [
        { value: "manual", labelMe: "Manuelni", labelEn: "Manual" },
        { value: "automatic", labelMe: "Automatik", labelEn: "Automatic" },
        { value: "any", labelMe: "Svejedno", labelEn: "Any" },
      ]},
    ],
  },
  {
    slug: "long-term-car-rental-montenegro",
    icon: "car",
    h1Me: "Dugoročno Iznajmljivanje Auta u Crnoj Gori",
    h1En: "Long Term Car Rental in Montenegro",
    metaTitle: "Long Term Car Rental Montenegro | Mjesečni Najam | talumarentacar.me",
    metaDesc: "Dugoročno iznajmljivanje auta u Crnoj Gori - mjesečni i sezonski najam po sniženim cijenama. Sva vozila sa osiguranjem.",
    heroImage: "/images/services/long-term.jpg",
    descMe: "Za boravke duže od 2 sedmice, dugoročno iznajmljivanje je najisplativija opcija. Nudimo mjesečne i sezonske tarife sa značajnim popustima u odnosu na dnevne cijene. Idealno za digitalne nomade, sezonske radnike i duže odmore u Crnoj Gori.",
    descEn: "For stays longer than 2 weeks, long-term rental is the most cost-effective option. We offer monthly and seasonal rates with significant discounts compared to daily prices. Ideal for digital nomads, seasonal workers, and extended holidays in Montenegro.",
    priceFrom: 350,
    priceTo: 900,
    locations: ["Podgorica", "Budva", "Tivat", "Bar", "Kotor"],
    features: [
      { me: "Mjesečne i sezonske tarife", en: "Monthly and seasonal rates" },
      { me: "Do 40% popusta na dnevnu cijenu", en: "Up to 40% discount on daily price" },
      { me: "Zamjena vozila uključena", en: "Vehicle replacement included" },
      { me: "Puno osiguranje i servis", en: "Full insurance and service" },
    ],
    faqMe: [
      { q: "Koliki je popust za dugoročni najam?", a: "Popusti idu do 40% u odnosu na dnevnu cijenu, u zavisnosti od perioda i agencije." },
      { q: "Da li mogu produžiti period najma?", a: "Da, produženje je moguće uz prethodno obavještenje. Kontaktirajte nas za detalje." },
    ],
    faqEn: [
      { q: "How much discount for long-term rental?", a: "Discounts go up to 40% compared to daily price, depending on the period and agency." },
      { q: "Can I extend the rental period?", a: "Yes, extension is possible with prior notice. Contact us for details." },
    ],
    formFields: [
      { id: "location", labelMe: "Lokacija preuzimanja", labelEn: "Pickup location", type: "select", options: commonLocationOptions(["Podgorica", "Budva", "Tivat", "Bar", "Kotor"]) },
      { id: "carType", labelMe: "Tip vozila", labelEn: "Car type", type: "select", options: [
        { value: "economy", labelMe: "Ekonomija", labelEn: "Economy" },
        { value: "compact", labelMe: "Kompakt", labelEn: "Compact" },
        { value: "suv", labelMe: "SUV", labelEn: "SUV" },
        { value: "any", labelMe: "Svejedno", labelEn: "Any" },
      ]},
      { id: "period", labelMe: "Period najma", labelEn: "Rental period", type: "select", options: [
        { value: "2weeks", labelMe: "2 sedmice", labelEn: "2 weeks" },
        { value: "1month", labelMe: "1 mjesec", labelEn: "1 month" },
        { value: "3months", labelMe: "3 mjeseca", labelEn: "3 months" },
        { value: "6months", labelMe: "6 mjeseci", labelEn: "6 months" },
        { value: "season", labelMe: "Cijela sezona (maj-oktobar)", labelEn: "Full season (May-October)" },
      ]},
      { id: "dateFrom", labelMe: "Datum početka", labelEn: "Start date", type: "date" },
    ],
  },
];

const iconMap: Record<string, typeof Star> = {
  car: Star,
  luxury: Star,
};

/* ─── Inline Form Component ─── */
function InquiryForm({ service, language }: { service: RentalService; language: string }) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [customInputs, setCustomInputs] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const buildWhatsAppMessage = () => {
    const h1 = language === "me" ? service.h1Me : service.h1En;
    const lines: string[] = [];
    lines.push(language === "me" ? `Zdravo! Imam upit za: ${h1}` : `Hello! I have an inquiry for: ${h1}`);
    if (name) lines.push(language === "me" ? `Ime: ${name}` : `Name: ${name}`);
    service.formFields.forEach((field) => {
      const val = formData[field.id];
      if (val) {
        const label = language === "me" ? field.labelMe : field.labelEn;
        let displayVal = val;
        if (val === OTHER_LOCATION && customInputs[field.id]) {
          displayVal = customInputs[field.id];
        } else if (field.type === "select" && field.options) {
          const opt = field.options.find((o) => o.value === val);
          if (opt) displayVal = language === "me" ? opt.labelMe : opt.labelEn;
        }
        lines.push(`${label}: ${displayVal}`);
      }
    });
    lines.push(language === "me" ? "\nMolim vas za ponudu. Hvala!" : "\nPlease send me an offer. Thank you!");
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/38269919192?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 lg:p-6 border border-white/15 space-y-3">
      <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
        <Send className="w-4 h-4 text-gold" />
        {language === "me" ? "Brzi upit" : "Quick inquiry"}
      </h3>

      {/* Name field */}
      <div>
        <label className="text-white/70 text-xs font-medium mb-1 block">
          {language === "me" ? "Vaše ime" : "Your name"}
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={language === "me" ? "Ime i prezime" : "Full name"}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50"
        />
      </div>

      {/* Dynamic fields */}
      {service.formFields.map((field) => (
        <div key={field.id}>
          <label className="text-white/70 text-xs font-medium mb-1 block">
            {language === "me" ? field.labelMe : field.labelEn}
          </label>
          {field.type === "select" && field.options ? (
            <>
              <select
                value={formData[field.id] || ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 [&>option]:text-gray-900"
              >
                <option value="">{language === "me" ? "Izaberite..." : "Select..."}</option>
                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {language === "me" ? opt.labelMe : opt.labelEn}
                  </option>
                ))}
              </select>
              {formData[field.id] === OTHER_LOCATION && (
                <input
                  type="text"
                  value={customInputs[field.id] || ""}
                  onChange={(e) => setCustomInputs((prev) => ({ ...prev, [field.id]: e.target.value }))}
                  placeholder={language === "me" ? "Upišite lokaciju..." : "Type location..."}
                  className="w-full mt-1.5 bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50"
                />
              )}
            </>
          ) : field.type === "date" ? (
            <input
              type="date"
              value={formData[field.id] || ""}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 [color-scheme:dark]"
            />
          ) : field.type === "number" ? (
            <input
              type="number"
              min={field.min || 1}
              max={field.max || 99}
              value={formData[field.id] || ""}
              onChange={(e) => handleChange(field.id, e.target.value)}
              placeholder={`${field.min || 1} - ${field.max || 99}`}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50"
            />
          ) : (
            <input
              type="text"
              value={formData[field.id] || ""}
              onChange={(e) => handleChange(field.id, e.target.value)}
              placeholder={field.placeholder || ""}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 rounded-xl font-semibold transition-all hover:shadow-lg text-sm"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {language === "me" ? "Pošalji upit na WhatsApp" : "Send inquiry via WhatsApp"}
      </button>
      <p className="text-white/40 text-xs text-center">
        {language === "me" ? "Odgovaramo u roku od 5–10 minuta" : "We respond within 5–10 minutes"}
      </p>
    </form>
  );
}

export default function RentalServicePage() {
  const params = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const slug = params.slug || "";
  const service = rentalServices.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", service.metaDesc);
    }
    window.scrollTo(0, 0);
  }, [slug, service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display font-bold text-2xl text-forest mb-4">
              {language === "me" ? "Usluga nije pronađena" : "Service not found"}
            </h1>
            <Link href="/" className="text-gold hover:text-gold-dark font-medium">
              ← {language === "me" ? "Nazad na početnu" : "Back to home"}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || Star;
  const h1 = language === "me" ? service.h1Me : service.h1En;
  const desc = language === "me" ? service.descMe : service.descEn;
  const faqs = language === "me" ? service.faqMe : service.faqEn;
  const features = service.features.map((f) => (language === "me" ? f.me : f.en));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero with Inquiry Form */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <img src={service.heroImage} alt={h1} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/75 to-forest-dark/60" />
        </div>
        <div className="container relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {language === "me" ? "Nazad na početnu" : "Back to home"}
          </Link>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left: Title & Description */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-4">
                <IconComponent className="w-5 h-5 text-gold" />
                <span className="text-gold font-medium">talumarentacar.me</span>
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">{h1}</h1>
              <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">{desc}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                  <div className="text-gold font-display font-bold text-2xl">60+</div>
                  <div className="text-white/60 text-xs mt-0.5">{language === "me" ? "Vozila u floti" : language === "de" ? "Fahrzeuge" : language === "ru" ? "Авто" : "Fleet vehicles"}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                  <div className="text-gold font-display font-bold text-2xl">24/7</div>
                  <div className="text-white/60 text-xs mt-0.5">{language === "me" ? "Podrška" : language === "de" ? "Support" : language === "ru" ? "Поддержка" : language === "fr" ? "Support" : language === "pl" ? "Wsparcie" : language === "tr" ? "Destek" : "Support"}</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Inquiry Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
              <InquiryForm service={service} language={language} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50">
                <h2 className="font-display font-bold text-xl text-forest mb-4">
                  {language === "me" ? "Šta je uključeno?" : "What's included?"}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                        {i === 0 ? <Star className="w-5 h-5 text-forest" /> :
                         i === 1 ? <Shield className="w-5 h-5 text-forest" /> :
                         i === 2 ? <Clock className="w-5 h-5 text-forest" /> :
                         <MapPin className="w-5 h-5 text-forest" />}
                      </div>
                      <span className="text-sm text-foreground font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50">
                <h2 className="font-display font-bold text-xl text-forest mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {language === "me" ? "Dostupne lokacije" : "Available locations"}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {service.locations.map((loc) => (
                    <span key={loc} className="bg-cream rounded-full px-4 py-2 text-sm font-medium text-foreground border border-border/30">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50">
                <h2 className="font-display font-bold text-xl text-forest mb-6">
                  {language === "me" ? "Česta pitanja" : "FAQ"}
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-border/30 pb-4 last:border-0 last:pb-0">
                      <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fleet teaser — 3 random vehicles + CTA to full fleet on home */}
              <FleetTeaser seed={service.slug} />
            </div>

            {/* Sidebar CTA - sticky on desktop */}
            <div>
              <div className="bg-forest rounded-2xl p-6 lg:p-8 text-white sticky top-24">
                <h3 className="font-display font-bold text-xl mb-3">
                  {language === "me" ? "Pošaljite upit" : "Send an inquiry"}
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {language === "me"
                    ? "Javite nam šta vam treba i dobićete ponudu iz naše flote u roku od 5–10 minuta."
                    : "Tell us what you need and receive offers from our fleet within 5–10 minutes."}
                </p>
                <a
                  href={`https://wa.me/38269919192?text=${encodeURIComponent(
                    language === "me"
                      ? `Zdravo! Zanima me ${h1}. Molim vas za ponudu.`
                      : `Hello! I'm interested in ${h1}. Please send me an offer.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg mb-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

export { rentalServices };
