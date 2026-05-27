import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="about-photo">
          <Image
            className="object-cover object-top"
            src="/fotos/servicos/cuidado-pet-limpa.png"
            alt="Cuidado veterinario com filhote"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
          />
        </div>
        <div>
          <p className="section-badge">Sobre nos</p>
          <h2 className="section-title">
            Uma rotina de cuidado feita com carinho e estrutura.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
            A All Pet Center 24h une clinica veterinaria, centro cirurgico,
            internamento, loja fisica, pet shop e banho e tosa para facilitar a
            vida de tutores em Parnamirim e regiao.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="mission-card">
              <span>Nossa missao</span>
              <p>Cuidar com agilidade, acolhimento e orientacao clara.</p>
            </div>
            <div className="mission-card">
              <span>Nosso cuidado</span>
              <p>Atendimento integrado da consulta a recuperacao.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
