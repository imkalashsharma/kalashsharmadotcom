import { NavLink } from "react-router";

type NavbarLinkType = {
  id: string;
  label: string;
  path: string;
};

export const Navbar = () => {
  const links: NavbarLinkType[] = [
    {
      id: "builds",
      label: "Builds",
      path: "/builds",
    },
    {
      id: "writings",
      label: "Writings",
      path: "/writings",
    },
  ];

  return (
    <div className="navbar flex items-center">
      <div className="navbar__banner w-1/6 font-semibold">Kalash Sharma.</div>

      <div className="navbar__links flex justify-end w-5/6 items-center">
        {links.map((link) => (
          <NavbarLink key={link.id} data={link} />
        ))}
      </div>
    </div>
  );
};

const NavbarLink = ({ data }: { data: NavbarLinkType }) => {
  return (
    <NavLink to={data.path} className="navbarLink mx-3 text-sm">
      {data.label}
    </NavLink>
  );
};
