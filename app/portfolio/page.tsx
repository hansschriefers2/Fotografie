import type { Metadata } from "next";
import Image from "next/image";
import { fotos } from "../fotos";

export const metadata: Metadata = { title: "Portfolio – Fotografie" };

export default function Portfolio() {
  return (
    <section className="seite">
      <h1>Portfolio</h1>
      <div className="galerie">
        {fotos.map((foto) => (
          <figure key={foto.src}>
            <Image
              src={foto.src}
              alt={foto.titel}
              width={foto.width}
              height={foto.height}
              sizes="(max-width: 700px) 100vw, 33vw"
            />
            <figcaption>{foto.titel}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
