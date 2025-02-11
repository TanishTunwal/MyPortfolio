import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="text-white flex justify-center align-top shadow-lg sticky top-0 z-50">
      <div className="font-bold col-span-1 flex items-center justify-center">
        <ul className="flex space-x-12 p-4">
          <li className="relative group">
            <Link to="home" smooth={true} duration={500} offset={-80} className="cursor-pointer">
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
              About
            </Link>
          </li>
          <li className="relative group">
            <Link to="projects" smooth={true} duration={500} offset={-80} className="cursor-pointer">
              Projects
            </Link>
          </li>
          <li className="relative group">
            <Link to="experience" smooth={true} duration={500} offset={-80} className="cursor-pointer">
              Experience
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
