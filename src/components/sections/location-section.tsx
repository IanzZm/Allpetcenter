import { contact, locationHighlights } from "@/data/site-content";

export function LocationSection() {
  return (
    <section id="localizacao" className="bg-cream py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="section-badge">Localizacao</p>
          <h2 className="section-title">Estamos em Nova Parnamirim.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Av. Abel Cabral, 681 - 6A - Nova Parnamirim, Parnamirim - RN,
            59150-410
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-dark" href={contact.mapsUrl} target="_blank" rel="noreferrer">
              Abrir no mapa
            </a>
            <a className="btn-light" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="location-card">
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
