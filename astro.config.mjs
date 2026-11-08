// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Deine Domain (wichtig für Canonical-Links und Social-Vorschauen)
  site: "https://schriefers-fotografie.de",
  // Rein statische Seite: `npm run build` erzeugt den Ordner `dist/`,
  // der 1:1 auf IONOS (Webspace oder Deploy Now) hochgeladen wird.
  output: "static",
  build: {
    format: "directory", // /preise/ -> dist/preise/index.html (funktioniert auf Apache ohne Umschreibregeln)
  },
  // Alte Adressen weiterleiten
  redirects: {
    "/portfolio": "/galerie/",
    "/pakete": "/preise/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
