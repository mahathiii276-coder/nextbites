import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell message-page">
      <p className="hero__eyebrow">404 · Recipe not found</p>
      <h1>Looks like this bite is missing.</h1>
      <p className="hero__description">
        We couldn&apos;t find that recipe. Head back to the kitchen and pick
        another favorite.
      </p>
      <Link className="message-page__action" href="/">
        Browse all recipes
      </Link>
    </main>
  );
}
