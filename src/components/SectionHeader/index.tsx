interface SectionHeaderProps {
  heading: string;
  subheading: string;
}

export const SectionHeader = ({ heading, subheading }: SectionHeaderProps) => {
  return (
    <div className="sectionHeader my-24 text-center flex flex-col items-center justify-center">
      <div className="sectionHeader__heading text-lg md:text-xl font-bold mb-1">
        {heading}
      </div>

      <div className="sectionHeader__subheading text-xs w-4/5 md:text-md">
        {subheading}
      </div>
    </div>
  );
};
