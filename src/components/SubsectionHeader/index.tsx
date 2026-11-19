interface SubsectionHeaderProps {
  heading: string;
  subheading: string;
}

export const SubsectionHeader = ({
  heading,
  subheading,
}: SubsectionHeaderProps) => {
  return (
    <div className="subSectionHeader mb-8">
      <div className="subSectionHeader__heading text-sm md:text-md font-bold mb-1 secondary-text">
        {heading}
      </div>

      <div className="subSectionHeader__subheading text-xs md:text-sm">
        {subheading}
      </div>
    </div>
  );
};
