import { ArrowRight } from "react-feather";
import { Link } from "react-router";

export const ViewAllButton = ({ to }: { to: string }) => {
  return (
    <div className="viewAll flex items-center justify-center my-8">
      <Link
        className="text-sm hover:underline flex items-center justify-center"
        to={to}
      >
        <p>View All</p>
        <ArrowRight className="w-3 h-3 ml-1" />
      </Link>
    </div>
  );
};
