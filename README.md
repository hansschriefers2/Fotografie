# Fotografie – Familienfotografie-Website

Statische Website mit [Astro](https://astro.build), Kundengalerien/Buchung über **Pixieset**, Hosting bei **IONOS**.

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # erzeugt den Ordner dist/
npm run preview  # gebaute Seite lokal ansehen
```

## Was du anpassen musst

| Datei | Inhalt |
| --- | --- |
| `src/config.ts` | Studio-Name, E-Mail, Telefon, Region, **Pixieset-Links** |
| `src/data/pakete.ts` | Pakete, Preise, FAQ |
| `src/data/fotos.ts` + `src/assets/fotos/` | Portfolio-Bilder (aktuell Platzhalter) |
| `src/pages/impressum.astro`, `datenschutz.astro` | Rechtstexte (Pflicht!) |
| `astro.config.mjs` | `site:` auf deine Domain setzen |

### Pixieset verbinden

In `src/config.ts`:

- `galerieUrl` – Startseite deiner Client Galleries → Button auf `/galerie/`
- `buchungUrl` – öffentlicher Buchungslink aus dem Studio Manager → aktiviert `/buchen/` und alle „Anfragen“-Buttons
- `kontaktformularUrl` – öffentlicher Link deines Kontaktformulars → wird auf `/kontakt/` eingebettet

Leere Werte blenden die Funktion aus (dann wird auf E-Mail/Kontakt verwiesen).
Eingebettete Pixieset-Formulare laden erst nach einem Klick (Zwei-Klick-Lösung, DSGVO-freundlich). Die Seite selbst setzt keine Cookies und lädt keine externen Schriften.

## Deployment bei IONOS

### Variante A: IONOS Deploy Now (empfohlen, automatisch)

1. Im IONOS-Kundenbereich **Deploy Now** öffnen und mit GitHub verbinden.
2. Repository `Fotografie` und den Branch `astro-pixieset` (bzw. nach dem Mergen `main`) wählen.
3. Deploy Now erkennt Astro. Prüfen bzw. einstellen:
   - Build-Befehl: `npm run build`
   - Ausgabeordner: `dist`
   - Node-Version: 20 oder neuer
4. Deploy Now legt selbst einen GitHub-Actions-Workflow im Repo an. Danach wird bei jedem Push automatisch neu veröffentlicht.
5. In Deploy Now unter *Domains* deine IONOS-Domain verbinden.

### Variante B: Klassischer IONOS Webspace (manuell)

1. `npm run build`
2. Den **Inhalt** von `dist/` (inkl. der versteckten Datei `.htaccess`) per SFTP in das Webspace-Verzeichnis laden, auf das deine Domain zeigt.
3. Im IONOS-Kundenbereich SSL-Zertifikat aktivieren und die HTTPS-Weiterleitung einschalten.

## Struktur

```
src/
  config.ts            Zentrale Einstellungen
  data/                Fotos, Pakete, FAQ
  assets/fotos/        Bilder (werden beim Build optimiert)
  components/          Galerie, Pixieset-Einbettung
  layouts/Layout.astro Kopf, Navigation, Fuß
  pages/               Start, Portfolio, Pakete, Buchen, Galerie, Kontakt, Impressum, Datenschutz, 404
public/                Favicon, .htaccess (wird unverändert kopiert)
```
