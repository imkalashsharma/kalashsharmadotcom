import type { WritingsType } from "@/data/writings";
import { FlexContainer } from "@/components/FlexContainer";
import { SubsectionHeader } from "@/components/SubsectionHeader";
import { WritingCard } from "@/components//WritingCard";

// data
import {
  blogsData,
  engineeringDissectionsData,
  caseStudiesData,
} from "@/data/writings";

export const Writings = () => {
  return (
    <div className="writings">
      <SubsectionHeader
        heading="Blogs"
        subheading="Thoughts, learnings, and perspectives on technology, development, and everything in between."
      />

      <WritingGridView data={blogsData} />

      <SubsectionHeader
        heading="Case Studies"
        subheading="A closer look at the problems I've tackled, decisions I've made, and solutions I've built."
      />

      <WritingGridView data={caseStudiesData} />

      <SubsectionHeader
        heading="Engineering Dissections"
        subheading="Deeper explorations of engineering concepts, system design, architecture, and technical ideas."
      />

      <WritingGridView data={engineeringDissectionsData} />
    </div>
  );
};

const WritingGridView = ({ data }: { data: WritingsType[] }) => {
  return (
    <FlexContainer>
      {data.length > 0 ? (
        <div className="writingGridView md:w-4/5 grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <WritingCard key={data[0].id} data={data[0]} />
          {data.length > 1 ? (
            <WritingCard key={data[1].id} data={data[1]} />
          ) : null}
          {data.length > 2 ? (
            <WritingCard key={data[2].id} data={data[2]} />
          ) : null}
        </div>
      ) : (
        <div className="text-center text-sm font-semibold">
          Work in progress!
        </div>
      )}
    </FlexContainer>
  );
};
