import Image from "next/image";
import { trustItems } from "@/data/site-content";
import shared from "@/components/styles/shared.module.css";
import styles from "./trust-section.module.css";

export function TrustSection() {
  return (
    <section className={styles.trustSection}>
      <div className={`${shared.pawSoft} absolute inset-0 opacity-45`} />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className={shared.sectionBadge}>Beneficios</p>
          <h2 className={shared.sectionTitle}>Por que tutores confiam na All Pet?</h2>
          <div className="mt-8 space-y-5">
            {trustItems.map((item) => (
              <div className={styles.trustItem} key={item.title}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.trustImageStack}>
          <div className={styles.trustMainImage}>
            <Image
              className="object-cover object-top"
              src="/fotos/doutores/dr-erick-limpa.png"
              alt="Atendimento veterinario com cachorro"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
          <div className={styles.trustSmallImage}>
            <Image
              className="object-cover object-top"
              src="/fotos/doutores/dra-larissa-limpa.png"
              alt="Veterinaria com cachorro"
              fill
              sizes="240px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
