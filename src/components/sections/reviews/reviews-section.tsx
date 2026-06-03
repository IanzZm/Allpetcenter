import { reviews } from "@/data/site-content";
import shared from "@/components/styles/shared.module.css";
import styles from "./reviews-section.module.css";

export function ReviewsSection() {
  return (
    <section id="avaliacoes" className={styles.reviewsSection}>
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className={`${shared.sectionBadge} ${shared.light}`}>Avaliações</p>
          <h2 className={`${shared.sectionTitle} ${styles.reviewsTitle} mx-auto`}>
            O que os tutores dizem sobre a All Pet.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <article className={styles.reviewCard} key={`${review.name}-${review.source}`}>
              <div className={styles.reviewStars} aria-label="5 estrelas">
                {"★★★★★"}
              </div>
              <h3>{review.name}</h3>
              <p className={styles.reviewSource}>{review.source}</p>
              <p className={styles.reviewText}>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
