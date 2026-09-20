import { Button } from "antd";

// data
import { socialData } from "@/data/socials";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center px-4 pt-3">
      <div className="navbar__banner text-sm md:text-lg font-medium">
        <Link to="/">Kalash Sharma</Link>
      </div>

      <div className="hidden md:flex navbar__actions gap-2 items-center">
        {socialData.map((social) => (
          <Button
            variant="link"
            type="link"
            href={social.url}
            target="_blank"
            color="default"
            rel="noopener noreferrer"
          >
            {social.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
