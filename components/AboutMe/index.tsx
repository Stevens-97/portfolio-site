import { aboutMe } from "../../libs/data";
export default function AboutMe() {
  return (
    <div>
      <p>{aboutMe.text}</p>
      <img src={aboutMe.text} alt="" />
    </div>
  );
}
