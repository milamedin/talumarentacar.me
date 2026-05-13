/*
 * Compact 3-vehicle showcase used on city / sub-pages.
 * Picks a stable random sample seeded by the page slug, then links to the
 * full fleet section on the home page.
 */
import { useState } from "react";
import { Link } from "wouter";
import { Car, ArrowRight, Cog, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { fleet, type FleetVehicle } from "@/data/fleet";
import FleetLightbox from "@/components/FleetLightbox";

function hashSeed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function pickThree(seed: string): FleetVehicle[] {
  const list = [...fleet];
  const out: FleetVehicle[] = [];
  let s = hashSeed(seed) || 1;
  for (let i = 0; i < 3 && list.length; i++) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const idx = s % list.length;
    out.push(list.splice(idx, 1)[0]);
  }
  return out;
}

export default function FleetTeaser({ seed = "default" }: { seed?: string }) {
  const { language, t } = useLanguage();
  const sample = pickThree(seed);
  const [lightbox, setLightbox] = useState<FleetVehicle | null>(null);

  const transmissionLabel = (tx: "automatic" | "manual") =>
    tx === "automatic"
      ? language === "me" ? "Automatik" : language === "de" ? "Automatik" : language === "ru" ? "Автомат" : language === "fr" ? "Automatique" : language === "pl" ? "Automat" : language === "tr" ? "Otomatik" : "Automatic"
      : language === "me" ? "Manuelni" : language === "de" ? "Schaltgetriebe" : language === "ru" ? "Механика" : language === "fr" ? "Manuelle" : language === "pl" ? "Manualna" : language === "tr" ? "Manuel" : "Manual";

  const seatsLabel = language === "me" ? "sjedišta" : language === "de" ? "Sitze" : language === "ru" ? "мест" : language === "fr" ? "places" : language === "pl" ? "miejsc" : language === "tr" ? "koltuk" : "seats";

  const seeAll = language === "me" ? "Pogledaj cijelu flotu" : language === "de" ? "Gesamte Flotte ansehen" : language === "ru" ? "Смотреть весь автопарк" : language === "fr" ? "Voir toute la flotte" : language === "pl" ? "Zobacz całą flotę" : language === "tr" ? "Tüm filoyu gör" : "See the full fleet";

  return (
    <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50">
      <h2 className="font-display font-bold text-xl text-forest mb-1 flex items-center gap-2">
        <Car className="w-5 h-5" />
        {t("fleet.kicker")}
      </h2>
      <p className="text-sm text-muted-foreground mb-5">
        {t("fleet.subtitle")}
      </p>

      <div className="grid sm:grid-cols-3 gap-3">
        {sample.map((v) => {
          const hasPhotos = v.imageCount > 0;
          return (
            <button
              key={v.slug}
              type="button"
              onClick={() => hasPhotos && setLightbox(v)}
              disabled={!hasPhotos}
              className={`text-left rounded-xl border border-border bg-cream overflow-hidden transition-shadow ${
                hasPhotos ? "cursor-zoom-in hover:shadow-md" : "cursor-default"
              }`}
            >
              <div className="aspect-square bg-gradient-to-br from-cream-dark to-cream flex items-center justify-center overflow-hidden">
                {hasPhotos ? (
                  <img
                    src={`/images/fleet/${v.slug}/thumb.webp`}
                    alt={v.name}
                    width={600}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Car className="w-12 h-12 text-muted-foreground/40" />
                )}
              </div>
              <div className="p-3">
                <div className="font-display font-semibold text-forest text-sm leading-tight truncate">
                  {v.name}
                </div>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-0.5">
                    <Cog className="w-3 h-3" />
                    {transmissionLabel(v.transmission)}
                  </span>
                  <span className="inline-flex items-center gap-0.5">
                    <Users className="w-3 h-3" />
                    {v.seats}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <FleetLightbox vehicle={lightbox} onClose={() => setLightbox(null)} />

      <div className="mt-5 flex justify-center">
        <Link
          href="/#flota"
          className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all hover:shadow-md"
        >
          {seeAll}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
