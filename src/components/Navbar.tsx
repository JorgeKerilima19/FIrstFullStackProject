import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import backToTop from "../helpers/backToTop";

import logo from "../assets/images/logo.svg";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const [showSmallMenu, setShowSmallMenu] = useState(true);

  const handleSmallMenuDisplay = () => {
    if (window.innerWidth > 768) {
      setShowSmallMenu(true);
    } else {
      setShowSmallMenu((showSmallMenu) => !showSmallMenu);
    }
  };

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

    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 768) {
        setShowSmallMenu(true);
      } else {
        setShowSmallMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <nav
        className={`bg-white w-full z-10 shadow-sm shadow-red-700 fixed top-0 flex flex-col md:flex-row transform h-full md:h-20 overflow-auto ${
          showSmallMenu
            ? "md:-translate-x-0 active"
            : "transform -translate-x-[100%]"
        } ${
          !showNavbar
            ? "md:-translate-x-0 md:-translate-y-16 md:border-b-red-700 border-b-2 md:bg-red-700"
            : "bg-white "
        } transition-transform duration-1000 ease-in-out p-2 justify-between gap-4`}
      >
        <NavLink
          onClick={() => {
            backToTop();
            handleSmallMenuDisplay();
          }}
          to={"/"}
          className="flex gap-2 items-center"
        >
          <img src={logo} alt="logo" width={50} />
          <h1
            className={`text-black-50 font-bold text-2xl ${
              showNavbar ? "" : "text-white"
            }`}
          >
            DNews
          </h1>
        </NavLink>
        <Link
          onClick={() => {
            backToTop();
            handleSmallMenuDisplay();
          }}
          to="/contact"
          className={`flex flex-col md:flex-row items-center justify-between gap-4 md:gap-7 md:pr-4 lg:pr-10 ${
            showNavbar ? "" : "md:hidden"
          } h-3/4 md:h-auto`}
        >
          <ul className="flex flex-col md:flex-row gap-5 lg:gap-10 items-center">
            <li>
              <NavLink
                onClick={() => {
                  backToTop();
                  handleSmallMenuDisplay();
                }}
                className={(classname) =>
                  classname.isActive
                    ? "px-2 border-b-red-700 border-b-2"
                    : "px-2"
                }
                to={"/cases"}
              >
                Cases
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  backToTop();
                  handleSmallMenuDisplay();
                }}
                className={(classname) =>
                  classname.isActive
                    ? "px-2 border-b-red-700 border-b-2"
                    : "px-2"
                }
                to={"/services"}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  backToTop();
                  handleSmallMenuDisplay();
                }}
                className={(classname) =>
                  classname.isActive
                    ? "px-2 border-b-red-700 border-b-2"
                    : "px-2"
                }
                to={"/about"}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  backToTop();
                  handleSmallMenuDisplay();
                }}
                className={(classname) =>
                  classname.isActive
                    ? "px-2 border-b-red-700 border-b-2"
                    : "px-2"
                }
                to={"/careers"}
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  backToTop();
                  handleSmallMenuDisplay();
                }}
                className={(classname) =>
                  classname.isActive
                    ? "px-2 border-b-red-700 border-b-2"
                    : "px-2"
                }
                to={"/blog"}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  backToTop();
                  handleSmallMenuDisplay();
                }}
                className={(classname) =>
                  classname.isActive
                    ? "px-2 border-b-red-700 border-b-2"
                    : "px-2"
                }
                to={"/contact"}
              >
                Contact us
              </NavLink>
            </li>
          </ul>
          <button className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent hover border-b-red-700 border-b-2 rounded">
            Chat with Us
          </button>
        </Link>
      </nav>
      <div
        className={`${
          showSmallMenu ? "active" : ""
        } hamburger-menu bg-white border-red-700 border-2 rounded-full place-items-center fixed bottom-4`}
        onClick={handleSmallMenuDisplay}
      >
        <span
          className={`${
            showSmallMenu ? "active" : ""
          } hamburger__bar bg-red-700`}
        ></span>
        <span
          className={`${
            showSmallMenu ? "active" : ""
          } hamburger__bar bg-red-700`}
        ></span>
        <span
          className={`${
            showSmallMenu ? "active" : ""
          } hamburger__bar bg-red-700`}
        ></span>
      </div>
    </>
  );
};
