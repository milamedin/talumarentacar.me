/*
 * Taluma fleet showcase — filterable grid of vehicles. Click a card to open
 * the FleetLightbox carousel of all photos for that vehicle.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Car, Users, Cog, MessageCircle, Info, Plane, AlertTriangle, CheckCircle2, ImageIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { fleet, type FleetCategory, type FleetVehicle } from "@/data/fleet";
import FleetLightbox from "@/components/FleetLightbox";

const WHATSAPP_NUMBER = "38269919192";

type Filter = "all" | FleetCategory;

const filterOrder: Filter[] = ["all", "economy", "sedan", "suv", "cabrio", "van"];

export default function FleetSection() {
  const { language, t } = useLanguage();
  const [active, setActive] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<FleetVehicle | null>(null);

  const filtered = active === "all" ? fleet : fleet.filter((v) => v.categories.includes(active));

  const transmissionLabel = (tx: "automatic" | "manual") =>
    tx === "automatic"
      ? language === "me" ? "Automatik" : language === "de" ? "Automatik" : language === "ru" ? "Автомат" : language === "fr" ? "Automatique" : language === "pl" ? "Automat" : language === "tr" ? "Otomatik" : "Automatic"
      : language === "me" ? "Manuelni" : language === "de" ? "Schaltgetriebe" : language === "ru" ? "Механика" : language === "fr" ? "Manuelle" : language === "pl" ? "Manualna" : language === "tr" ? "Manuel" : "Manual";

  const seatsLabel = language === "me" ? "sjedišta" : language === "de" ? "Sitze" : language === "ru" ? "мест" : language === "fr" ? "places" : language === "pl" ? "miejsc" : language === "tr" ? "koltuk" : "seats";

  return (
    <section id="flota" className="py-16 lg:py-24 bg-warm-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <span className="inline-block text-gold font-semibold text-sm tracking-wide uppercase mb-2">
            {t("fleet.kicker")}
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-forest mb-3">
            {t("fleet.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("fleet.subtitle")}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="-mx-4 sm:mx-0 mb-8 lg:mb-10 relative">
          <div
            className="flex gap-2 overflow-x-auto px-4 sm:px-0 pb-2 sm:justify-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:[mask-image:none] [mask-image:linear-gradient(to_right,transparent_0,black_24px,black_calc(100%-24px),transparent_100%)]"
          >
            {filterOrder.map((key) => {
              const isActive = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-forest text-white shadow-md"
                      : "bg-card text-foreground/70 border border-border hover:border-gold hover:text-forest"
                  }`}
                >
                  {t(`fleet.cat.${key}`)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((v, i) => {
            const isLuxury = v.priceFrom >= 70;
            const hasPhotos = v.imageCount > 0;
            const message = encodeURIComponent(
              `Zdravo, zanima me iznajmljivanje vozila ${v.name} iz Taluma flote.`
            );
            const galleryLabel = language === "me" ? "Galerija" : language === "de" ? "Galerie" : language === "ru" ? "Галерея" : language === "fr" ? "Galerie" : language === "pl" ? "Galeria" : language === "tr" ? "Galeri" : "Gallery";
            return (
              <motion.div
                key={v.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-gold/40 transition-all"
              >
                <button
                  type="button"
                  onClick={() => hasPhotos && setLightbox(v)}
                  disabled={!hasPhotos}
                  aria-label={hasPhotos ? `${galleryLabel} — ${v.name}` : v.name}
                  className={`relative w-full aspect-square bg-gradient-to-br from-cream-dark to-cream flex items-center justify-center overflow-hidden ${
                    hasPhotos ? "cursor-zoom-in" : "cursor-default"
                  }`}
                >
                  {isLuxury && (
                    <span className="absolute top-3 left-3 z-10 bg-forest text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-full">
                      {t("fleet.badge.luxury")}
                    </span>
                  )}
                  {hasPhotos && v.imageCount > 1 && (
                    <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 bg-black/55 text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full">
                      <ImageIcon className="w-3 h-3" /> {v.imageCount}
                    </span>
                  )}
                  {hasPhotos ? (
                    <img
                      src={`/images/fleet/${v.slug}/thumb.webp`}
                      alt={v.name}
                      width={600}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground/50">
                      <Car className="w-14 h-14" />
                      <span className="text-[11px] uppercase tracking-wider">
                        {language === "me" ? "Foto uskoro" : language === "de" ? "Foto bald" : language === "ru" ? "Фото скоро" : language === "fr" ? "Photo bientôt" : language === "pl" ? "Wkrótce zdjęcie" : language === "tr" ? "Foto yakında" : "Photo soon"}
                      </span>
                    </div>
                  )}
                </button>

                <div className="p-4">
                  <h3 className="font-display font-bold text-lg text-forest leading-tight">
                    {v.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Cog className="w-3.5 h-3.5" />
                      {transmissionLabel(v.transmission)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {v.seats} {seatsLabel}
                    </span>
                  </div>
                  <div className="mt-4">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp ${v.name}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all hover:shadow-md active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t("fleet.reserve")}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <FleetLightbox vehicle={lightbox} onClose={() => setLightbox(null)} />

        {/* Disclaimers / inclusions */}
        <div className="mt-12 lg:mt-16 rounded-3xl bg-gradient-to-br from-secondary via-secondary/70 to-secondary p-6 lg:p-10 border border-border/40">
          <div className="max-w-5xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Info, key: "fleet.disclaim.deposit", titleKey: "fleet.disclaim.deposit.title" },
              { Icon: Plane, key: "fleet.disclaim.delivery", titleKey: "fleet.disclaim.delivery.title" },
              { Icon: AlertTriangle, key: "fleet.disclaim.cross_border", titleKey: "fleet.disclaim.cross_border.title" },
              { Icon: CheckCircle2, key: "fleet.disclaim.discount", titleKey: "fleet.disclaim.discount.title" },
            ].map(({ Icon, key, titleKey }) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 p-5 transition-all"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-gold to-gold-dark text-white shadow-md shadow-gold/30 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-forest mb-1.5 leading-tight">
                  {t(titleKey)}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {t(key)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground/70 text-center mt-8 max-w-2xl mx-auto">
          {t("fleet.priceNote")}
        </p>
      </div>
    </section>
  );
}
