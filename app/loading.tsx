export default function Loading() {
  return (
    <main className="page-shell" aria-busy="true">
      <section className="hero">
        <p className="hero__eyebrow">Fresh ideas for every table</p>
        <h1>Getting things ready...</h1>
        <p className="hero__description" role="status">
          Your next delicious idea is on its way.
        </p>
      </section>

      <div className="recipe-grid" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => (
          <div className="loading-card" key={index}>
            <div className="loading-card__top" />
            <div className="loading-card__content">
              <div className="loading-card__line loading-card__line--short" />
              <div className="loading-card__line" />
              <div className="loading-card__line loading-card__line--medium" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
