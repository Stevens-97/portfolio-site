import { data, DataStructure } from "../../libs/data";
import Project from "../Project";

export default function ProjectPortfolio() {
  return (
    <div id="2">
      <h3 className="portfolio-section-title">Portfolio</h3>
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
  );
}
