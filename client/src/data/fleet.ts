/**
 * Taluma rent a car — fleet catalog.
 *
 * Photos live in client/public/images/fleet/<slug>/<1..imageCount>.jpg
 * plus a 1:1 thumb.jpg used as the card thumbnail.
 */

export type FleetCategory = "suv" | "luxury" | "cabrio" | "sedan" | "compact" | "family";

export interface FleetVehicle {
  slug: string;
  name: string;
  categories: FleetCategory[];
  transmission: "automatic" | "manual";
  seats: number;
  priceFrom: number; // EUR / day
  imageCount: number;
}

export const fleet: FleetVehicle[] = [
  { slug: "chevrolet-aveo",        name: "Chevrolet Aveo",             categories: ["sedan", "compact"],  transmission: "manual",    seats: 5, priceFrom: 29.99,  imageCount: 5 },
  { slug: "polo-crni",             name: "VW Polo — crni",             categories: ["compact"],           transmission: "automatic", seats: 5, priceFrom: 34.99,  imageCount: 5 },
  { slug: "polo-sivi",             name: "VW Polo — sivi",             categories: ["compact"],           transmission: "automatic", seats: 5, priceFrom: 34.99,  imageCount: 4 },
  { slug: "golf-6-bijeli-karavan", name: "VW Golf 6 — bijeli karavan", categories: ["compact"],           transmission: "automatic", seats: 5, priceFrom: 39.99,  imageCount: 4 },
  { slug: "golf-6-plavi",          name: "VW Golf 6 — plavi",          categories: ["compact"],           transmission: "automatic", seats: 5, priceFrom: 39.99,  imageCount: 6 },
  { slug: "golf-6-sivi",           name: "VW Golf 6 — sivi",           categories: ["compact"],           transmission: "automatic", seats: 5, priceFrom: 39.99,  imageCount: 5 },
  { slug: "audi-a4",               name: "Audi A4",                    categories: ["sedan"],             transmission: "automatic", seats: 5, priceFrom: 49.99,  imageCount: 3 },
  { slug: "audi-a3-cabrio",        name: "Audi A3 Cabrio",             categories: ["cabrio", "compact"], transmission: "manual",    seats: 4, priceFrom: 49.99,  imageCount: 5 },
  { slug: "golf-7",                name: "VW Golf 7",                  categories: ["compact"],           transmission: "automatic", seats: 5, priceFrom: 49.99,  imageCount: 4 },
  { slug: "passat-7",              name: "VW Passat 7",                categories: ["sedan"],             transmission: "automatic", seats: 5, priceFrom: 49.99,  imageCount: 6 },
  { slug: "passat-cc",             name: "VW Passat CC",               categories: ["sedan", "luxury"],   transmission: "automatic", seats: 5, priceFrom: 49.99,  imageCount: 5 },
  { slug: "touran",                name: "VW Touran (7 sjedišta)",     categories: ["family"],            transmission: "automatic", seats: 7, priceFrom: 49.99,  imageCount: 8 },
  { slug: "bmw-x1",                name: "BMW X1",                     categories: ["suv"],               transmission: "automatic", seats: 5, priceFrom: 59.99,  imageCount: 6 },
  { slug: "mercedes-e-limuzina",   name: "Mercedes E klasa Limuzina",  categories: ["luxury", "sedan"],   transmission: "automatic", seats: 5, priceFrom: 59.99,  imageCount: 5 },
  { slug: "mercedes-e-cabrio",     name: "Mercedes E klasa Cabrio",    categories: ["cabrio", "luxury"],  transmission: "automatic", seats: 4, priceFrom: 69.99,  imageCount: 5 },
  { slug: "bmw-x6-bijeli",         name: "BMW X6 — bijeli",            categories: ["suv", "luxury"],     transmission: "automatic", seats: 5, priceFrom: 79.99,  imageCount: 5 },
  { slug: "bmw-x6-crni",           name: "BMW X6 — crni",              categories: ["suv", "luxury"],     transmission: "automatic", seats: 5, priceFrom: 79.99,  imageCount: 6 },
  { slug: "audi-a8",               name: "Audi A8",                    categories: ["luxury", "sedan"],   transmission: "automatic", seats: 5, priceFrom: 89.99,  imageCount: 6 },
  { slug: "porsche-cayenne",       name: "Porsche Cayenne",            categories: ["suv", "luxury"],     transmission: "automatic", seats: 5, priceFrom: 99.99,  imageCount: 4 },
  { slug: "mercedes-vito",         name: "Mercedes Vito (9 sjedišta)", categories: ["family"],            transmission: "automatic", seats: 9, priceFrom: 99.99,  imageCount: 8 },
  { slug: "porsche-panamera",      name: "Porsche Panamera",           categories: ["luxury", "sedan"],   transmission: "automatic", seats: 4, priceFrom: 149.99, imageCount: 8 },
];

export function fleetImages(v: FleetVehicle): string[] {
  if (v.imageCount === 0) return [];
  return Array.from({ length: v.imageCount }, (_, i) => `/images/fleet/${v.slug}/${i + 1}.webp`);
}
