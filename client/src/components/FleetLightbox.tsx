/*
 * Lightbox carousel for fleet vehicle photos. Keyboard + arrow + dot nav.
 */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { FleetVehicle } from "@/data/fleet";
import { fleetImages } from "@/data/fleet";

const WHATSAPP_NUMBER = "38269919192";

interface Props {
  vehicle: FleetVehicle | null;
  onClose: () => void;
}

export default function FleetLightbox({ vehicle, onClose }: Props) {
  const { t, language } = useLanguage();
  const [idx, setIdx] = useState(0);

  const images = vehicle ? fleetImages(vehicle) : [];
  const total = images.length;

  useEffect(() => {
    setIdx(0);
  }, [vehicle]);

  useEffect(() => {
    if (!vehicle) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + total) % total);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % total);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [vehicle, total, onClose]);

  if (!vehicle || total === 0) return null;

  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    language === "me"
      ? `Zdravo, zanima me iznajmljivanje ${vehicle.name} iz Taluma flote.`
      : `Hello, I'm interested in renting ${vehicle.name} from the Taluma fleet.`
  )}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex flex-col"
        onClick={onClose}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between gap-3 px-4 py-3 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="font-display font-bold text-lg leading-tight">
              {vehicle.name}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold px-3 py-2 rounded-lg"
            >
              <MessageCircle className="w-4 h-4" />
              {t("fleet.reserve")}
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image area */}
        <div
          className="flex-1 relative flex items-center justify-center px-4 pb-4 select-none"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[idx]}
              src={images[idx]}
              alt={`${vehicle.name} — ${idx + 1}/${total}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="max-h-full max-w-full object-contain rounded-xl"
              draggable={false}
            />
          </AnimatePresence>

          {total > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {total > 1 && (
          <div
            className="flex items-center justify-center gap-1.5 pb-5"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
