import css from "./Footer.module.scss";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView();

  return (
    <>
      <footer id="3" className={css.footer}>
        <div className={inView ? "animate-card" : ""} ref={ref}>
          <h4>Contact me on my socials:</h4>
          <div className={css.socials}>
            <a
              href="https://www.linkedin.com/in/elliottstevens97/"
              target={"_blank"}
            >
              <img
                src="https://i1.lensdump.com/i/rl4bRm.png"
                alt=""
                className={css.linkedinImage}
              />
            </a>
            <div className={css.linkedinImage}>
              <a href="https://github.com/Stevens-97" target={"_blank"}>
                <img
                  src="https://i3.lensdump.com/i/rl4UeZ.png"
                  alt=""
                  className={css.githubImage}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
