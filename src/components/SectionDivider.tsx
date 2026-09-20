export interface SectionDividerProps {
  heading: string;
  description: string;
}

const SectionDivider = ({ heading, description }: SectionDividerProps) => {
  return (
    <div className="home__selectedWorkSeparator flex flex-col items-center justify-center bg-mist-950 py-6 mb-3">
      <div className="home__selectedWorkSeparator__label font-bold mb-2 text-md md:text-xl text-neutral-200">
        {heading.toUpperCase()}
      </div>

      <div className="home__selectedWorkSeparator__details text-neutral-200 text-xs md:text-lg">
        {description}
      </div>
    </div>
  );
};

export default SectionDivider;
