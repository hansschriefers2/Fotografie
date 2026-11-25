// Gutscheine: Seite /gutschein/, Druckvorlage /gutschein/vorlage/ (→ PDF), Hinweise auf Startseite & Aktion.
import { shootings } from "./preise";

export const gutschein = {
  /** Gültigkeit in Jahren (passt zu den AGB) */
  gueltigJahre: 3,
  /** Weihnachts-Hinweise anzeigen (Startseite, Gutscheinseite) – nach Weihnachten auf false setzen */
  weihnachten: true,
  /** Bis wann bestellt, damit der Gutschein rechtzeitig da ist */
  weihnachtenBis: "20. Dezember",
  /** Beispielbeträge für Wertgutscheine */
  betraege: [100, 150, 250],
};

/** Shooting-Gutscheine = die normalen Pakete */
export const gutscheinShootings = shootings.map((s) => ({ name: s.name, preis: s.preis, dauer: s.dauer }));
