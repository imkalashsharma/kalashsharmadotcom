export type MajorProjectType = {
  id: string;
  img: string;
  heading: string;
  subheading: string;
  description?: string;
  tech: string[];
  live: string;
  github: string;
};

// major projects data
export const majorProjects: MajorProjectType[] = [];

// engineering builds data
export const engineeringBuilds: MajorProjectType[] = [];
