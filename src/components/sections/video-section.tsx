import { ReelPreview } from "@/components/common/reel-preview";
import { contact } from "@/data/site-content";

export function VideoSection() {
  return (
    <section id="video" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="section-badge">Na pratica</p>
          <h2 className="section-title">Veja de perto como o cuidado acontece.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Destaque para casos, bastidores e momentos reais da clinica. Ao
            clicar, o Reel abre em uma janela por cima da pagina.
          </p>
          <a className="orange-link" href={contact.instagramUrl} target="_blank" rel="noreferrer">
            Acompanhar no Instagram
          </a>
        </div>

        <ReelPreview />
      </div>
    </section>
  );
}
