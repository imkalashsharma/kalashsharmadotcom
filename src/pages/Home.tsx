import About from "@/components/About";
import EngineeringLabCards from "@/components/EngineeringLabCards";
import ProjectCard from "@/components/ProjectCard";
import SectionDivider from "@/components/SectionDivider";
import { projects } from "@/data/projects";
import { Image } from "antd";
import { Link } from "react-router";

const Home = () => {
  const avatarSrc: string = "/public/avatar/avatar_256.png";

  return (
    <div className="home">
      <div className="home__intro flex flex-col items-center justify-center mb-10 min-h-screen">
        <div className="hidden md:flex home__intro__avatar mb-2  md:mb-5">
          <Image width={150} height={150} src={avatarSrc} alt="avatar" />
        </div>

        <div className="md:hidden home__intro__avatar mb-2 md:mb-5">
          <Image width={100} height={100} src={avatarSrc} alt="avatar" />
        </div>

        <div className="home__intro__header text-xl md:text-3xl font-bold">
          Kalash Sharma
        </div>

        <div className="home__intro__subheader font-medium text-neutral-800 mb-5 md:mb-8 text-sm md:text-lg">
          Software Engineer @Accenture
        </div>

        <div className="home__intro__headline text-md md:text-xl font-bold mb-2 md:mb-4">
          Building systems, products & applied AI
        </div>

        <div className="home__intro__subheadline text-sm md:text-lg text-neutral-700 md:w-3/6 text-center mb-7">
          I build backend-heavy applications, distributed systems, and
          experimental products to solve real-world problems and understand how
          systems work under the hood
        </div>

        <div className="home__intro__sections flex items-center justify-center gap-4 mb-3">
          <Link className="text-blue-700 text-xs md:text-sm" to="/projects">
            View Projects
          </Link>

          <Link
            className="text-blue-700 text-xs md:text-sm"
            to="/engineering-lab"
          >
            Engineering Labs
          </Link>
        </div>
      </div>

      <SectionDivider
        heading="Selected Work"
        description="Projects I've built, shipped, and learned from."
      />

      <div className="home__work p-5 flex items-center justify-center mb-3">
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.heading} data={project} />
          ))}
        </div>
      </div>

      <SectionDivider
        heading="Engineering Labs"
        description="Experiments, prototypes, and rabbit holes I built to understand systems better."
      />

      <div className="home__engineeringLabs mb-5">
        <EngineeringLabCards />
      </div>

      <SectionDivider
        heading="Experience"
        description="Where I've worked and I've built."
      />

      <SectionDivider
        heading="Engineering Toolkit"
        description="Technologies I use to build and explore."
      />

      <SectionDivider
        heading="About"
        description="I like building things I don't fully understand fully."
      />

      <div className="home__about">
        <About />
      </div>
    </div>
  );
};

export default Home;
