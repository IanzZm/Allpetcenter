import { reviews } from "@/data/site-content";

export function ReviewsSection() {
  return (
    <section id="avaliacoes" className="reviews-section">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-badge light">Avaliacoes</p>
          <h2 className="section-title reviews-title mx-auto">
            O que os tutores dizem sobre a All Pet.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <article className="review-card" key={`${review.name}-${review.source}`}>
              <div className="review-stars" aria-label="5 estrelas">
                {"★★★★★"}
              </div>
              <h3>{review.name}</h3>
              <p className="review-source">{review.source}</p>
              <p className="review-text">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
