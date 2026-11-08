// @ts-check
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Deine IONOS-Domain eintragen (wichtig für Sitemap, Canonical-Links und Social-Vorschauen)
  site: "https://www.deine-domain.de",
  // Rein statische Seite: `npm run build` erzeugt den Ordner `dist/`,
  // der 1:1 auf IONOS (Deploy Now oder Webspace) hochgeladen wird.
  output: "static",
  build: {
    format: "directory", // /pakete/ -> dist/pakete/index.html (funktioniert auf Apache ohne Umschreibregeln)
  },
});
