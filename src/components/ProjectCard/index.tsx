import type { MajorProjectType } from "@/data/builds";
import { Image } from "antd";
import { GitHub, Globe } from "react-feather";
import { Pill } from "@/components/Pill";

interface ProjectCardProps {
  data: MajorProjectType;
  highlight: boolean;
}

export const ProjectCard = ({ data, highlight = false }: ProjectCardProps) => {
  return (
    <div className="projectCard mb-10">
      <div className="projectCard__img mb-3">
        <Image className="rounded-md" preview={false} src={data.img} />
      </div>

      <div className="projectCard__heading text-lg md:text-xl font-bold mb-1">
        {data.heading}
      </div>

      <div className="projectCard__subheading text-sm md:text-md">
        {data.subheading}
      </div>

      <div className="projectCard__tech flex flex-wrap gap-3 my-5">
        {data.tech.map((tech) => (
          <Pill label={tech} />
        ))}
      </div>

      <div className="projectCard__links flex items-center justify-center md:justify-start gap-4 mt-5">
        <a
          href={data.github}
          className="projectCard__links__github"
          target="_blank"
          aria-label="github link"
        >
          <GitHub className="w-4 h-4 md:w-5 md:h-5" />
        </a>

        <a
          href={data.live}
          className="projectCard__links__live"
          target="_blank"
          aria-label="live link"
        >
          <Globe className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
    </div>
  );
};
