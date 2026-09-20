import { Link } from "react-router";
import {
  engineeringLabs,
  type EngineeringLabType,
} from "../data/engineeringLabs";

const EngineeringLabsCard = ({ data }: { data: EngineeringLabType }) => {
  return (
    <div className="engineeringLabsCard flex flex-col mb-8">
      <div className="engineeringLabsCard__header text-2xl font-bold mb-1">
        {data.heading}
      </div>

      <div className="engineeringLabsCard__subheader text-md mb-3">
        {data.subheading}
      </div>

      <div className="engineeringLabsCard__tech flex gap-2 text-sm mb-5">
        {data.tech.map((tech) => (
          <p>{tech}</p>
        ))}
      </div>

      <div className="engineeringLabsCard__read text-xs text-blue-800">
        <a href={data.url} target="_blank">{`Read ->`}</a>
      </div>
    </div>
  );
};

const EngineeringLabCards = () => {
  return (
    <>
      <div className="engineeringLabCards p-5 flex items-center justify-center mb-3">
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {engineeringLabs.map((eng) => (
            <EngineeringLabsCard data={eng} />
          ))}
        </div>
      </div>

      <div className="engineeringLabCards__nav text-sm text-center">
        <Link to={"/engineering-labs"}>{`View all labs ->`}</Link>
      </div>
    </>
  );
};

export default EngineeringLabCards;
