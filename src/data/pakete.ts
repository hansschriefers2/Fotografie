// Deine Shooting-Pakete. Preise und Inhalte frei anpassen.
export interface Paket {
  name: string;
  preis: string;
  dauer: string;
  leistungen: string[];
  hervorheben?: boolean;
}

export const pakete: Paket[] = [
  {
    name: "Mini-Shooting",
    preis: "ab 149 €",
    dauer: "30 Minuten",
    leistungen: ["1 Ort draußen", "15 bearbeitete Bilder", "Online-Galerie zum Download"],
  },
  {
    name: "Familien-Shooting",
    preis: "ab 289 €",
    dauer: "60–90 Minuten",
    leistungen: [
      "Draußen oder bei euch zu Hause",
      "40 bearbeitete Bilder",
      "Online-Galerie zum Teilen mit der Familie",
      "Print-Shop für Abzüge & Fotobücher",
    ],
    hervorheben: true,
  },
  {
    name: "Neugeborenen-Shooting",
    preis: "ab 349 €",
    dauer: "2–3 Stunden",
    leistungen: ["Bei euch zu Hause", "30 bearbeitete Bilder", "Ganz in Ruhe, mit Pausen fürs Baby"],
  },
];

export const faq = [
  {
    frage: "Was ziehen wir an?",
    antwort: "Bequeme Kleidung in ruhigen, aufeinander abgestimmten Farben. Ich schicke euch vorab einen kleinen Styling-Guide.",
  },
  {
    frage: "Was ist, wenn das Wetter schlecht ist?",
    antwort: "Dann verschieben wir kostenlos auf einen neuen Termin.",
  },
  {
    frage: "Wann bekommen wir die Bilder?",
    antwort: "Innerhalb von etwa zwei Wochen in eurer privaten Online-Galerie.",
  },
];
