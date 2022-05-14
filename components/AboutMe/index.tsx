import { aboutMe } from "../../libs/data";
import { useInView } from "react-intersection-observer";
import Footer from "../Footer";

export default function AboutMe() {
  const { ref, inView } = useInView();
  const { ref: titleRef, inView: titleInView } = useInView();

  return (
    <div id="1" className={titleInView ? `animate-card` : ``} ref={titleRef}>
      <h2 className="about-me-title">About me</h2>
      <div
        className={inView ? `animate-card about-me` : `  about-me`}
        ref={ref}
      >
        <div className="about-me-section">
          <p className="about-me-text">{aboutMe.text}</p>
          <img
            className="about-me-image"
            src={aboutMe.image}
            alt="Image showing Elliott Stevens"
          />
        </div>
      </div>
      <span className="project-video">
        <p>Take a look at my recent group project:</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IUmr7r1vAXE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </span>
      <Footer />
    </div>
  );
}
