// Zentrale Einstellungen – hier passt du Namen, Kontakt und Pixieset-Links an.
// Alles andere auf der Seite liest diese Werte aus.

export const studio = {
  name: "Fotografie",
  claim: "Familienmomente, die bleiben.",
  beschreibung:
    "Natürliche Familienfotografie – draußen oder bei euch zu Hause. Entspannt, ehrlich und mit viel Zeit für Kinder.",
  region: "Musterstadt und Umgebung",
  email: "hallo@deine-domain.de",
  telefon: "+49 000 0000000",
  instagram: "", // z. B. "https://instagram.com/deinname" – leer lassen, um auszublenden
};

// Pixieset: Links findest du in deinem Pixieset-Konto.
// Leere Werte ("") blenden die jeweilige Funktion automatisch aus bzw. zeigen einen Hinweis.
export const pixieset = {
  // Startseite deiner Kundengalerien (Client Gallery → Einstellungen → Gallery Homepage)
  galerieUrl: "https://schriefersfotografie.pixieset.com/",
  // Öffentlicher Buchungslink (Studio Manager → Booking → Session Type → Link teilen)
  buchungUrl: "",
  // Öffentlicher Link zu deinem Kontaktformular (Studio Manager → Contact Forms → Teilen)
  kontaktformularUrl: "",
};

export const navigation = [
  { href: "/", label: "Start" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/pakete/", label: "Pakete & Preise" },
  { href: "/galerie/", label: "Kundengalerie" },
  { href: "/kontakt/", label: "Kontakt" },
];
