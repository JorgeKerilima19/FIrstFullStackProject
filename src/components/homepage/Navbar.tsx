import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-5 justify-center">
        <Link
          className="border-b-2 border-transparent transition duration-150 hover:border-orange-700"
          to={""}
        >
          NavItem
        </Link>
        <Link
          className="border-b-2 border-transparent transition duration-150 hover:border-orange-700"
          to={""}
        >
          NavItem
        </Link>
        <Link
          className="border-b-2 border-transparent transition duration-150 hover:border-orange-700"
          to={""}
        >
          NavItem
        </Link>
        <Link
          className="border-b-2 border-transparent transition duration-150 hover:border-orange-700"
          to={""}
        >
          NavItem
        </Link>
        <Link
          className="border-b-2 border-transparent transition duration-150 hover:border-orange-700"
          to={""}
        >
          NavItem
        </Link>
      </ul>
    </nav>
  );
};
