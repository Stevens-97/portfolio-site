import { data, DataStructure } from "../../libs/data";
import Project from "../Project";

export default function ProjectPortfolio() {
  return (
    <div>
      {data.map((example) => {
        return (
          <Project
            project={example.project}
            image={example.image}
            repo={example.repo}
            tech={example.tech}
            text={example.text}
          />
        );
      })}
    </div>
  );
}
