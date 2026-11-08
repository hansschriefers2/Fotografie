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
import baby07 from "../assets/baby/baby-07.jpg";
import baby08 from "../assets/baby/baby-08.jpg";
import baby09 from "../assets/baby/baby-09.jpg";
import baby10 from "../assets/baby/baby-10.jpg";
import baby11 from "../assets/baby/baby-11.jpg";
import baby12 from "../assets/baby/baby-12.jpg";
import baby13 from "../assets/baby/baby-13.jpg";
import baby14 from "../assets/baby/baby-14.jpg";
import familie01 from "../assets/familie/familie-01.jpg";
import familie02 from "../assets/familie/familie-02.jpg";
import familie03 from "../assets/familie/familie-03.jpg";
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
import schwangerschaft01 from "../assets/schwangerschaft/schwangerschaft-01.jpg";

export type Category = "baby" | "familie" | "schwangerschaft";
export interface Photo {
  src: ImageMetadata;
  alt: string;
  category: Category;
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
  baby07: b(baby07, "Schlafendes Neugeborenes auf einer cremefarbenen Decke"),
  baby08: b(baby08, "Babyfüße liegen in der Hand eines Elternteils"),
  baby09: b(baby09, "Kleine Babyfüße in eine cremeweiße Decke gewickelt"),
  baby10: b(baby10, "Geschwisterhand hält die Hand des Neugeborenen"),
  baby11: b(baby11, "Schwarz-Weiß-Aufnahme mehrerer Familienhände rund um das Baby"),
  baby12: b(baby12, "Schwarz-Weiß: winzige Babyhand auf dem Arm des Vaters"),
  baby13: b(baby13, "Gehäkelter Teddy lehnt an den Beinchen eines Babys"),
  baby14: b(baby14, "Babyhand ruht in der Hand der Mutter"),
  familie01: f(familie01, "Zwei Geschwister in rosa Jacken sitzen auf einem Baumstamm im Herbst"),
  familie02: f(familie02, "Vater geht mit zwei Kindern an der Hand einen Feldweg entlang"),
  familie03: f(familie03, "Vater trägt ein Kind auf den Schultern, das andere läuft nebenher"),
  familie04: f(familie04, "Mädchen in rosa Jacke läuft fröhlich einen Feldweg entlang"),
  familie05: f(familie05, "Zwei Kinderhände nebeneinander auf einem Holzstamm"),
  familie06: f(familie06, "Geschwister halten sich an den Händen"),
  familie07: f(familie07, "Nahaufnahme verschränkter Kinderhände in Wolljacken"),
  familie08: f(familie08, "Kleine Lederstiefel der Geschwister auf einem Baumstamm"),
  familie09: f(familie09, "Kinderstiefel nebeneinander, im Hintergrund Herbstwiese"),
  familie10: f(familie10, "Kind sitzt auf einem Holzstamm und schaut in die Ferne"),
  familie11: f(familie11, "Zwei Geschwister gehen Hand in Hand einen Kiesweg entlang"),
  familie12: f(familie12, "Kleinkind läuft an Papas Hand der großen Schwester hinterher"),
  familie13: f(familie13, "Papa, Kleinkind und große Schwester auf einem Feldweg"),
  familie14: f(familie14, "Kleinkind läuft lachend auf die große Schwester zu"),
  schwangerschaft01: s(
    schwangerschaft01,
    "Schwarz-Weiß-Aufnahme einer Schwangeren, die im Schneidersitz ihren Bauch hält",
  ),
} satisfies Record<string, Photo>;

export const allPhotos: Photo[] = Object.values(photos);

/** Bilder für die Slideshow auf der Startseite (alle im Querformat) */
export const heroSlides: Photo[] = [
  photos.familie02,
  photos.baby09,
  photos.schwangerschaft01,
  photos.familie11,
  photos.baby02,
  photos.familie01,
  photos.baby13,
  photos.familie03,
  photos.baby07,
];
