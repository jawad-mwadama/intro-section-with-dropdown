import { useState } from "react";
import { navLinks } from "../data";

import logo from "../assets/images/logo.svg";
import hamburgerMenu from "../assets/images/icon-menu.svg";
import closeMenu from "../assets/images/icon-close-menu.svg";

import arrowUp from "../assets/images/icon-arrow-up.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [openTab, setOpenTab] = useState(null);

  const handleToggle = () => {
    setNav(!nav);
    setOpenTab(null);
  };

  return (
    <>
      <nav className="m-8 flex items-center justify-between">
        {/* Logo and desktop links */}
        <div className="flex items-center gap-12">
          <img src={logo} alt="logo" />

          <nav className="hidden gap-8 md:flex md:items-center">
            {navLinks.map((navLink, index) => (
              <div key={navLink.label}>
                {navLink.dropDownItems ? (
                  <div
                    className="relative h-fit w-fit"
                    onMouseEnter={() => setNav(true)}
                    onMouseLeave={() => setNav(false)}
                  >
                    <button
                      className="relative flex items-center gap-2"
                      onClick={() =>
                        setOpenTab(openTab === index ? null : index)
                      }
                    >
                      {navLink.label}
                      <img
                        src={openTab === index ? arrowUp : arrowDown}
                        className="h-2 w-auto object-cover"
                        alt="/"
                      />
                    </button>

                    {/* focus here */}

                    {openTab === index && (
                      <ul className="absolute top-full left-0 z-10 mt-3 w-42 space-y-2 rounded-lg bg-white p-4 px-7 shadow-xl">
                        {navLink.dropDownItems.map((item) => (
                          <li key={item.label} className="">
                            <a
                              href={item.path}
                              className="flex items-center gap-3 rounded-md"
                            >
                              <img
                                src={item.icon}
                                alt=""
                                className="h-4 w-auto"
                              />
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a href={navLink.path}>{navLink.label}</a>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="/login">Login</a>
          <button className="hover rounded-lg border-2 border-black px-4 py-2 hover:cursor-pointer hover:border-2 hover:border-white hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out">
            Register
          </button>
        </div>

        {/* Hamburger button */}
        <button
          type="button"
          onClick={handleToggle}
          className="z-30 block md:hidden"
        >
          <img
            src={nav ? closeMenu : hamburgerMenu}
            alt={nav ? "Close menu" : "Open menu"}
          />
        </button>
      </nav>

      {/* background for active mobile menu */}

      {/* Dark overlay */}
      {nav && (
        <div
          onClick={handleToggle}
          className="fixed inset-0 z-10 bg-black/50 md:hidden"
        />
      )}

      {/* Mobile navigation */}

      <nav
        className={`fixed top-0 right-0 z-20 flex h-full w-[65%] flex-col bg-white p-6 pt-24 transition-transform duration-300 ${
          nav ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((navLink, index) => (
            <div key={navLink.label} className="text-gray-600 hover:text-black">
              {navLink.dropDownItems ? (
                <>
                  <button
                    className="flex items-center gap-2"
                    onClick={() => setOpenTab(openTab === index ? null : index)}
                  >
                    {navLink.label}

                    <img
                      src={openTab === index ? arrowUp : arrowDown}
                      className="h-2 w-auto"
                      alt=""
                    />
                  </button>

                  {openTab === index && (
                    <ul className="mt-4 flex flex-col gap-4 pl-6">
                      {navLink.dropDownItems.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.path}
                            className="flex items-center gap-3 text-gray-600 hover:text-black"
                          >
                            {item.icon && (
                              <img
                                src={item.icon}
                                alt=""
                                className="h-4 w-4 object-contain"
                              />
                            )}
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a href={navLink.path}>{navLink.label}</a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <a href="/login">Login</a>

          <button className="w-full rounded-lg border-2 border-black px-4 py-2 transition-colors hover:bg-black hover:text-white">
            Register
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
