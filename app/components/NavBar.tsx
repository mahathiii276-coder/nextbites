import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        <Link className="navbar__brand" href="/">
          <span className="navbar__logo" aria-hidden="true">
            N
          </span>
          <span>NextBites</span>
        </Link>
        <Link className="navbar__link" href="/">
          Home
        </Link>
      </div>
    </nav>
  );
}
