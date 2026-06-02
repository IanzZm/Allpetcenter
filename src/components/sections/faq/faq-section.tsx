import { contact, faqs } from "@/data/site-content";
import shared from "@/components/styles/shared.module.css";
import styles from "./faq-section.module.css";

export function FaqSection() {
  return (
    <section className={styles.faqSection}>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className={styles.faqContact}>
          <p className="text-lg font-black">Precisa de ajuda agora?</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Nossa equipe pode orientar o melhor proximo passo para o seu pet.
          </p>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            {contact.phoneDisplay}
          </a>
        </div>

        <div>
          <p className={shared.sectionBadge}>FAQ</p>
          <h2 className={shared.sectionTitle}>Perguntas frequentes</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((question) => (
              <details className={styles.faqItem} key={question}>
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
