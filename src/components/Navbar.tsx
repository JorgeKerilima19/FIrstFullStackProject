import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import backToTop from "../helpers/backToTop";

import logo from "../assets/images/logo.svg";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <nav
      className={`w-auto md:w-full z-10 shadow-sm shadow-red-700 fixed top-0 flex flex-col md:flex-row transform h-full md:h-20 ${
        !showNavbar
          ? "-translate-x-80 md:-translate-x-0 md:-translate-y-16 md:border-b-red-700 border-b-2 bg-red-700"
          : "bg-white "
      } transition-transform duration-1000 ease-in-out p-2 justify-between gap-4`}
    >
      <NavLink onClick={backToTop} to={"/"} className="flex gap-2 items-center">
        <img src={logo} alt="logo" width={50} />
        <h1
          className={`text-black-50 font-bold text-2xl ${
            showNavbar ? "" : "text-white"
          }`}
        >
          DNews
        </h1>
      </NavLink>
      <div
        className={`flex flex-col md:flex-row items-center justify-between gap-4 md:gap-7 md:pr-4 lg:pr-10 ${
          showNavbar ? "" : "hidden"
        } h-3/4 md:h-auto`}
      >
        <ul className="flex flex-col md:flex-row gap-5 lg:gap-10 items-center">
          <li>
            <NavLink
              onClick={backToTop}
              className={(classname) =>
                classname.isActive ? "px-2 border-b-red-700 border-b-2" : "px-2"
              }
              to={"/cases"}
            >
              Cases
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={backToTop}
              className={(classname) =>
                classname.isActive ? "px-2 border-b-red-700 border-b-2" : "px-2"
              }
              to={"/services"}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={backToTop}
              className={(classname) =>
                classname.isActive ? "px-2 border-b-red-700 border-b-2" : "px-2"
              }
              to={"/about"}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={backToTop}
              className={(classname) =>
                classname.isActive ? "px-2 border-b-red-700 border-b-2" : "px-2"
              }
              to={"/careers"}
            >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={backToTop}
              className={(classname) =>
                classname.isActive ? "px-2 border-b-red-700 border-b-2" : "px-2"
              }
              to={"/blog"}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={backToTop}
              className={(classname) =>
                classname.isActive ? "px-2 border-b-red-700 border-b-2" : "px-2"
              }
              to={"/contact"}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
        <button className="bg-transparent hover:bg-white-50 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent hover border-b-red-700 border-b-2 rounded">
          Contact Us
        </button>
      </div>
    </nav>
  );
};
