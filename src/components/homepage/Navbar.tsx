import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="text-lg absolute transform translate-x-[-50%] left-2/4 bottom-2 w-full text-white md:text-black md:relative font-bold">
      <ul className="flex flex-wrap gap-2 md:gap-5 justify-around items-center bg-red-700 md:bg-transparent pb-2 md:pb-0">
        <Link
          className="px-5 py-1 border-b-2 border-transparent transition duration-150 md:hover:border-orange-700 flex items-center"
          to={""}
        >
          Branding
        </Link>
        <Link
          className="px-5 py-1 border-b-2 border-transparent transition duration-150 md:hover:border-orange-700"
          to={""}
        >
          Design Products
        </Link>
        <Link
          className="px-5 py-1 border-b-2 border-transparent transition duration-150 md:hover:border-orange-700"
          to={""}
        >
          Apps development
        </Link>
      </ul>
    </nav>
  );
};
