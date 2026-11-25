// Zentrale Einstellungen – hier passt du Namen, Kontakt und Pixieset-Links an.
// Alle Seiten lesen diese Werte aus.

export const site = {
  name: "Schriefers Fotografie",
  tagline: "Baby-, Familien- & Paarfotografie",
  claim: "Erinnerungen, die mitwachsen.",
  beschreibung:
    "Natürliche Baby-, Familien- und Paarfotos in Wurmberg, Pforzheim und Umgebung sowie in Koblenz und am Bodensee. Damit eure Erinnerungen auch in vielen Jahren noch berühren.",
  // TODO: echte Daten eintragen (Impressumspflicht!)
  firstName: "Nicole",
  owner: "Nicole Schriefers",
  street: "Münzenfeldstraße 28/1",
  city: "75449 Wurmberg",
  region: "Wurmberg & Umgebung",
  email: "kontakt@schriefers-fotografie.de",
  phone: "0175 4568227",
  // Handynummer für WhatsApp, z. B. "+49 171 1234567" – leer = WhatsApp-Buttons ausgeblendet
  // (lokal im Testmodus werden sie trotzdem mit Platzhalternummer angezeigt)
  whatsapp: "0175 4568227",
  instagram: "", // z. B. "https://instagram.com/schriefers.fotografie" – leer = ausgeblendet
};

// Pixieset: Links findest du in deinem Pixieset-Konto.
// Leere Werte ("") blenden die jeweilige Funktion automatisch aus.
export const pixieset = {
  // Startseite deiner Kundengalerien (Client Gallery → Einstellungen → Gallery Homepage)
  galerieUrl: "https://schriefersfotografie.pixieset.com/",
  // Öffentlicher Buchungslink (Studio Manager → Booking → Session Type → Link teilen)
  buchungUrl: "",
  // Öffentlicher Link zu deinem Kontaktformular (Studio Manager → Contact Forms → Teilen)
  kontaktformularUrl: "https://schriefersfotografie.pixieset.com/contact-form/cf_93qPQYmYuVU1Es9BYoPzpBhOWw6G",
};

// Orte in der Umgebung (bis ca. 25 km ab Wurmberg) – erscheinen auf Startseite, Kontakt und im Footer.
// Reihenfolge = Anzeige; die ersten drei werden in Kurztexten genannt.
export const orte = [
  "Pforzheim",
  "Mühlacker",
  "Leonberg",
  "Wurmberg",
  "Wiernsheim",
  "Heimsheim",
  "Niefern-Öschelbronn",
  "Weil der Stadt",
];
/** Weitere Regionen, in denen ich regelmäßig bin – Termine dort nach Absprache */
export const weitereRegionen = ["56068 Koblenz", "78351 Bodman am Bodensee"];
/** z. B. „Pforzheim, Mühlacker oder Leonberg“ */
export const orteKurz = `${orte.slice(0, 2).join(", ")} oder ${orte[2]}`;

export const nav = [
  { href: "/", label: "Start" },
  { href: "/galerie/", label: "Galerie" },
  { href: "/ueber-mich/", label: "Fotografin" },
  { href: "/preise/", label: "Preise" },
  { href: "/kontakt/", label: "Kontakt" },
];

export const legalNav = [
  { href: "/impressum/", label: "Impressum" },
  { href: "/datenschutz/", label: "Datenschutz" },
  { href: "/agb/", label: "AGB" },
];

/** Ziel der „Anfragen“-Buttons: Pixieset-Buchung, falls eingerichtet, sonst Kontaktseite */
export const anfrageHref = pixieset.buchungUrl ? "/buchen/" : "/kontakt/";
/** Telefonnummer international ohne Leerzeichen: „0175 …“ → „+49175…“ */
const international = (nr: string) => nr.replace(/[^+\d]/g, "").replace(/^00/, "+").replace(/^0/, "+49");
export const telHref = `tel:${international(site.phone)}`;

/** WhatsApp aktiv? (lokal immer sichtbar, damit man es testen kann) */
export const whatsappAktiv = Boolean(site.whatsapp) || import.meta.env.DEV;
/** Link, der einen WhatsApp-Chat mit vorausgefülltem Text öffnet */
export const whatsappHref = (text = `Hallo ${site.firstName}, wir interessieren uns für ein Fotoshooting.`) =>
  `https://wa.me/${international(site.whatsapp || "+49 000 0000000").replace("+", "")}?text=${encodeURIComponent(text)}`;
