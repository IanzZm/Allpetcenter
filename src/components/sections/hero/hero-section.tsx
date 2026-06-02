import Image from "next/image";
import { contact, heroTags } from "@/data/site-content";
import shared from "@/components/styles/shared.module.css";
import styles from "./hero-section.module.css";

export function HeroSection() {
  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={`${shared.pawSoft} absolute inset-0 opacity-25`} />
      <div className="mx-auto grid min-h-[calc(100vh-69px)] max-w-7xl items-center gap-12 px-5 pb-28 pt-16 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:pb-32">
        <div className="relative z-10">
          <p className={styles.heroPill}>Clinica veterinaria 24 horas</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] text-white sm:text-7xl">
            Saude e cuidado completo para o seu pet.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/82 sm:text-lg">
            Atendimento 24h, pet shop, banho e tosa, exames, cirurgias e
            internamentos em Nova Parnamirim.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className={`${shared.button} ${styles.heroCta}`} href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
            <a className={`${shared.button} ${styles.heroGhost}`} href="#servicos">
              Ver servicos
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroTags.map((item) => (
              <span className={styles.heroTag} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 lg:justify-self-end">
          <div className={styles.heroPhotoWrap}>
            <div className={styles.heroBlob} />
            <div className={styles.heroPhoto}>
              <Image
                className="object-cover object-top"
                src="/fotos/servicos/dog-hero-ia.png"
                alt="Cachorro feliz em ambiente de cuidado veterinario"
                fill
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
              />
            </div>
            <div className={styles.heroMiniCard}>
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  className="object-cover object-top"
                  src="/fotos/doutores/dr-erick-limpa.png"
                  alt="Medico veterinario da All Pet Center 24h"
                  fill
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-sm font-black text-ink">Plantao 24h</p>
                <p className="text-xs font-semibold text-muted">Equipe pronta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.wave} ${styles.waveWhite}`} />
    </section>
  );
}
