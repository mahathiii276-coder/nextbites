"use client";

type ErrorBoundaryProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorBoundary({ reset }: ErrorBoundaryProps) {
  return (
    <main className="page-shell message-page" role="alert">
      <p className="hero__eyebrow">Something went wrong</p>
      <h1>Let&apos;s try that again.</h1>
      <p className="hero__description">
        We hit an unexpected snag while preparing your page. Please try again.
      </p>
      <button
        className="message-page__action"
        onClick={() => reset()}
        type="button"
      >
        Try again
      </button>
    </main>
  );
}
