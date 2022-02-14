import { aboutMe } from "../../libs/data";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const { ref, inView } = useInView();

  return (
    <div id="1" className={inView ? "animate-card" : ""} ref={ref}>
      <h2 className="about-me-title">About me</h2>
      <div className="about-me-section">
        <p className="about-me-text">{aboutMe.text}</p>
        <img className="about-me-image" src={aboutMe.image} alt="" />
      </div>
    </div>
  );
}
