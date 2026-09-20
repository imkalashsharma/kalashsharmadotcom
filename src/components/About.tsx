const About = () => {
  return (
    <div className="about p-5 flex items-center justify-center text-neutral-800">
      <div className="w-2/3">
        <div className="about__details_1 text-center mb-4">
          I'm a software engineer who enjoys building systems, experimenting
          with new ideas, and going down technical rabbit holes to understand
          what's happening underneath.
        </div>

        <div className="about__details_2 text-center mb-6">
          I'm particularly interested in backend systems, distributed systems,
          and applied AI - and I learn best by building.
        </div>

        <div className="about__details_2 text-center text-md font-bold mb-1">
          Currently exploring
        </div>

        <div className="about__details_2 text-center font-medium text-sm">
          Distributed systems · AI agents · System design
        </div>
      </div>
    </div>
  );
};

export default About;
