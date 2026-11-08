// MOCK-Preise – bitte durch eure echten Preise ersetzen.
export type Package = {
  name: string;
  price: string;
  duration: string;
  highlight?: boolean;
  features: string[];
};

export const packages: Package[] = [
  {
    name: "Babybauch",
    price: "249 €",
    duration: "ca. 1 Stunde",
    features: [
      "Shooting bei euch zu Hause oder draußen",
      "15 bearbeitete Bilder in Farbe & Schwarz-Weiß",
      "Private Online-Galerie",
      "Partner & Geschwister herzlich willkommen",
    ],
  },
  {
    name: "Newborn",
    price: "349 €",
    duration: "ca. 2–3 Stunden",
    highlight: true,
    features: [
      "Ideal in den ersten 14 Lebenstagen",
      "Entspannt bei euch zu Hause",
      "25 bearbeitete Bilder",
      "Eltern- & Geschwisterbilder inklusive",
      "Private Online-Galerie",
    ],
  },
  {
    name: "Familie",
    price: "299 €",
    duration: "ca. 1,5 Stunden",
    features: [
      "Draußen in der Natur oder bei euch",
      "20 bearbeitete Bilder",
      "Bis zu 6 Personen",
      "Private Online-Galerie",
    ],
  },
];

export const bundle = {
  name: "Babys erstes Jahr",
  price: "899 €",
  text: "Babybauch, Newborn und ein Familienshooting rund um den ersten Geburtstag – eure Geschichte vom Warten bis zu den ersten Schritten.",
};

export const extras = [
  { name: "Weiteres bearbeitetes Bild", price: "25 €" },
  { name: "Alle Bilder der Auswahl", price: "auf Anfrage" },
  { name: "Fine-Art-Fotobuch (20 × 20 cm)", price: "ab 149 €" },
  { name: "Gutschein – das perfekte Geschenk", price: "frei wählbar" },
  { name: "Anfahrt bis 25 km", price: "inklusive" },
];

export const faq = [
  {
    q: "Wann ist der beste Zeitpunkt für ein Newborn-Shooting?",
    a: "In den ersten 14 Lebenstagen schlafen Babys besonders tief und lassen sich gut in kuschelige Positionen legen. Meldet euch am besten schon in der Schwangerschaft, ich plane einen flexiblen Termin rund um den Geburtstermin ein.",
  },
  {
    q: "Was sollen wir anziehen?",
    a: "Schlichte, ruhige Farben in Naturtönen wirken am zeitlosesten. Vor dem Shooting bekommt ihr von mir einen kleinen Styling-Guide.",
  },
  {
    q: "Was passiert, wenn unser Kind an dem Tag krank ist?",
    a: "Kein Problem – wir verschieben den Termin einfach kostenfrei. Gesundheit geht immer vor.",
  },
  {
    q: "Wie bekommen wir unsere Bilder?",
    a: "Etwa zwei Wochen nach dem Shooting erhaltet ihr eine passwortgeschützte Online-Galerie, aus der ihr eure Bilder in voller Auflösung herunterladen könnt.",
  },
];
