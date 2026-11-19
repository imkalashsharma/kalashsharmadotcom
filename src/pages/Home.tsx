import { Hero } from "@/components/home/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { Builds } from "@/components/home/Builds";
import { AboutMe } from "@/components/home/AboutMe";
import { Writings } from "@/components/home/Writings";

export const Home = () => {
  return (
    <div className="home mt-20">
      <div className="home__hero">
        <Hero />
      </div>

      <SectionHeader
        heading="Builds"
        subheading="Some things I've built, some ideas I've explored, and a little engineering behind each."
      />

      <div className="home__builds">
        <Builds />
      </div>

      <SectionHeader
        heading="About Me"
        subheading="A little about the person behind the code."
      />

      <div className="home__aboutMe">
        <AboutMe />
      </div>

      <SectionHeader
        heading="Writings"
        subheading="A space for sharing ideas, documenting learnings, and exploring the craft of software engineering."
      />

      <div className="home__writings">
        <Writings />
      </div>
    </div>
  );
};
