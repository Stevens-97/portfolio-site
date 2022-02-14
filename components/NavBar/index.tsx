import css from "./NavBar.module.scss";
export default function NavBar() {
  return (
    <nav className={css.navBar}>
      <a className="navbar-links" href="#1">
        About me
      </a>
      &nbsp;
      <a className="navbar-links" href="#2">
        Projects
      </a>
      &nbsp;
      <a className="navbar-links" href="#3">
        Contacts
      </a>
    </nav>
  );
}
