import css from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={css.navBarSection}>
      <a className="navbar-links" href="#1">
        About me
      </a>
      &nbsp; &nbsp;
      <a className={css.navbarLinks} href="#2">
        Projects
      </a>
      &nbsp; &nbsp;
      <a className={css.navbarLinks} href="#3">
        Contacts
      </a>
    </nav>
  );
}
