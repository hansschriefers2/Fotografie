import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src="/fotos/landschaft.jpg" alt="Platzhalterbild" fill priority sizes="100vw" />
        <div className="hero-text">
          <h1>Momente, die bleiben.</h1>
          <Link href="/portfolio" className="knopf">Portfolio ansehen</Link>
        </div>
      </section>
      <section className="intro">
        <h2>Willkommen</h2>
        <p>Hier steht später ein kurzer Text über dich und deine Arbeit.</p>
      </section>
    </>
  );
}
