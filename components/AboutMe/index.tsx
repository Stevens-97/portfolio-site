import { aboutMe } from "../../libs/data";
export default function AboutMe() {
  return (
    <div className="about-me-section" id="1">
      <p className="about-me-text">{aboutMe.text}</p>
      <img className="about-me-image" src={aboutMe.image} alt="" />
    </div>
  );
}
