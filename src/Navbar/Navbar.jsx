import { useState } from "react";
import { navLinks } from "../data";

import logo from "../assets/images/logo.svg";
import hamburgerMenu from "../assets/images/icon-menu.svg";
import closeMenu from "../assets/images/icon-close-menu.svg";

import arrowUp from "../assets/images/icon-arrow-up.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleToggle = () => setNav(!nav);

  return (
    <>
      <nav className="m-8 flex items-center justify-between">
        {/* Logo and desktop links */}
        <div className="flex items-center gap-12">
          <img src={logo} alt="logo" />

          <nav className="hidden gap-8 md:flex md:items-center">
            {navLinks.map((navLink) => (
              <div key={navLink.label}>
                {navLink.dropDownItems ? (
                  <div>
                    <button className="flex items-center gap-2">
                      {navLink.label}
                      <img
                        src={arrowDown}
                        className="h-2 w-auto object-cover"
                        alt="/"
                      />
                    </button>

                    <ul>
                      {navLink.dropDownItems.map((item) => (
                        <li key={item.label}>
                          <a href={item.path} className="hidden">
                            {item.icon && <img src={item.icon} alt="" />}
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
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
        className={`fixed top-0 right-0 z-20 flex h-full w-[65%] flex-col bg-white p-4 transition-transform duration-300 ${
          nav ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="mt-16 flex flex-col gap-8">
          <li>Features</li>
          <li>Company</li>
          <li>Careers</li>
          <li>About</li>
        </ul>

        <div className="mt-12 flex flex-col items-center gap-6">
          <a href="/login">Login</a>
          <button className="hover rounded-lg border-2 border-black px-4 py-2 hover:cursor-pointer hover:border-2 hover:border-white hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out">
            Register
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
