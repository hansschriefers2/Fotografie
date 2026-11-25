// Preise & Pakete – Grundlage für den Preisguide (/preisguide/, nicht verlinkt), die Preisseite (/preise/)
// und die Preisvorschau auf der Startseite.
// Preise als Zahl (in Euro) eintragen, die Anzeige („349 €“) und die Ersparnis der Kombipakete
// werden automatisch berechnet.
import type { Photo } from "./fotos";
import { photos } from "./fotos";
import { orteKurz } from "../config";

export const euro = (n: number) => `${n.toLocaleString("de-DE")} €`;

/** Anzahl der bearbeiteten Fotos, die in jedem Shooting enthalten sind */
export const fotosInklusive = 12;
/** So viele Fotos zeige ich mindestens in der Online-Galerie (meist sind es mehr) */
export const galerieMindestens = 50;
/** Preis je weiteres Foto */
export const extraFoto = 19;
/** Anfahrt: so viele km ab Wurmberg sind inklusive … */
export const anfahrtFreiKm = 25;
/** … danach je weiterem Kilometer (einfache Strecke) */
export const kmPreis = 0.5;
export const kmPreisText = `${kmPreis.toLocaleString("de-DE", { minimumFractionDigits: 2 })} € pro km`;

export interface Shooting {
  id: string;
  name: string;
  untertitel: string;
  dauer: string;
  preis: number;
  /** Preis für alle gelungenen Fotos der Galerie statt der 15 */
  allePreis: number;
  text: string;
  leistungen: string[];
  foto: Photo;
  beliebt?: boolean;
}

export const shootings: Shooting[] = [
  {
    id: "babybauch",
    name: "Babybauch",
    untertitel: "Die Zeit der Vorfreude",
    dauer: "ca. 1 Stunde",
    preis: 309,
    allePreis: 539,
    text: "Am schönsten zwischen der 30. und 36. Schwangerschaftswoche. Dann ist der Bauch schön rund und ihr fühlt euch meist noch wohl. Gern draußen im Abendlicht oder ganz gemütlich bei euch zu Hause.",
    leistungen: [
      "Draußen oder bei euch zu Hause",
      "Partner & Geschwister herzlich willkommen",
      "Bilder in Farbe & Schwarz-Weiß",
    ],
    foto: photos.schwangerschaft01,
  },
  {
    id: "newborn",
    name: "Newborn",
    untertitel: "Die ersten Tage",
    dauer: "ca. 1,5 Stunden",
    preis: 339,
    allePreis: 569,
    text: "In den ersten 14 Lebenstagen schlafen Babys besonders tief. Ich komme zu euch nach Hause, ihr müsst nirgendwo hin, und euer Baby bestimmt das Tempo. Pausen zum Stillen und Kuscheln sind immer eingeplant.",
    leistungen: [
      "Entspannt bei euch zu Hause",
      "Eltern- & Geschwisterbilder inklusive",
      "Am besten schon in der Schwangerschaft anfragen",
    ],
    foto: photos.baby14,
    beliebt: true,
  },
  {
    id: "familie",
    name: "Familie & Paare",
    untertitel: "So wie ihr seid",
    dauer: "ca. 1 Stunde",
    preis: 309,
    allePreis: 539,
    text: "Wir gehen gemeinsam nach draußen und lassen die Kinder Kinder sein. Oder ihr genießt ganz entspannt Zeit zu zweit. Am schönsten ist das weiche Licht am späten Nachmittag oder Abend.",
    leistungen: ["Draußen in der Natur oder bei euch", "Bis zu 6 Personen", "Auch mit Großeltern oder Hund"],
    foto: photos.familie15,
  },
  {
    id: "kinder",
    name: "Kinder & 1. Geburtstag",
    untertitel: "Groß werden",
    dauer: "ca. 1 Stunde",
    preis: 309,
    allePreis: 539,
    text: "Die ersten Schritte, der erste Geburtstag: Kinder verändern sich so schnell. Wir halten fest, wie euer Kind gerade ist, ganz spielerisch und ohne Druck.",
    leistungen: ["Draußen oder bei euch zu Hause", "Eltern & Geschwister dürfen mit aufs Bild", "Spielerisch und ohne Posen"],
    foto: photos.familie01,
  },
];

const byId = (id: string) => shootings.find((s) => s.id === id)!;

export interface Kombi {
  name: string;
  enthalten: Shooting[];
  preis: number;
  text: string;
}

export const kombis: Kombi[] = [
  {
    name: "Babybauch & Newborn",
    enthalten: [byId("babybauch"), byId("newborn")],
    preis: 619,
    text: `Vom Warten bis zum Ankommen: zwei Shootings, eine Geschichte. Je ${fotosInklusive} Fotos pro Shooting.`,
  },
  {
    name: "Babys erstes Jahr",
    enthalten: [byId("babybauch"), byId("newborn"), byId("kinder")],
    preis: 889,
    text: `Babybauch, Newborn und ein Shooting rund um den ersten Geburtstag. Eure Geschichte vom Warten bis zu den ersten Schritten. Je ${fotosInklusive} Fotos pro Shooting.`,
  },
];

/** Ersparnis gegenüber der Einzelbuchung */
export const ersparnis = (k: Kombi) => k.enthalten.reduce((sum, s) => sum + s.preis, 0) - k.preis;

/** Niedrigster Einstiegspreis – für „ab …“ auf der Startseite */
export const abPreis = Math.min(...shootings.map((s) => s.preis));

/** In jedem Shooting enthalten */
export const inklusive = [
  { titel: "Persönliches Vorgespräch", text: "Wir planen Ort, Zeitpunkt und Ablauf in Ruhe, telefonisch oder bei einem Kaffee." },
  { titel: "Shooting-Guide", text: "Euer Guide mit Ablauf, Farbpaletten und Outfit-Ideen." },
  { titel: "Das Shooting", text: "Ohne Zeitdruck und mit vielen Pausen. Draußen oder bei euch zu Hause." },
  { titel: "Private Online-Galerie", text: `Mindestens ${galerieMindestens} Fotos zur Auswahl, meist sind es mehr. Ihr sucht euch eure Lieblinge selbst aus.` },
  { titel: `${fotosInklusive} bearbeitete Fotos`, text: "Liebevoll von Hand bearbeitet, in voller Auflösung zum Download." },
  { titel: "Anfahrt bis 25 km", text: `Rund um Wurmberg, zum Beispiel nach ${orteKurz}, komme ich ohne Aufpreis zu euch.` },
];

export const extras = [
  { name: "Jedes weitere Foto", price: euro(extraFoto) },
  { name: "Alle gelungenen Fotos der Galerie", price: "siehe Paket" },
  { name: "Fine-Art-Fotobuch (20 × 20 cm)", price: "ab 149 €" },
  { name: "Gutschein als Geschenk", price: "frei wählbar" },
  { name: `Anfahrt ab ${anfahrtFreiKm} km`, price: kmPreisText },
];

/** Anzahlung bei Terminbestätigung (in Prozent des Paketpreises) – siehe auch AGB § 4 und § 5 */
export const anzahlungProzent = 30;

export const anzahlung = [
  `Mit der Terminbestätigung werden ${anzahlungProzent} % des Paketpreises fällig. Damit ist euer Termin fest für euch reserviert.`,
  "Die Anzahlung wird mit dem Endpreis verrechnet. Den Rest zahlt ihr nach dem Shooting, bevor ihr eure Bilder bekommt.",
  "Ist euer Kind krank oder spielt das Wetter nicht mit, verschieben wir kostenfrei.",
  "Müsst ihr absagen, verfällt nichts: Die Anzahlung wird zu einem Gutschein über denselben Betrag.",
];

/** Ablauf von der Anfrage bis zu den Bildern */
export const ablauf = [
  { titel: "Anfrage", text: "Schreibt mir, welches Shooting euch interessiert und wann ihr Zeit habt." },
  { titel: "Vorgespräch & Termin", text: `Wir besprechen eure Wünsche. Mit einer Anzahlung von ${anzahlungProzent} % ist euer Termin fest reserviert.` },
  { titel: "Das Shooting", text: "Ganz entspannt. Ihr müsst nichts können, ich begleite euch durch alles." },
  { titel: "Eure Galerie", text: "Nach etwa zwei Wochen bekommt ihr eure Online-Galerie und wählt eure Lieblingsbilder aus." },
];

export const faq = [
  {
    q: "Wann ist der beste Zeitpunkt für ein Newborn-Shooting?",
    a: "In den ersten 14 Lebenstagen schlafen Babys besonders tief und lassen sich gut in kuschelige Positionen legen. Meldet euch am besten schon in der Schwangerschaft, ich plane einen flexiblen Termin rund um den Geburtstermin ein.",
  },
  {
    q: "Wie funktioniert die Bildauswahl?",
    a: `In eurer privaten Online-Galerie seht ihr alle gelungenen Bilder. Daraus wählt ihr eure ${fotosInklusive} Lieblinge. Wenn ihr euch nicht entscheiden könnt, kommen weitere Fotos für je ${euro(extraFoto)} dazu – oder ihr nehmt einfach alle.`,
  },
  {
    q: "Wann sollen wir uns nach der Geburt melden?",
    a: "Sobald ihr in Ruhe angekommen seid, am besten in den ersten zwei, drei Tagen. Dann finden wir gemeinsam einen Termin, solange euer Baby noch ganz neu auf der Welt ist.",
  },
  {
    q: "Und wenn beim Newborn-Shooting große Geschwister dabei sind?",
    a: "Dann starten wir mit den Familien- und Geschwisterbildern. Danach dürfen die Großen gern mit Papa, Oma oder Opa schon etwas anderes machen. Ein langes Shooting ist für kleine Kinder ganz schön anstrengend.",
  },
  {
    q: "Zu welcher Tageszeit fotografieren wir draußen?",
    a: "Am liebsten am späten Nachmittag oder Abend, wenn das Licht weich und warm wird. Die Mittagssonne meide ich, weil sie harte Schatten wirft und alle kneifen die Augen zusammen. Was zum Rhythmus eurer Kinder passt, planen wir gemeinsam.",
  },
  {
    q: "Was passiert, wenn unser Kind an dem Tag krank ist oder das Wetter nicht mitspielt?",
    a: "Kein Problem, wir verschieben den Termin einfach kostenfrei. Gesundheit geht immer vor.",
  },
  {
    q: "Dürfen Geschwister, Großeltern oder der Hund mit?",
    a: "Sehr gern! Beim Familienshooting sind bis zu 6 Personen inklusive. Bei größeren Gruppen sprecht mich einfach an.",
  },
  {
    q: "Wie bekommen wir unsere Bilder?",
    a: "Etwa zwei Wochen nach dem Shooting erhaltet ihr eine passwortgeschützte Online-Galerie, aus der ihr eure Bilder in voller Auflösung herunterladen könnt.",
  },
];
