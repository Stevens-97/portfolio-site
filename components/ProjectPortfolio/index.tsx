import { data, DataStructure } from "../../libs/data";
import Project from "../Project";
import { useInView } from "react-intersection-observer";

export default function ProjectPortfolio() {
  const { ref, inView } = useInView();

  return (
    <div id="2">
      <h3
        className={
          inView
            ? `animate-card portfolio-section-title`
            : `portfolio-section-title`
        }
        ref={ref}
      >
        Portfolio
      </h3>
      <div className="project-cards">
        {data.map((example, index) => {
          return (
            <Project
              project={example.project}
              images={example.images}
              repo={example.repo}
              tech={example.tech}
              text={example.text}
            />
          );
        })}
      </div>
    </div>
  );
}
