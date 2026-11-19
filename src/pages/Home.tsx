import { Hero } from "@/components/home/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { Builds } from "@/components/home/Builds";

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
    </div>
  );
};
