import React, { useState } from "react";
import logoImg from "..//assets/logo.jpg"
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-3 sm:px-10 pt-6 md:px-20">
      <div className="flex gap-2 items-center">
        <img className="rounded-full w-10 sm:w-14" src={logoImg} alt="" />
      <span className="text-lg sm:text-xl font-bold tracking-wide">DeveloperVishal</span>
      </div>
      <ul
        className={`${
          menu ? "block" : "hidden"
        }    mx-5 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 flex max-md:flex-col justify-center gap-6 max-md:w-full max-md:h-[60vh]  `}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() =>{
            openMenu(!menu)
            setShowmenu(!showMenu)
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;