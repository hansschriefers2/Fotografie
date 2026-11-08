// Portfolio-Bilder. Neue Fotos nach src/assets/fotos/ legen und hier eintragen.
// Astro optimiert sie beim Build automatisch (WebP, passende Größen).
import type { ImageMetadata } from "astro";
import hochzeit from "../assets/fotos/hochzeit.jpg";
import portrait from "../assets/fotos/portrait.jpg";
import landschaft from "../assets/fotos/landschaft.jpg";
import business from "../assets/fotos/business.jpg";
import event from "../assets/fotos/event.jpg";
import produkt from "../assets/fotos/produkt.jpg";

export interface Foto {
  bild: ImageMetadata;
  alt: string;
  titel?: string;
}

// Platzhalter – durch eigene Familienfotos ersetzen
export const fotos: Foto[] = [
  { bild: landschaft, alt: "Familie beim Spaziergang im Abendlicht", titel: "Outdoor" },
  { bild: portrait, alt: "Porträt eines Kindes", titel: "Kinder" },
  { bild: hochzeit, alt: "Eltern mit Baby", titel: "Neugeborene" },
  { bild: event, alt: "Geschwister lachen zusammen", titel: "Geschwister" },
  { bild: business, alt: "Familie zu Hause auf dem Sofa", titel: "Zuhause" },
  { bild: produkt, alt: "Detailaufnahme kleiner Hände", titel: "Details" },
];

export const heroBild = landschaft;
