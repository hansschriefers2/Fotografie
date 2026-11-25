// Suchmaschinen & KI-Assistenten: strukturierte Daten (JSON-LD), Seitenliste für die Sitemap
// und Text für /llms.txt. Alles wird aus config.ts und preise.ts erzeugt – Preise ändern sich automatisch mit.
import { site, orte, weitereRegionen, telHref } from "../config";
import { shootings, kombis, euro, fotosInklusive, anfahrtFreiKm, extraFoto, faqWebsite } from "./preise";
import { aktion } from "./aktion";

export const basisUrl = "https://schriefers-fotografie.de";

/** Öffentliche Seiten für die Sitemap (Pfad, Priorität). Neue Seiten hier ergänzen. */
export const sitemapSeiten: [string, number][] = [
  ["/", 1.0],
  ["/galerie/", 0.9],
  ["/preise/", 0.9],
  ["/ueber-mich/", 0.8],
  ["/kontakt/", 0.8],
  ["/gutschein/", 0.7],
  ...(aktion.aktiv ? ([["/aktion/", 0.7]] as [string, number][]) : []),
  ["/impressum/", 0.1],
  ["/datenschutz/", 0.1],
  ["/agb/", 0.1],
];

const ortName = (o: string) => o.replace(/^\d+\s*/, "");
const telefon = telHref.replace("tel:", "");
const [plz, ...ortTeile] = site.city.split(" ");
const preise = [...shootings.map((s) => s.preis), ...kombis.map((k) => k.preis)];

const unternehmenId = `${basisUrl}/#unternehmen`;
const personId = `${basisUrl}/#nicole`;

/** Grunddaten, die auf jeder öffentlichen Seite eingebunden werden */
export const strukturDaten = [
  {
    "@type": "ProfessionalService",
    "@id": unternehmenId,
    name: site.name,
    alternateName: `${site.owner} Fotografie`,
    description: site.beschreibung,
    slogan: site.claim,
    url: `${basisUrl}/`,
    image: `${basisUrl}/og-image.jpg`,
    telephone: telefon,
    email: site.email,
    priceRange: `${euro(Math.min(...preise))} – ${euro(Math.max(...preise))}`,
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: plz,
      addressLocality: ortTeile.join(" "),
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    areaServed: [
      ...orte.map((o) => ({ "@type": "City", name: o })),
      { "@type": "AdministrativeArea", name: "Enzkreis" },
      ...weitereRegionen.map((o) => ({ "@type": "City", name: ortName(o) })),
    ],
    knowsAbout: [
      "Newbornfotografie",
      "Babyfotografie",
      "Babybauchfotografie",
      "Schwangerschaftsfotografie",
      "Familienfotografie",
      "Kinderfotografie",
      "Paarfotografie",
    ],
    founder: { "@id": personId },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fotoshootings",
      itemListElement: [
        ...shootings.map((s) => ({
          "@type": "Offer",
          price: s.preis,
          priceCurrency: "EUR",
          itemOffered: {
            "@type": "Service",
            name: `${s.name}-Fotoshooting`,
            description: `${s.text} Dauer ${s.dauer}, ${fotosInklusive} bearbeitete Fotos inklusive.`,
          },
        })),
        ...kombis.map((k) => ({
          "@type": "Offer",
          price: k.preis,
          priceCurrency: "EUR",
          itemOffered: { "@type": "Service", name: `Kombipaket ${k.name}`, description: k.text },
        })),
      ],
    },
    ...(site.instagram ? { sameAs: [site.instagram] } : {}),
  },
  {
    "@type": "Person",
    "@id": personId,
    name: site.owner,
    jobTitle: "Fotografin",
    worksFor: { "@id": unternehmenId },
    homeLocation: { "@type": "Place", name: ortTeile.join(" ") },
  },
  {
    "@type": "WebSite",
    "@id": `${basisUrl}/#website`,
    url: `${basisUrl}/`,
    name: site.name,
    inLanguage: "de-DE",
    publisher: { "@id": unternehmenId },
  },
];

/** FAQ als strukturierte Daten (nur auf der Seite, auf der die Fragen auch sichtbar sind) */
export const faqDaten = {
  "@type": "FAQPage",
  mainEntity: faqWebsite.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** Kurzinfo für KI-Assistenten (/llms.txt) */
export const llmsText = () => `# ${site.name}

> ${site.tagline} von ${site.owner}, Fotografin aus ${ortTeile.join(" ")} (Enzkreis, Baden-Württemberg). ${site.beschreibung}

## Auf einen Blick
- Fotografin: ${site.owner}
- Schwerpunkte: Newborn, Babybauch/Schwangerschaft, Familie & Kinder, 1. Geburtstag, Paare
- Einzugsgebiet: ${orte.join(", ")} und der gesamte Enzkreis (Anfahrt bis ${anfahrtFreiKm} km ab Wurmberg inklusive); außerdem ${weitereRegionen.map(ortName).join(" und ")} nach Absprache
- Stil: natürlich, ungestellt, draußen in der Natur oder bei den Familien zu Hause
- Kontakt: ${site.email} · Telefon/WhatsApp ${site.phone}
- Website: ${basisUrl}/

## Preise (inkl. Vorgespräch, ${fotosInklusive} bearbeitete Fotos, private Online-Galerie)
${shootings.map((s) => `- ${s.name}: ${euro(s.preis)} (${s.dauer}); alle gelungenen Fotos: ${euro(s.allePreis)}`).join("\n")}
${kombis.map((k) => `- Kombipaket ${k.name}: ${euro(k.preis)}`).join("\n")}
- Weitere Fotos: je ${euro(extraFoto)}

## Häufige Fragen
${faqWebsite.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Seiten
- [Galerie](${basisUrl}/galerie/): Beispielbilder aus Baby-, Familien- und Babybauchshootings
- [Preise](${basisUrl}/preise/): Pakete, Kombipakete und häufige Fragen
- [Fotografin](${basisUrl}/ueber-mich/): Über ${site.firstName} und ihre Arbeitsweise
- [Gutschein](${basisUrl}/gutschein/): Fotoshooting verschenken
- [Kontakt](${basisUrl}/kontakt/): Anfrage per E-Mail, Telefon oder WhatsApp
`;
