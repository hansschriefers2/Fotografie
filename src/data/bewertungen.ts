// Kundenstimmen für den Slider auf der Startseite.
//
// WICHTIG: Hier nur ECHTE Rückmeldungen eintragen – wörtlich oder sinngemäß gekürzt, und nur mit
// Einverständnis der Familie (z. B. per E-Mail bestätigen lassen). Erfundene Bewertungen sind
// irreführend und nach § 5b UWG verboten.
//
// Solange „text“ leer ist, erscheint die Bewertung NICHT auf der Website.
// Lokal (npm run dev) werden leere Einträge als Platzhalter angezeigt, damit du das Design siehst.

import type { ImageMetadata } from "astro";
import hailer from "../assets/kunden/hailer.jpg";
import janine from "../assets/kunden/janine.jpg";
import annaMarius from "../assets/kunden/anna-marius.jpg";

export interface Bewertung {
  /** Der Text der Kundin / des Kunden */
  text: string;
  /** z. B. „Familie M.“ oder „Lisa & Tom“ – gern abgekürzt */
  name: string;
  /** Kurze Einordnung, erscheint unter dem Namen */
  anlass: string;
  /** Optional: kleines rundes Foto der Familie (nur mit deren Einverständnis) */
  foto?: ImageMetadata;
}

export const bewertungen: Bewertung[] = [
  {
    // Mit der Familie abgesprochen (November 2026)
    text: "Wir haben uns echt kurzfristig gemeldet und waren überrascht, wie super das mit dem Termin ging. Unser Sohn hatte am Anfang gar keine Lust, also haben wir einfach erst mal Pause gemacht. Man merkt direkt, dass sie mit den Kleinen super gut umgehen kann. Die Bilder hängen inzwischen bei uns im Flur und jeder Besuch bleibt davor stehen. Wir kommen auf jeden Fall wieder!!",
    name: "Anna und Marius mit Baby",
    anlass: "Familienshooting mit Baby (4 Monate)",
    foto: annaMarius,
  },
  {
    // Mit der Familie abgesprochen (November 2026)
    text: "Ich bin sonst diejenige, die hinter der Kamera steht. Auf diesen Bildern bin ich endlich mal mit drauf, mit meinen zwei auf dem Schoß, und es fühlt sich kein bisschen gestellt an.",
    name: "Marika und Lucca mit Kindern",
    anlass: "Familienshooting mit Kindern (4 und 6 Jahre)",
    foto: hailer,
  },
  {
    // Mit der Familie abgesprochen (November 2026)
    text: "Ich war mir erst unsicher, ob ich so kurz nach der Geburt überhaupt jemanden bei uns zu Hause haben möchte. Im Nachhinein bin ich so froh, dass wir es gemacht haben. Nicole war total entspannt, hat sich ganz nach unserer Kleinen gerichtet und uns nie das Gefühl gegeben, dass irgendwas perfekt sein muss. Ich hatte kaum geschlafen und trotzdem sind die Fotos so schön geworden. Wenn ich sie heute anschaue, bin ich sofort wieder in diesen ersten Tagen. Danke, Nicole!",
    name: "Janine und Fabian mit Baby und Kind",
    anlass: "Newborn Homestory (Baby 2 Wochen alt)",
    foto: janine,
  },
  {
    // Mit dem Paar abgesprochen (November 2026)
    text: "Wir sind beide nicht so die Fototypen, aber das Fotoshooting war total entspannt. Wir haben viel gelacht und uns keine Sekunde gestellt gefühlt. Endlich haben wir mal richtig schöne Fotos von uns zwei. Wir können so ein Shooting jedem empfehlen!",
    name: "Tim und Tamara",
    anlass: "Paarshooting in Koblenz",
  },
];
