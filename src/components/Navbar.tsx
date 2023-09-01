import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from "../assets/images/logo.svg";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-white-500 shadow-sm shadow-red-500/40 fixed flex ${
        showNavbar ? "-translate-y-16" : ""
      } p-2 transition-transform duration-500  justify-between`}
    >
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" width={50} />
        <h1 className="text-black-50 font-bold text-2xl">DNews</h1>
      </div>
      <div className="flex items-center gap-7 pr-10">
        <ul className="flex gap-10 items-center h-full">
          <li>
            <Link className="px-2" to={"/cases"}>
              Cases
            </Link>
          </li>
          <li>
            <Link className="px-2" to={"/services"}>
              Services
            </Link>
          </li>
          <li>
            <Link className="px-2" to={"/about"}>
              About us
            </Link>
          </li>
          <li>
            <Link className="px-2" to={"/careers"}>
              Careers
            </Link>
          </li>
          <li>
            <Link className="px-2" to={"/blog"}>
              Blog
            </Link>
          </li>
          <li>
            <Link className="px-2" to={"/contact"}>
              Contact us
            </Link>
          </li>
        </ul>
        <button className="bg-transparent hover:bg-white-50 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent hover:bg-red-700 rounded">
          Contact Us
        </button>
      </div>
    </nav>
  );
};
