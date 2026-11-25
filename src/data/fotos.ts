// Alle Fotos der Website. Neue Bilder erst verkleinern (entfernt auch EXIF/GPS-Daten!):
//   node scripts/optimize-images.mjs ~/Downloads/NeuerOrdner src/assets/familie
// danach hier importieren und mit Alt-Text versehen.
// Astro optimiert sie beim Build automatisch (WebP, passende Größen).
import type { ImageMetadata } from "astro";

import baby01 from "../assets/baby/baby-01.jpg";
import baby02 from "../assets/baby/baby-02.jpg";
import baby03 from "../assets/baby/baby-03.jpg";
import baby04 from "../assets/baby/baby-04.jpg";
import baby05 from "../assets/baby/baby-05.jpg";
import baby06 from "../assets/baby/baby-06.jpg";
import baby08 from "../assets/baby/baby-08.jpg";
import baby09 from "../assets/baby/baby-09.jpg";
import baby10 from "../assets/baby/baby-10.jpg";
import baby12 from "../assets/baby/baby-12.jpg";
import baby13 from "../assets/baby/baby-13.jpg";
import baby14 from "../assets/baby/baby-14.jpg";
import baby15 from "../assets/baby/baby-15.jpg";
import baby16 from "../assets/baby/baby-16.jpg";
import baby17 from "../assets/baby/baby-17.jpg";
import baby18 from "../assets/baby/baby-18.jpg";
import baby19 from "../assets/baby/baby-19.jpg";
import baby20 from "../assets/baby/baby-20.jpg";
import baby21 from "../assets/baby/baby-21.jpg";
import baby22 from "../assets/gutschein/gutschein.jpg";
import familie01 from "../assets/familie/familie-01.jpg";
import familie02 from "../assets/familie/familie-02.jpg";
import familie04 from "../assets/familie/familie-04.jpg";
import familie05 from "../assets/familie/familie-05.jpg";
import familie06 from "../assets/familie/familie-06.jpg";
import familie07 from "../assets/familie/familie-07.jpg";
import familie08 from "../assets/familie/familie-08.jpg";
import familie09 from "../assets/familie/familie-09.jpg";
import familie10 from "../assets/familie/familie-10.jpg";
import familie11 from "../assets/familie/familie-11.jpg";
import familie12 from "../assets/familie/familie-12.jpg";
import familie13 from "../assets/familie/familie-13.jpg";
import familie14 from "../assets/familie/familie-14.jpg";
import familie15 from "../assets/familie/familie-15.jpg";
import schwangerschaft01 from "../assets/schwangerschaft/schwangerschaft-01.jpg";
import nicole7398 from "../assets/ich/nicole-7398.jpg";
import nicole7415 from "../assets/ich/nicole-7415.jpg";
import nicole7441 from "../assets/ich/nicole-7441.jpg";
import nicole7490 from "../assets/ich/nicole-7490.jpg";
import nicole7721 from "../assets/ich/nicole-7721.jpg";
import nicole7783 from "../assets/ich/nicole-7783.jpg";
import nicole7800 from "../assets/ich/nicole-7800.jpg";

export type Category = "baby" | "familie" | "schwangerschaft";
export interface Photo {
  src: ImageMetadata;
  alt: string;
  category: Category;
  /** Bildausschnitt bei Zuschnitt (CSS object-position), z. B. "68% 50%" = Motiv rechts der Mitte */
  fokus?: string;
}

export const categories: { id: Category; label: string }[] = [
  { id: "baby", label: "Baby & Newborn" },
  { id: "familie", label: "Familie" },
  { id: "schwangerschaft", label: "Babybauch" },
];

const b = (src: ImageMetadata, alt: string): Photo => ({ src, alt, category: "baby" });
const f = (src: ImageMetadata, alt: string): Photo => ({ src, alt, category: "familie" });
const s = (src: ImageMetadata, alt: string): Photo => ({ src, alt, category: "schwangerschaft" });

export const photos = {
  baby01: b(baby01, "Nahaufnahme eines kleinen Ohrs eines schlafenden Neugeborenen"),
  baby02: b(baby02, "Winzige Babyhand liegt in der offenen Hand eines Elternteils"),
  baby03: b(baby03, "Neugeborenes umklammert den Finger eines Elternteils"),
  baby04: b(baby04, "Babyhand neben einem gehäkelten Teddybären"),
  baby05: b(baby05, "Babyhand hält zart einen Erwachsenenfinger"),
  baby06: b(baby06, "Schwarz-Weiß-Aufnahme eines schlafenden Neugeborenen von hinten"),
  baby08: { ...b(baby08, "Babyfüße liegen in der Hand eines Elternteils"), fokus: "42% 50%" },
  baby09: b(baby09, "Kleine Babyfüße in eine cremeweiße Decke gewickelt"),
  baby10: b(baby10, "Geschwisterhand hält die Hand des Neugeborenen"),
  baby12: b(baby12, "Schwarz-Weiß: winzige Babyhand auf dem Arm des Vaters"),
  baby13: b(baby13, "Gehäkelter Teddy lehnt an den Beinchen eines Babys"),
  baby14: b(baby14, "Babyhand ruht in der Hand der Mutter"),
  baby15: b(baby15, "Schwarz-Weiß-Aufnahme: Baby liegt Gesicht an Gesicht mit einem geliebten Menschen, die Händchen ineinander"),
  baby16: { ...b(baby16, "Schwarz-Weiß: Mama legt ihre Stirn an die Stirn ihres Neugeborenen"), fokus: "50% 22%" },
  baby17: { ...b(baby17, "Schwarz-Weiß: Mama küsst den Kopf ihres Neugeborenen im Arm"), fokus: "50% 30%" },
  baby18: b(baby18, "Neugeborenes in weißer Windel liegt auf der Seite auf einer hellen Decke, von oben fotografiert"),
  baby19: b(baby19, "Babyhand umklammert den Finger eines Elternteils"),
  baby20: b(baby20, "Schwarz-Weiß: Elternhände halten die Füßchen des Neugeborenen"),
  baby21: b(baby21, "Schwarz-Weiß: Babyköpfchen mit Öhrchen, eingekuschelt in eine Spitzendecke"),
  baby22: b(baby22, "Babyhand liegt entspannt auf der Decke, im Hintergrund schläft das Baby"),
  familie01: f(familie01, "Zwei Geschwister in rosa Jacken sitzen auf einem Baumstamm im Herbst"),
  familie02: f(familie02, "Vater geht mit zwei Kindern an der Hand einen Feldweg entlang"),
  familie04: f(familie04, "Mädchen in rosa Jacke läuft fröhlich einen Feldweg entlang"),
  familie05: f(familie05, "Zwei Kinderhände nebeneinander auf einem Holzstamm"),
  familie06: f(familie06, "Geschwister halten sich an den Händen"),
  familie07: f(familie07, "Nahaufnahme verschränkter Kinderhände in Wolljacken"),
  familie08: f(familie08, "Kleine Lederstiefel der Geschwister auf einem Baumstamm"),
  familie09: f(familie09, "Kinderstiefel nebeneinander, im Hintergrund Herbstwiese"),
  familie10: f(familie10, "Kind sitzt auf einem Holzstamm und schaut in die Ferne"),
  familie11: { ...f(familie11, "Zwei Geschwister gehen Hand in Hand einen Kiesweg entlang"), fokus: "68% 50%" },
  familie12: f(familie12, "Kleinkind läuft an Papas Hand der großen Schwester hinterher"),
  familie13: f(familie13, "Papa, Kleinkind und große Schwester auf einem Feldweg"),
  familie14: f(familie14, "Kleinkind läuft lachend auf die große Schwester zu"),
  familie15: { ...f(familie15, "Familie mit zwei kleinen Jungs geht Hand in Hand einen Feldweg entlang"), fokus: "50% 60%" },
  schwangerschaft01: s(
    schwangerschaft01,
    "Schwarz-Weiß-Aufnahme einer Schwangeren, die im Schneidersitz ihren Bauch hält",
  ),
} satisfies Record<string, Photo>;

export const allPhotos: Photo[] = Object.values(photos);

/**
 * Fotos für die Galerie – ohne fast gleiche Motive:
 * familie05 + familie07 (Händchen, wie familie06),
 * familie09 (Stiefel, wie familie08), familie13 (fast gleich wie familie12)
 */
// baby16/baby17: Kundenfotos (Janine) – für Galerie und Newborn-Guide freigegeben
const nichtInGalerie: Photo[] = [photos.baby02, photos.familie05, photos.familie07, photos.familie09, photos.familie13];
// Feste Reihenfolge der Galerie: Lieblingsbilder oben, Handbilder (H) nie direkt hintereinander,
// Schwarz-Weiß und Farbe gemischt, Janine (baby16) Mitte, Janine 2 (baby17) ganz unten.
// Neue Fotos, die hier fehlen, werden automatisch hinten angehängt.
const reihenfolge: Photo[] = [
  photos.baby18, // Neugeborenes, weiße Windel
  photos.baby15, // Geschwister, S/W
  photos.baby03, // H
  photos.familie15, // Familie mit zwei Kindern weit oben
  photos.baby01,
  photos.baby04, // H
  photos.familie01,
  photos.baby05, // H
  photos.baby06, // S/W
  photos.baby08, // H (Füße in der Hand)
  photos.familie02,
  photos.baby09,
  photos.baby10, // H
  photos.baby13,
  photos.baby12, // H, S/W
  photos.familie04,
  photos.baby14, // H
  photos.baby21, // S/W
  photos.baby19, // H
  photos.baby16, // Janine
  photos.familie06, // H
  photos.familie08,
  photos.baby20, // H, S/W
  photos.familie10,
  photos.baby22, // H
  photos.familie11,
  photos.schwangerschaft01, // Babybauch bewusst weiter unten
  photos.familie12,
  photos.familie14,
  photos.baby17, // Janine 2
];
const erlaubt = allPhotos.filter((p) => !nichtInGalerie.includes(p));
export const galeriePhotos: Photo[] = [
  ...reihenfolge.filter((p) => erlaubt.includes(p)),
  ...erlaubt.filter((p) => !reihenfolge.includes(p)),
];

/** Bilder für die Slideshow auf der Startseite (alle im Querformat) */
// Keine Fotos verwenden, die auf der Startseite schon an anderer Stelle vorkommen
// (Shooting-Bögen: baby08, familie11, schwangerschaft01 · Galerie-Handy: familie13 und das Raster in GalerieHandy.astro)
export const heroSlides: Photo[] = [
  photos.familie01,
  photos.baby09,
  photos.baby15,
  photos.familie10,
  photos.baby05,
  photos.familie02,
  photos.baby10,
  photos.baby06,
];

/** Fotos von Nicole (Über mich, Preisguide, Shooting-Guides) – nicht Teil der Galerie */
const ich = (src: ImageMetadata, alt: string, fokus: string): Photo => ({ src, alt, category: "familie", fokus });
export const nicole = {
  hauptbild: ich(nicole7398, "Nicole lacht mit ihrer Kamera in der Hand auf einem Feld im Morgenlicht", "82% 45%"),
  weite: ich(nicole7415, "Nicole fotografiert bei Sonnenaufgang über ein weites, frostiges Feld", "66% 60%"),
  kniend: ich(nicole7441, "Nicole kniet lächelnd mit ihrer Kamera im frostigen Gras, im Hintergrund geht die Sonne auf", "68% 55%"),
  feld: ich(nicole7721, "Nicole lächelt mit ihrer Kamera in den Händen auf einem Feld unter Wolken", "50% 35%"),
  hockend: ich(nicole7800, "Nicole hockt lachend im Gras und fotografiert", "50% 40%"),
  display: ich(nicole7783, "Nicole schaut lächelnd auf das Display ihrer Kamera", "50% 35%"),
  portrait: ich(nicole7490, "Nicole im gelben Mantel lächelt auf einem Feld in der Morgensonne", "40% 40%"),
};
