import Image from "next/image";
import { contact } from "@/data/site-content";
import shared from "@/components/styles/shared.module.css";
import styles from "./about-section.module.css";

export function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className={styles.aboutPhoto}>
          <Image
            className="object-cover object-top"
            src="/fotos/servicos/cuidado-pet-limpa.png"
            alt="Cuidado veterinário com filhote"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
          />
        </div>
        <div>
          <p className={shared.sectionBadge}>Sobre nós</p>
          <h2 className={shared.sectionTitle}>
            Uma rotina de cuidado feita com carinho e estrutura.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
            A All Pet Center 24h une clínica veterinária, centro cirúrgico,
            internamento, loja física, pet shop e banho e tosa para facilitar a
            vida de tutores em Parnamirim e região.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className={styles.missionCard}>
              <span>Nossa missão</span>
              <p>Cuidar com agilidade, acolhimento e orientação clara.</p>
            </div>
            <div className={styles.missionCard}>
              <span>Nosso cuidado</span>
              <p>Atendimento integrado da consulta à recuperação.</p>
            </div>
          </div>
          <div className={styles.instagramCallout}>
            <div>
              <span>Instagram</span>
              <p>Acompanhe a rotina, bastidores e novidades da All Pet.</p>
            </div>
            <a className={styles.instagramLink} href={contact.instagramUrl} target="_blank" rel="noreferrer">
              <span className="relative block h-5 w-5 shrink-0">
                <Image
                  className="object-contain"
                  src="/fotos/marca/instagram-orange.png"
                  alt=""
                  fill
                  sizes="20px"
                />
              </span>
              @allpetcenter_24h
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
