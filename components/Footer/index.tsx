import css from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={css.footer}>
        Made with{" "}
        <img src="/netliheart.svg" alt="Netlify Logo" className={"logo"} /> for
        you
      </footer>
    </>
  );
}
