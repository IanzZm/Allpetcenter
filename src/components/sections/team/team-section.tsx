import Image from "next/image";
import { teamMembers } from "@/data/site-content";
import shared from "@/components/styles/shared.module.css";
import styles from "./team-section.module.css";

export function TeamSection() {
  return (
    <section id="equipe" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <p className={shared.sectionBadge}>Equipe</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
          Conheça parte da nossa equipe
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article className={`${styles.teamCard} lg:col-span-1`}>
            <div className={`${styles.teamPhoto} ${styles.isWide}`}>
              <Image
                className="object-cover object-top"
                src="/fotos/equipe/equipe-allpet-limpa.png"
                alt="Equipe All Pet Center 24h"
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
              />
            </div>
            <h3>Equipe All Pet</h3>
            <p>Clínica, pet shop e suporte 24h</p>
          </article>

          {teamMembers.map((person) => (
            <article className={styles.teamCard} key={person.name}>
              <div className={styles.teamPhoto}>
                <Image
                  className="object-cover object-top"
                  src={person.image}
                  alt={`${person.name} da All Pet Center 24h`}
                  fill
                  sizes="(min-width: 1024px) 300px, 100vw"
                />
              </div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
