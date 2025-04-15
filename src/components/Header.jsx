import React from "react";
// import Logo from "../assets/wordlogo.svg";
import Close from "../assets/close.svg";
import DarkModeToggle from "./DarkModeToggle";
import LightLogo from "../assets/Scoutripper-Logo.png"
import DarkLogo from "../assets/Scoutripper-Logo-White.png"
import { useDarkMode } from "../context/DarkModeContext";


const Header = ({ link }) => {
  const { isDarkMode } = useDarkMode();
  const logo = isDarkMode ? DarkLogo : LightLogo;
  return (
    <div className="top-2 left-0 right-0 h-16 flex items-center w-full justify-between px-6 z-50 pt-6">
      <img src={logo} alt="Logo" className="h-13" />
      <span className="gap-8 flex items-center">
        <DarkModeToggle/>
        <a href={link} target="_self">
          <img src={Close} alt="Close" className="h-[14px] cursor-pointer" />
        </a>
      </span>
    </div>
  );
};

export default Header;
