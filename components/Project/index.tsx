import { DataStructure } from "../../libs/data";
import { useInView } from "react-intersection-observer";

export default function Project({
  project,
  images,
  repo,
  tech,
  text,
}: DataStructure) {
  const { ref, inView } = useInView();

  return (
    <div className={inView ? "animate-card" : ""}>
      <div className="project" ref={ref}>
        <p className="project-title">{project}</p>
        <div className="project-main-sections">
          <div className="project-info-section">
            <div className="project-text-section">
              <p>{text}</p>
              <p>{tech}</p>
              <div className="repo-link">
                <a href={repo} target={"_blank"}>
                  <img
                    className="github-image"
                    src="https://i.lensdump.com/i/rl4SJA.png"
                  ></img>
                </a>
              </div>
            </div>

            <div>
              <img className="project-images" src={images[0]} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
