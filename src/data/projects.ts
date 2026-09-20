// projects data

export type Project = {
  heading: string;
  subheading: string;
  icon: string;
  description: string;
  tech: string[];
  url: {
    github: string;
    docs: string;
  };
};

export const projects: Project[] = [
  {
    heading: "Inferno",
    subheading: "Chaos Engineering Toolkit for Spring Boot",
    icon: "/icons/inferno.png",
    description:
      "A lightweight Java library that lets developers inject controlled failures into Spring Boot applications to test resilience and failure-handling behavior.",
    tech: ["Java", "Spring Boot", "AOP", "Maven"],
    url: {
      github: "",
      docs: "",
    },
  },
];
