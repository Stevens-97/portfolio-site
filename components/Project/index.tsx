import { DataStructure } from "../../libs/data";

interface ProjectProps {
  value: DataStructure;
}

export default function Project({
  project,
  images,
  repo,
  tech,
  text,
}: DataStructure) {
  return (
    <div className="project">
      <div className="project-title">
        <h3>{project}</h3>
      </div>
      <div className="project-main-sections">
        <div className="project-info-section">
          <div className="project-text-section">
            <h4>{text}</h4>
            <h5>{tech}</h5>
            <div>{repo}</div>
          </div>

          <div>
            <img className="project-images" src={images[0]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
