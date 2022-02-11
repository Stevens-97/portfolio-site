import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <footer className={"footer"}>
        Made with{" "}
        <img src="/netliheart.svg" alt="Netlify Logo" className={css.logo} />{" "}
        for you
      </footer>
    </>
  );
}
