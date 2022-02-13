import { DataStructure } from "../../libs/data";

interface ProjectProps {
  value: DataStructure;
}

export default function Project({
  project,
  image,
  repo,
  tech,
  text,
}: DataStructure) {
  return (
    <div>
      <div>
        <h3>{project}</h3>
      </div>
      <div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h4>{text}</h4>
          <h5>{tech}</h5>
        </div>
        <div>
          <div>{repo}</div>
        </div>
      </div>
    </div>
  );
}
