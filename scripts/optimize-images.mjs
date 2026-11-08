// Verkleinert Originalfotos fürs Web und entfernt Metadaten (EXIF/GPS).
// Aufruf: node scripts/optimize-images.mjs <quellordner> <zielordner>
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const [src, dest] = process.argv.slice(2);
await mkdir(dest, { recursive: true });
const files = (await readdir(src)).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort();
let i = 1;
for (const f of files) {
  const out = path.join(dest, `${path.basename(dest)}-${String(i++).padStart(2, "0")}.jpg`);
  await sharp(path.join(src, f))
    .rotate() // EXIF-Ausrichtung anwenden, danach Metadaten verwerfen
    .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log(f, "->", out);
}
