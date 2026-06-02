import { contact, locationHighlights } from "@/data/site-content";
import shared from "@/components/styles/shared.module.css";
import styles from "./location-section.module.css";

export function LocationSection() {
  return (
    <section id="localizacao" className="bg-cream py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className={shared.sectionBadge}>Localizacao</p>
          <h2 className={shared.sectionTitle}>Estamos em Nova Parnamirim.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Av. Abel Cabral, 681 - 6A - Nova Parnamirim, Parnamirim - RN,
            59150-410
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className={`${shared.button} ${shared.buttonDark}`} href={contact.mapsUrl} target="_blank" rel="noreferrer">
              Abrir no mapa
            </a>
            <a className={`${shared.button} ${shared.buttonLight}`} href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.locationCard}>
          {locationHighlights.map((item) => (
            <div key={item.title}>
              <span>{item.title}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
