// Portfolio-Aktion: Rabatt für Familien, die der Veröffentlichung ihrer Bilder zustimmen.
// Seite: /aktion/ · Hinweis auf der Startseite · Facebook-Grafik verweist hierher.
// Zum Beenden der Aktion: aktiv auf false setzen (Seite leitet dann zur Preisseite, Startseiten-Hinweis verschwindet).
import { shootings } from "./preise";

export const aktion = {
  aktiv: true,
  rabattProzent: 30,
  zeitraum: "Herbst & Winter",
  /** Bewerbungsschluss (lang und kurz) – leer lassen, wenn es keine feste Frist gibt */
  bewerbungBis: "18. Dezember 2026",
  bewerbungBisKurz: "18.12.",
};

/** Aktionspreise je Shooting (auf ganze Euro gerundet) */
export const aktionsPreise = shootings.map((s) => ({
  name: s.name,
  dauer: s.dauer,
  preis: s.preis,
  aktionspreis: Math.round(s.preis * (1 - aktion.rabattProzent / 100)),
}));
