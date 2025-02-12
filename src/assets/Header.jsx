import React from 'react';

function Header() {
  return (
    <header className="text-white flex justify-center align-top shadow-lg sticky top-0 z-50 ">
      <nav className="font-bold col-span-1 flex items-center justify-center space-x-12 p-4">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#skills" className="hover:text-gray-400">Skills</a>
      </nav>
    </header>
  );
} 

export default Header;