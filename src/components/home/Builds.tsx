import { SubsectionHeader } from "@/components/SubsectionHeader";

// data
import { engineeringBuilds, majorProjects } from "@/data/builds";
import type { MajorProjectType } from "@/data/builds";
import { FlexContainer } from "@/components/FlexContainer";
import { ProjectCard } from "../ProjectCard";
import { ViewAllButton } from "../ViewAllButton";

export const Builds = () => {
  return (
    <div className="builds">
      <SubsectionHeader
        heading="Major Projects"
        subheading="Larger ideas, thoughtfully engineered into practical products."
      />

      <div className="builds__majorProjects mb-8">
        <FlexContainer>
          <MajorProjects />
        </FlexContainer>
      </div>

      <SubsectionHeader
        heading="Engineering Builds"
        subheading="Small experiments, curious explorations, and micro-builds created along the way."
      />

      <div className="builds__engineeringBuilds mb-8">
        <FlexContainer>
          <EngineeringBuilds />
        </FlexContainer>
      </div>
    </div>
  );
};

const MajorProjects = () => {
  return (
    <div className="majorProjects md:w-4/5">
      {majorProjects.length === 0 ? (
        <div className="text-center text-sm font-semibold">
          Currently cooking up something new.
        </div>
      ) : (
        <MajorProjectView data={majorProjects} />
      )}

      {majorProjects.length > 0 ? <ViewAllButton to={"/builds"} /> : null}
    </div>
  );
};

const MajorProjectView = ({ data }: { data: MajorProjectType[] }) => {
  return (
    <div className="majorProjectView">
      <div className="majorProjectView__highlight">
        <ProjectCard data={data[0]} highlight={true} />
      </div>

      <div className="majorProjectView__noHighlight grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.length > 1 ? (
          <ProjectCard data={data[1]} highlight={true} />
        ) : null}

        {data.length > 2 ? (
          <ProjectCard data={data[2]} highlight={true} />
        ) : null}
      </div>
    </div>
  );
};

const EngineeringBuilds = () => {
  return (
    <div className="engineeringBuilds md:w-4/5">
      {engineeringBuilds.length === 0 ? (
        <div className="text-center text-sm font-semibold">
          Stay tuned. More builds on the way.
        </div>
      ) : (
        <EngineeringBuildsView data={engineeringBuilds} />
      )}

      {engineeringBuilds.length > 0 ? <ViewAllButton to={"/builds"} /> : null}
    </div>
  );
};

const EngineeringBuildsView = ({ data }: { data: MajorProjectType[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {data.map((d) => (
        <ProjectCard key={d.id} data={d} highlight={false} />
      ))}
    </div>
  );
};
