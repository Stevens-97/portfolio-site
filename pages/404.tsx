import Link from "next/link";
import css from "../styles/home.module.scss";

export default function NotFound() {
  return (
    <div className={css.container}>
      <h1>Looks like you've made a wrong turn!</h1>
      <h2>That page does not seem to exist.</h2>
      <p>
        Click <Link href="/">here</Link> to get back to saftey.
      </p>
    </div>
  );
}
