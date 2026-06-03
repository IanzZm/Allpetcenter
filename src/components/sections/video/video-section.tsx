import { ReelPreview } from "@/components/common/reel-preview";
import shared from "@/components/styles/shared.module.css";
import { contact } from "@/data/site-content";

export function VideoSection() {
  return (
    <section id="video" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className={shared.sectionBadge}>Na prática</p>
          <h2 className={shared.sectionTitle}>Veja de perto como o cuidado acontece.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Destaque para casos, bastidores e momentos reais da clínica. Ao
            clicar, o Reel abre em uma janela por cima da página.
          </p>
          <a className={`${shared.button} ${shared.orangeLink}`} href={contact.instagramUrl} target="_blank" rel="noreferrer">
            Acompanhar no Instagram
          </a>
        </div>

        <ReelPreview />
      </div>
    </section>
  );
}
