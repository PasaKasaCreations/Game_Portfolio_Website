import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import navList from "../data/navlist";
import NavbarContext from "../context/NavbarContext";

function Navbar() {
  const { isNavbarActive, changeNavbarState } = useContext(NavbarContext);

  return (
    <div className="flex items-center justify-between w-screen h-24 bg-slate-600 bg-opacity-90 px-16">
      <div>
        <h1 className="font-semibold text-3xl text-white font-Poppins">
          ARSHA
        </h1>
      </div>

      <div className="hidden lg:block">
        <div className="flex gap-7 text-md font-Poppins">
          {navList.map((navElement) => {
            return (
              <div
                key={navElement.id}
                className={`cursor-pointer ${
                  navElement.isActive ? "text-blue-300" : "text-white"
                }`}
              >
                <a href="#home">{navElement.linkName}</a>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`${isNavbarActive && "hidden"} cursor-pointer lg:hidden`}
        onClick={() => {
          changeNavbarState(true);
        }}
      >
        <GiHamburgerMenu size={25} className="text-white" />
      </div>
    </div>
  );
}

export default Navbar;
