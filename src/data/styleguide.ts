// Allgemeine Styling-Inhalte – erscheinen in jedem Shooting-Guide (/guide/…/, siehe guides.ts).

/** Farbpaletten zum Kombinieren – Farbwerte als Hex, Name wird unter dem Farbfeld angezeigt */
export const paletten = [
  {
    name: "Hell & sanft",
    text: "Luftig und zart, wunderschön für Newborn- und Babybauchbilder zu Hause.",
    farben: [
      { name: "Wollweiß", hex: "#f6f1e9" },
      { name: "Creme", hex: "#eadfce" },
      { name: "Puder", hex: "#e3c4bb" },
      { name: "Hellgrau", hex: "#cfc9c2" },
    ],
  },
  {
    name: "Warm & erdig",
    text: "Erdig und zeitlos. Passt zu Feldwegen, Wiesen und warmem Abendlicht.",
    farben: [
      { name: "Sand", hex: "#d8c3a5" },
      { name: "Camel", hex: "#b88a5a" },
      { name: "Rost", hex: "#a5583a" },
      { name: "Schoko", hex: "#5e4033" },
    ],
  },
  {
    name: "Natur & grün",
    text: "Ruhig und frisch. Harmoniert mit Wald, Garten und Frühlingswiesen.",
    farben: [
      { name: "Creme", hex: "#eee6d8" },
      { name: "Salbei", hex: "#a9b39a" },
      { name: "Oliv", hex: "#76785a" },
      { name: "Taupe", hex: "#9b8b7e" },
    ],
  },
  {
    name: "Herbst & Winter",
    text: "Satte, warme Töne, herrlich zu buntem Laub oder in Strick und Wolle.",
    farben: [
      { name: "Senf", hex: "#c99a3e" },
      { name: "Bordeaux", hex: "#7a2f35" },
      { name: "Altrosa", hex: "#c48e88" },
      { name: "Haselnuss", hex: "#8a6a50" },
    ],
  },
];

/** Grundregeln */
export const regeln = [
  {
    titel: "Zwei, drei Farben",
    text: "Am harmonischsten wirken Bilder, wenn sich zwei, drei Farben einer Palette auf alle verteilen. Partnerlook ist dafür gar nicht nötig, denn wiederkehrende Farben verbinden euch ganz natürlich.",
  },
  {
    titel: "Bei einem Outfit anfangen",
    text: "Oft ist es am einfachsten, mit einem Lieblingsteil zu starten, zum Beispiel einem Kleid oder Pulli, und den Rest darauf abzustimmen. So wirkt alles stimmig, ohne gewollt auszusehen.",
  },
  {
    titel: "Struktur statt Muster",
    text: "Strick, Leinen, Wolle, Cord oder Musselin sehen auf Fotos wunderschön aus. Ein zartes Muster passt gut dazu, am besten bei nur einer Person.",
  },
  {
    titel: "Lagen & Bewegung",
    text: "Eine Strickjacke zum Ausziehen oder ein Kleid, das beim Drehen schwingt, bringt Leben in die Bilder. Fließende Stoffe sehen besonders leicht aus.",
  },
  {
    titel: "Bequem ist Trumpf",
    text: "Wer sich wohlfühlt, strahlt. Egal ob groß oder klein. Das bequeme Lieblingsteil ist meist die bessere Wahl als etwas Neues, das zwickt oder kratzt.",
  },
  {
    titel: "Passend zur Umgebung",
    text: "Draußen sehen Naturtöne schön aus, zu Hause helle, ruhige Farben, die zur Einrichtung passen. Und an kühlen Tagen lohnt sich eine warme Schicht, denn wer friert, lächelt selten.",
  },
];

/** Was auf Fotos eher ablenkt */
export const lieberNicht = [
  "Große Logos, Schriftzüge und Comicfiguren",
  "Neonfarben und knalliges Rot oder Blau",
  "Kleine Karos und feine Streifen (sie flimmern auf Fotos)",
  "Komplett Schwarz oder reines Weiß für alle",
  "Ganz neue Schuhe, die noch drücken",
  "Enge Bündchen und Gummizüge kurz vor dem Shooting (Abdrücke)",
];
