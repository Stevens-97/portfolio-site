import css from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={css.footer}>
        Made with{" "}
        <img src="/netliheart.svg" alt="Netlify Logo" className={css.logo} />{" "}
        for you
      </footer>
    </>
  );
}
