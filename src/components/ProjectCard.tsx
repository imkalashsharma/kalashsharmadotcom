import type { Project } from "@/data/projects";
import { Card } from "antd";

const ProjectCard = ({ data }: { data: Project }) => {
  return (
    <Card className="projectCard">
      <div className="projectCard__header mb-5">
        <div className="projectCard__header__title text-xl md:text-2xl font-bold mb-1">
          {data.heading}
        </div>

        <div className="projectCard__header__subtitle text-sm md:text-md font-medium">
          {data.subheading}
        </div>
      </div>

      <div className="projectCard__icon mb-5 flex items-center justify-center">
        <img className="h-20 w-20" src={data.icon} alt={data.heading} />
      </div>

      <div className="projectCard__description mb-5 text-xs md:text-sm">
        {data.description}
      </div>

      <div className="projectCard__built mb-5">
        <div className="projectCard__built__heading text-xs font-bold mb-2">
          BUILT WITH
        </div>

        <div className="flex items-center gap-3">
          {data.tech.map((tech) => (
            <p className="text-xs md:text-sm">{tech}</p>
          ))}
        </div>
      </div>

      <div className="projectCard__urls">
        <a className="text-xs mr-5" href={data.url.github}>{`GitHub ->`}</a>

        <a
          className="text-xs"
          href={data.url.docs}
        >{`Read the Engineering ->`}</a>
      </div>
    </Card>
  );
};

export default ProjectCard;
