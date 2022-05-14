import Link from "next/link";
import css from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={css.navBarSection}>
      <div className="navbar-links">
        <Link href="/">Home</Link>
      </div>
      &nbsp; &nbsp;
      <div className={css.navbarLinks}>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}
