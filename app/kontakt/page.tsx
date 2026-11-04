import type { Metadata } from "next";

export const metadata: Metadata = { title: "Kontakt – Fotografie" };

export default function Kontakt() {
  return (
    <section className="seite schmal">
      <h1>Kontakt</h1>
      <p>Das Formular ist ein Platzhalter und verschickt noch nichts.</p>
      <form className="formular">
        <label>Name<input name="name" required /></label>
        <label>E-Mail<input name="email" type="email" required /></label>
        <label>Nachricht<textarea name="nachricht" rows={5} required /></label>
        <button type="button" className="knopf">Senden</button>
      </form>
    </section>
  );
}
