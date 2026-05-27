import { contact, faqs } from "@/data/site-content";

export function FaqSection() {
  return (
    <section className="faq-section">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="faq-contact">
          <p className="text-lg font-black">Precisa de ajuda agora?</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Nossa equipe pode orientar o melhor proximo passo para o seu pet.
          </p>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            {contact.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="section-badge">FAQ</p>
          <h2 className="section-title">Perguntas frequentes</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((question) => (
              <details className="faq-item" key={question}>
                <summary>{question}</summary>
                <p>
                  Sim. Chame a equipe no WhatsApp para confirmar a melhor
                  orientacao conforme o caso do seu pet.
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
