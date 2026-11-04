import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fotografie",
  description: "Beispielseite für ein Fotografie-Studio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <header className="kopf">
          <Link href="/" className="marke">Fotografie</Link>
          <nav>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Platzhalter-Seite · Texte und Bilder folgen</footer>
      </body>
    </html>
  );
}
