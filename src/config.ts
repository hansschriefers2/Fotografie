// Zentrale Einstellungen – hier passt du Namen, Kontakt und Pixieset-Links an.
// Alle Seiten lesen diese Werte aus.

export const site = {
  name: "Schriefers Fotografie",
  tagline: "Baby-, Familien- & Babybauchfotografie",
  claim: "Erinnerungen, die mitwachsen.",
  beschreibung:
    "Natürliche, zeitlose Baby-, Familien- und Babybauchfotos. Liebevoll begleitet, damit eure Erinnerungen auch in vielen Jahren noch berühren.",
  // TODO: echte Daten eintragen (Impressumspflicht!)
  firstName: "Nicole",
  owner: "Nicole Schriefers",
  street: "Musterstraße 1",
  city: "75449 Wurmberg",
  region: "Wurmberg & Umgebung",
  email: "hallo@schriefers-fotografie.de",
  phone: "+49 123 456789",
  instagram: "https://instagram.com/schriefers.fotografie", // leer lassen, um auszublenden
};

// Pixieset: Links findest du in deinem Pixieset-Konto.
// Leere Werte ("") blenden die jeweilige Funktion automatisch aus.
export const pixieset = {
  // Startseite deiner Kundengalerien (Client Gallery → Einstellungen → Gallery Homepage)
  galerieUrl: "https://schriefersfotografie.pixieset.com/",
  // Öffentlicher Buchungslink (Studio Manager → Booking → Session Type → Link teilen)
  buchungUrl: "",
  // Öffentlicher Link zu deinem Kontaktformular (Studio Manager → Contact Forms → Teilen)
  kontaktformularUrl: "",
};

export const nav = [
  { href: "/", label: "Start" },
  { href: "/galerie/", label: "Galerie" },
  { href: "/ueber-mich/", label: "Über mich" },
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
export const telHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
