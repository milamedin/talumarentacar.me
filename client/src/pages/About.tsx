/*
 * Taluma rent a car — About / O nama page
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowLeft,
  Shield,
  Heart,
  MapPin,
  Camera,
  Calendar,
  Sparkles,
  Crown,
  Wind,
  Car,
  Users,
  Mountain,
  Sun,
  Coins,
  Flag,
  Building2,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "/images/locations/taluma-hero-1200.webp";

export default function About() {
  const { language } = useLanguage();
  const isMe = language === "me";

  useEffect(() => {
    document.title = isMe
      ? "O nama | Taluma Rent a Car Crna Gora"
      : "About Us | Taluma Rent a Car Montenegro";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        isMe
          ? "Taluma rent a car — lokalna porodična agencija sa preko 6 godina iskustva. Bez depozita, bez skrivenih troškova, isporuka na aerodrome i adrese po Crnoj Gori."
          : "Taluma rent a car — locally owned family-run agency with over 6 years of experience. No deposit, no hidden fees, delivery to airports and addresses across Montenegro."
      );
    }
    window.scrollTo(0, 0);
  }, [isMe]);

  const fleetCategories = [
    {
      Icon: Car,
      titleMe: "Ekonomska klasa",
      titleEn: "Economy Cars",
      descMe: "Pristupačna, pouzdana i ekonomična vozila za svakodnevnu vožnju i putovanja prilagođena budžetu. Idealna za grad i kraće relacije. Cijene od 25€/dan.",
      descEn: "Affordable, reliable and fuel-efficient vehicles ideal for everyday use and budget-friendly travel. Perfect for city driving and short trips, with prices starting from €25/day.",
      priceFrom: 25,
    },
    {
      Icon: Mountain,
      titleMe: "SUV i 4x4",
      titleEn: "SUVs & 4×4",
      descMe: "Prostrana, sigurna i udobna vozila za duža putovanja i različite uslove na putu. Idealna za porodice, grupe i obilazak primorja i planinskih predjela.",
      descEn: "Spacious, safe and comfortable vehicles designed for longer journeys and diverse road conditions. Ideal for families, groups and exploring both the coast and mountainous areas of Montenegro.",
      priceFrom: 60,
    },
    {
      Icon: Crown,
      titleMe: "Luksuzna vozila",
      titleEn: "Luxury Cars",
      descMe: "Vrhunska vozila koja nude maksimalnu udobnost, stil i performanse. Pogodna za poslovna putovanja, VIP transfere i posebne prilike. Modeli do 150€/dan.",
      descEn: "High-end vehicles offering maximum comfort, style and performance. Suitable for business trips, VIP transfers and special occasions, with models available up to €150/day.",
      priceFrom: 90,
    },
    {
      Icon: Wind,
      titleMe: "Kabrio i sportski",
      titleEn: "Cabrio & Sport Models",
      descMe: "Stilska i dinamična vozila za nezaboravnu vožnju duž primorja. Savršena za scenske rute, ljetna putovanja i uzbudljiviji način otkrivanja Crne Gore.",
      descEn: "Stylish and dynamic cars designed for an enjoyable driving experience along the coast. Perfect for scenic routes, summer trips and a more exciting way to explore Montenegro.",
      priceFrom: 49,
    },
    {
      Icon: Users,
      titleMe: "Vanovi (7–9 sjedišta)",
      titleEn: "Vans",
      descMe: "Praktična i prostrana vozila idealna za veće grupe, porodice ili putnike kojima treba dodatni prostor za prtljag. Udobno i pouzdano za kraće i duže relacije.",
      descEn: "Practical and spacious vehicles ideal for larger groups, families or travelers who need extra luggage space. Comfortable, reliable and suitable for both short and long-distance trips.",
      priceFrom: 49,
    },
  ];

  const mneFacts = [
    {
      Icon: Users,
      labelMe: "Stanovništvo",
      labelEn: "Population",
      valueMe: "~620.000",
      valueEn: "~620,000",
    },
    {
      Icon: Building2,
      labelMe: "Glavni grad",
      labelEn: "Capital",
      valueMe: "Podgorica",
      valueEn: "Podgorica",
    },
    {
      Icon: Crown,
      labelMe: "Istorijska prijestonica",
      labelEn: "Royal capital",
      valueMe: "Cetinje",
      valueEn: "Cetinje",
    },
    {
      Icon: Coins,
      labelMe: "Valuta",
      labelEn: "Currency",
      valueMe: "Euro (€)",
      valueEn: "Euro (€)",
    },
    {
      Icon: Flag,
      labelMe: "EU status",
      labelEn: "EU status",
      valueMe: "Kandidat za članstvo",
      valueEn: "Candidate country",
    },
    {
      Icon: MapPin,
      labelMe: "Obala (Jadran)",
      labelEn: "Adriatic coast",
      valueMe: "~300 km",
      valueEn: "~300 km",
    },
  ];

  const goodToKnowItems = isMe
    ? [
        "Mala zemlja sa velikom raznolikošću pejzaža — od Jadrana do visokih planina, sve je udaljeno samo nekoliko sati vožnje.",
        "Primorje je poznato po kristalno čistom moru, plažama i istorijskim gradovima kao što su Budva, Kotor i Tivat.",
        "Sjever nudi netaknutu prirodu, planine, nacionalne parkove i scenske rute za obilazak.",
        "Vožnja je jedan od najboljih načina da istražite zemlju jer su razdaljine kratke, a pejzaž se brzo mijenja.",
        "Ljeta na primorju su živahna i topla, dok su proljeće i jesen idealni za mirnija putovanja i istraživanje.",
        "Za bezbrižno putovanje, uvijek nosite vozačku dozvolu i uživajte u opuštenoj vožnji — Crna Gora se najbolje otkriva u vašem tempu.",
      ]
    : [
        "A small country with a big variety of landscapes — from the Adriatic coast to high mountains, everything is only a few hours away.",
        "The coast is known for crystal-clear sea, beaches and historic towns such as Budva, Kotor and Tivat.",
        "The northern part offers nature, mountains, national parks and scenic road trip routes.",
        "Driving is one of the best ways to explore the country because distances are short and views change quickly.",
        "Summers are lively and warm on the coast, while spring and autumn are ideal for quieter travel and exploring.",
        "For a smooth experience, always keep your driving licence with you and enjoy relaxed driving — Montenegro is best explored at your own pace.",
      ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt={isMe ? "Taluma rent a car" : "Taluma rent a car"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/75 to-forest-dark/55" />
        </div>

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {isMe ? "Nazad na početnu" : "Back to home"}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-white/90 text-sm font-medium">
                {isMe ? "Porodična agencija iz Podgorice" : "Family-run agency from Podgorica"}
              </span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
              {isMe ? "Taluma rent a car — o nama" : "Taluma rent a car — about us"}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              {isMe
                ? "Lokalna, porodična agencija sa preko 6 godina iskustva. Pouzdana, poštena i pristupačna usluga iznajmljivanja vozila u Crnoj Gori i šire."
                : "Locally owned, family-run car rental with over 6 years of experience. Reliable, honest and affordable service across Montenegro and beyond."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About + Mission */}
      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            <div>
              <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-2">
                {isMe ? "Ko smo" : "Who we are"}
              </span>
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-forest mb-4">
                {isMe ? "Porodični biznis sa 6+ godina iskustva" : "A family business with 6+ years of experience"}
              </h2>
              <div className="space-y-4 text-foreground/75 leading-relaxed">
                <p>
                  {isMe
                    ? "Mi smo lokalna, porodična agencija za iznajmljivanje vozila sa preko 6 godina iskustva. Naš fokus je jednostavan — pouzdana, poštena i pristupačna usluga širom Crne Gore i van nje."
                    : "We are a locally owned, family-run car rental company with over 6 years of experience in the industry. Our focus is simple — providing reliable, honest and affordable car rental services across Montenegro and beyond."}
                </p>
                <p>
                  {isMe
                    ? "Nudimo širok izbor vozila za svaku potrebu i budžet, uključujući ekonomska, SUV, luksuzna vozila i vanove. Cijene u našoj floti kreću od svega 25€ do 150€ po danu — birate vozilo koje savršeno odgovara vašem putovanju."
                    : "We offer a wide range of vehicles for every need and budget, including economy cars, SUVs, luxury vehicles and vans. Our fleet prices start from just €25 up to €150 per day, giving you the flexibility to choose the perfect car for your trip."}
                </p>
                <p>
                  {isMe
                    ? "Brza i jednostavna dostava bilo gdje u Crnoj Gori, uključujući glavne aerodrome — Podgorica, Tivat, Tirana i Dubrovnik. Vaše putovanje počinje glatko, bez stresa."
                    : "We provide fast and convenient delivery anywhere in Montenegro, including major airports such as Podgorica, Tivat, Tirana and Dubrovnik, ensuring a smooth and stress-free start to your journey."}
                </p>
                <p>
                  {isMe
                    ? "Bez obzira da li putujete poslovno ili turistički, naš posao je da vam iskustvo bude lako, udobno i pouzdano — uz lični pristup u koji možete imati povjerenja."
                    : "Whether you are traveling for business or leisure, we are here to make your experience easy, comfortable and reliable — with personal service you can trust."}
                </p>
              </div>
            </div>

            <div>
              <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-2">
                {isMe ? "Naša misija" : "Our mission"}
              </span>
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-forest mb-4">
                {isMe ? "Transparentno od početka do kraja" : "Transparent from start to finish"}
              </h2>
              <div className="relative">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-gold-dark rounded-full" />
                <div className="space-y-4 text-foreground/75 leading-relaxed pl-5">
                  <p>
                    {isMe
                      ? "Razumijemo šta klijenti zaista žele od rent-a-car usluge. To znači bez depozita, bez skrivenih troškova, bez iznenađenja — i potpuno transparentnu uslugu od početka do kraja."
                      : "We understand what customers truly want when renting a car. That means no deposit, no hidden costs, no surprises, and a completely transparent service from start to finish."}
                  </p>
                  <p>
                    {isMe
                      ? "Obezbjeđujemo redovno servisirana, kvalitetno održavana vozila i fleksibilnu dostavu gdje god vam treba — hotel, apartman, lokacija u gradu ili bilo koji aerodrom u regionu."
                      : "We provide fully serviced, well-maintained vehicles and flexible delivery wherever you need it — whether it's your hotel, apartment, city location, or any airport in the region."}
                  </p>
                  <p>
                    {isMe
                      ? "Cilj nam je da cijelo iskustvo bude jednostavno i bez stresa, uvijek prilagođeno potrebama klijenta. Radimo onako kako bismo i sami željeli da iznajmimo auto — pošteno, fleksibilno i sa poštovanjem prema svakom korisniku."
                      : "Our goal is to make the entire experience simple and stress-free, always adapting to our clients' needs. We operate the way we would want to rent a car ourselves — with honesty, flexibility, and respect for every customer."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet categories */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-2">
              {isMe ? "Naša flota" : "Our fleet"}
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-forest mb-3">
              {isMe ? "Vozilo za svaku priliku" : "A vehicle for every occasion"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isMe
                ? "Pažljivo održavan asortiman za svaki stil putovanja, budžet i potrebu — od kompakta za grad do luksuza za posebne prilike."
                : "A carefully maintained selection to suit every travel style, budget and need — from compacts for the city to luxury for special occasions."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {fleetCategories.map((c) => (
              <motion.div
                key={c.titleEn}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl border border-border/40 p-6 hover:shadow-lg hover:border-gold/40 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-dark text-white shadow-md shadow-gold/30 mb-4">
                  <c.Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-forest mb-2">
                  {isMe ? c.titleMe : c.titleEn}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  {isMe ? c.descMe : c.descEn}
                </p>
                <div className="text-sm text-gold-dark font-semibold">
                  {isMe ? "od " : "from "}
                  <span className="font-display font-bold text-base">€{c.priceFrom}</span>
                  {isMe ? "/dan" : "/day"}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center mt-10 max-w-3xl mx-auto">
            {isMe
              ? "Sva vozila su servisirana i pripremljena prije svakog iznajmljivanja. Dostupne su i automatik i manuelne verzije, sa fleksibilnom dostavom širom Crne Gore i regionalnih aerodroma."
              : "All vehicles are fully serviced and prepared before every rental. We offer both automatic and manual transmissions, with flexible delivery anywhere in Montenegro and nearby airports."}
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/#flota"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all hover:shadow-md"
            >
              {isMe ? "Pogledaj cijelu flotu" : "See the full fleet"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Long-term rental discount */}
      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="container">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-forest to-forest-dark rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold/15" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gold/10" />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold text-forest-dark mb-4">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <h2 className="font-display font-extrabold text-2xl lg:text-3xl mb-4">
                  {isMe ? "Popust na dugoročno iznajmljivanje" : "Discount on long-term rentals"}
                </h2>
                <div className="space-y-3 text-white/85 leading-relaxed">
                  <p>
                    {isMe
                      ? "Posebne cijene za duža iznajmljivanja — što duže iznajmite, bolja je dnevna cijena. Bilo da vam treba auto za nedjelju, više nedjelja ili cijeli mjesec, pripremićemo personalizovanu ponudu sa povoljnijim uslovima."
                      : "We offer special pricing for longer rentals, making your stay even more affordable. The longer you rent, the better the price you get. Whether you need a car for a week, several weeks or a full month, we can prepare a customized offer with a better daily rate and flexible conditions."}
                  </p>
                  <p>
                    {isMe
                      ? "Dugoročni klijenti dobijaju prioritetnu podršku, jednostavnije produženje i fleksibilnije dogovore za preuzimanje i vraćanje vozila bilo gdje u Crnoj Gori ili na obližnjim aerodromima."
                      : "Long-term customers also benefit from priority support, easier extensions and more flexible arrangements for pick-up and drop-off anywhere in Montenegro or nearby airports."}
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/38269919192?text=${encodeURIComponent(isMe ? "Zdravo, zanima me dugoročno iznajmljivanje vozila. Molim za ponudu." : "Hello, I'm interested in long-term car rental. Could you send me an offer?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-6 py-4 rounded-xl shadow-lg whitespace-nowrap"
              >
                {isMe ? "Pošalji upit" : "Send inquiry"}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Real photos trust block */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[auto_1fr] gap-8 items-center bg-white rounded-2xl border border-border/40 p-8 lg:p-10 shadow-sm">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-gold-dark text-white shadow-md shadow-gold/30 mx-auto md:mx-0">
              <Camera className="w-10 h-10" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-forest mb-3 text-center md:text-left">
                {isMe ? "Prave fotografije — što vidiš, to dobiješ" : "Real photos — what you see is what you get"}
              </h2>
              <p className="text-foreground/75 leading-relaxed mb-3">
                {isMe
                  ? "Sve fotografije na sajtu su realne, žive slike naše stvarne flote. Ne koristimo stock fotografije ni zavaravajuće slike. Vozilo koje izaberete je tačno ono koje ćete dobiti."
                  : "All vehicles shown on our website are real, live photos of our actual fleet. We do not use stock images or misleading pictures. The car you choose is exactly the car you will receive."}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isMe
                  ? "Svako vozilo je fotografisano u realnim uslovima da možete jasno vidjeti njegovo stanje, opremu i izgled prije rezervacije. To znači punu transparentnost i sigurnost da nema iznenađenja prilikom preuzimanja."
                  : "Every vehicle is photographed in real conditions so you can clearly see its true condition, equipment and appearance before booking. This ensures full transparency and gives you confidence that there are no surprises at pick-up."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Montenegro: good to know + quick facts */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-warm-white to-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-2">
              {isMe ? "Dobro je znati" : "Good to know"}
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-forest mb-3">
              {isMe ? "O Crnoj Gori" : "About Montenegro"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isMe
                ? "Mala zemlja, ogromna raznolikost — od Jadranske obale do visokih planina, sve je nadohvat ruke."
                : "A small country with a big variety — from the Adriatic coast to high mountains, everything is within reach."}
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Bullet narrative */}
            <div className="space-y-4">
              {goodToKnowItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-gold/15 text-gold-dark font-display font-bold text-sm inline-flex items-center justify-center">
                    {i + 1}
                  </div>
                  <p className="text-sm text-foreground/75 leading-relaxed pt-0.5">{item}</p>
                </div>
              ))}
            </div>

            {/* Quick facts grid */}
            <div>
              <h3 className="font-display font-bold text-lg text-forest mb-4">
                {isMe ? "Brze činjenice" : "Quick facts"}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {mneFacts.map((f) => (
                  <div
                    key={f.labelEn}
                    className="bg-white rounded-xl border border-border/40 p-4 hover:shadow-sm transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-secondary to-cream-dark text-forest mb-2">
                      <f.Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      {isMe ? f.labelMe : f.labelEn}
                    </div>
                    <div className="font-display font-bold text-base text-forest leading-tight">
                      {isMe ? f.valueMe : f.valueEn}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/80 mt-4 leading-relaxed">
                {isMe
                  ? "Najveća prednost Crne Gore je veličina — od mora do planina stignete za nekoliko sati. Idealno za road-trip."
                  : "One of Montenegro's biggest advantages is its size — drive from coast to mountains in just a few hours. Perfect for a road trip."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
