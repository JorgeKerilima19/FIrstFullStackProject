import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white-500 shadow-sm shadow-red-500/40 sticky top-0 p-2 flex justify-between">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" width={50} />
        <h1 className="text-black-50 font-bold text-2xl">DNews</h1>
      </div>
      <div className="flex items-center gap-7 pr-10">
        <ul className="flex gap-10 items-center h-full">
          <li>
            <Link className="px-2" to={"/service"}>Cases</Link>
          </li>
          <li>
            <Link className="px-2" to={"/service"}>Services</Link>
          </li>
          <li>
            <Link className="px-2" to={"/service"}>About us</Link>
          </li>
          <li>
            <Link className="px-2" to={"/service"}>Careers</Link>
          </li>
          <li>
            <Link className="px-2" to={"/service"}>Blog</Link>
          </li>
          <li>
            <Link className="px-2" to={"/service"}>Contact us</Link>
          </li>
        </ul>
        <button className="bg-transparent hover:bg-white-50 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent hover:bg-red-700 rounded">
          Contact Us
        </button>
      </div>
    </nav>
  );
};
